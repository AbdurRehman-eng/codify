import { NextResponse } from "next/server";

// Define the language IDs for Judge0 API
const LANGUAGE_IDS = {
  javascript: 63,
  python: 71,
  cpp: 54,
  java: 62,
};

// Fetch the Judge0 API URL and keys from environment variables
const JUDGE0_API = process.env.JUDGE0_API_URL || "https://judge0-ce.p.rapidapi.com";
const RAPID_API_KEY = process.env.RAPID_API_KEY!;
const RAPID_API_HOST = process.env.RAPID_API_HOST!;

// Submit code to Judge0 API (one test case at a time)
async function submitCode(sourceCode: string, languageId: number) {
  const response = await fetch(`${JUDGE0_API}/submissions`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-KEY": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_HOST,
    },
    body: JSON.stringify({
      source_code: sourceCode,
      language_id: languageId,
    }),
  });

  const data = await response.json();
  return data.token; // Return the submission token
}

// Get the result from Judge0 API using the token
async function getResult(token: string) {
  const response = await fetch(`${JUDGE0_API}/submissions/${token}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-KEY": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_HOST,
    },
  });

  return await response.json(); // Return the result of the execution
}

export async function POST(request: Request) {
  try {
    const { code, language, expectedOutput } = await request.json();

    // Ensure no more than 3 test cases are passed
    const testCases = expectedOutput.slice(0, 3); // Limit to 3 test cases

    // Get Language ID
    const languageId = LANGUAGE_IDS[language as keyof typeof LANGUAGE_IDS];
    if (!languageId) {
      return NextResponse.json(
        { error: "Unsupported Language" },
        { status: 400 }
      );
    }

    // Prepare the code for Java if necessary
    let sourceCode = code;
    if (language === "java") {
      sourceCode = `public class Main {
        public static void main(String[] args) {
          ${code}
        }
      }`;
    }

    // Submit the code and get the token for the test case
    const token = await submitCode(sourceCode, languageId);

    // Polling for result
    let result: { stdout: string; stderr: string; status: { id: number }; compile_output: string } | null = null;
    for (let i = 0; i < 10; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      result = await getResult(token);
      if (result && result.status.id !== 1 && result.status.id !== 2) {
        break;
      }
    }

    // Compare each expected output with the actual output for each test case
    const testResults = testCases.map((testCase: string, index: number) => {
      const actual = result?.stdout.trim().split("\n")[index] || "No output"; // Get the output for each test case individually
      return {
        expectedOutput: testCase,
        actualOutput: actual,
        passed: actual === testCase.trim(),
      };
    });

    return NextResponse.json({
      testResults: testResults,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error occurred" }, { status: 500 });
  }
}
