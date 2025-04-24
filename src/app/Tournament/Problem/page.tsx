/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import CodeEditor from "./ui/CodeEditor";
import LanguageSelector from "./ui/LanguageSelector";
import OutputPanel from "./ui/OutputPanel";
import { Play } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti"; 
import problems from "./problems.json";

export default function Home() {
  const [code, setCode] = React.useState<string>("");
  const [output, setOutput] = React.useState<string>("");
  const [language, setLanguage] = React.useState<string>("javascript");
  const [error, setError] = React.useState<string>("");
  const [isRunning, setIsRunning] = React.useState<boolean>(false);
  const [selectedProblem, setSelectedProblem] = React.useState<any>(problems[0]); // Automatically select the first problem
  const [showResults, setShowResults] = React.useState<boolean>(false); // State to track whether to show results or description
  const [hasRunCode, setHasRunCode] = React.useState<boolean>(false); // Track if the code has been run
  const [passedTests, setPassedTests] = React.useState<number>(0); // Track passed test cases
  const [totalTests, setTotalTests] = React.useState<number>(0); // Track total test cases
  const [showConfetti, setShowConfetti] = React.useState<boolean>(false); // State to show confetti

  React.useEffect(() => {
    if (selectedProblem) {
      const allTestCasesInput = selectedProblem.testCases
        .map((testCase: any) => testCase.input) 
        .join(""); 
  
      setCode(selectedProblem.starterCode + allTestCasesInput); // Combine starter code and all inputs
    }
  }, [language, selectedProblem]);
  

  const handleRun = async () => {
    if (!selectedProblem) {
      setError("Please select a problem to solve.");
      return;
    }
  
    setIsRunning(true);
    setError("");
    setOutput("");
    setPassedTests(0); // Reset passed tests count
    setTotalTests(selectedProblem.testCases.length); // Set total tests count
  
    try {
      if (code.trim() === "") {
        throw new Error("Please enter some code to run");
      }
  
      const expectedOutput = selectedProblem.testCases
        .slice(0, 3)
        .map((testCase: any) => testCase.expectedOutput);
  
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, language, expectedOutput }),
      });
  
      const data = await response.json();
  
      if (data.error) {
        setError(data.error);
      } else {
        // Count passed test cases
        const passedCount = data.testResults.filter(
          (result: { passed: boolean }) => result.passed
        ).length;
        setPassedTests(passedCount);
  
        setOutput(
          data.testResults.map(
            (
              result: { expectedOutput: any; actualOutput: any; passed: boolean },
              index: number
            ) => (
              <div key={index} className="bg-gray-900 p-4 mb-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-400">
                  Test Case {index + 1}
                </h3>
                <div className="my-2">
                  <p className="font-medium text-gray-300">Expected:</p>
                  <p className="text-sm text-gray-200">{result.expectedOutput}</p>
                </div>
                <div className="my-2">
                  <p className="font-medium text-gray-300">Actual:</p>
                  <p className="text-sm text-gray-200">{result.actualOutput}</p>
                </div>
                <div className="my-2">
                  <p
                    className={`font-semibold ${
                      result.passed ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    Status: {result.passed ? "Passed" : "Failed"}
                  </p>
                </div>
              </div>
            )
          )
        );
  
        if (passedCount === selectedProblem.testCases.length) {
          toast.success("All tests passed! 🎉", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
          });
          setShowConfetti(true); // Show confetti when all tests pass
  
          // Hide the confetti after 3-4 seconds
          setTimeout(() => {
            setShowConfetti(false); // Hide confetti after 3-4 seconds
          }, 6000); // 4000ms = 4 seconds
        } else {
          toast.error("Some tests failed 😔", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
          });
          setShowConfetti(false); // Hide confetti when not all tests pass
        }
      }
  
      setHasRunCode(true);
      setShowResults(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error occurred");
      }
    } finally {
      setIsRunning(false);
    }
  };
  

  const handleToggleClick = () => {
    // Toggle between showing the description and results
    setShowResults(!showResults);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      handleRun();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [code, language]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 pb-28 mt-[80px]">
      {/* Confetti effect that appears when all tests pass */}
      {showConfetti && <Confetti />}

      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Codify Compiler
            </h1>
            <span className="text-sm text-gray-400">Press Ctrl+Enter to run</span>
          </div>

          {/* Language Selector */}
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>

        {/* Problem Selection Dropdown */}
        <div className="mb-4">
          <select
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200 hover:border-blue-500"
            value={selectedProblem.id}
            onChange={(e) => {
              const selected = problems.find(
                (problem) => problem.id === Number(e.target.value)
              );
              setSelectedProblem(selected || null);
            }}
          >
            {problems.map((problem) => (
              <option key={problem.id} value={problem.id} className="bg-gray-800">
                {problem.title}
              </option>
            ))}
          </select>

          {showResults && hasRunCode && (
            <div className="absolute top-[150px] right-4 text-2xl font-bold text-blue-500 p-2 bg-gray-900 rounded-lg shadow-lg">
              {passedTests} / {totalTests} Test Case{totalTests > 1 ? "s" : ""} Passed
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[calc(100vh-12rem)]">
          <div className="relative">
            <CodeEditor code={code} setCode={setCode} />
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              <Play className="w-4 h-4" />
              {isRunning ? "Running..." : "Run"}
            </button>
          </div>

          {/* Output Panel and Toggle Button */}
          <div className="relative ">
            {/* Toggle Button */}
            <button
              onClick={handleToggleClick}
              className="absolute top-4 right-10 bg-gray-700 text-white px-3 py-1 rounded-lg text-sm"
            >
              {showResults ? "<>" : "<>"}
            </button>

            <div className="w-full overflow-auto h-[calc(100vh-12rem)] overflow-y-auto bg-gray-800 p-4 rounded-lg border-1 border-gray-700">
              {/* Show Description */}
              {!showResults && (
                <div className="text-white">
                  <h2 className="text-lg font-semibold">{selectedProblem.title}</h2>
                  <p>{selectedProblem.description}</p>
                </div>
              )}

              {/* Show Empty Output Before Code Is Run */}
              {showResults && !hasRunCode && (
                <div className="text-white text-center">
                  <p>No output yet. Run the code to see the results.</p>
                </div>
              )}

              {/* Show Test Case Results After Code is Run */}
              {showResults && hasRunCode && <OutputPanel output={output} error={error} />}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}
