import mongoose from "mongoose";

const TestCaseSchema = new mongoose.Schema({
  input: { type: String, required: true },
  expectedOutput: { type: String, required: true },
});

const ProblemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  starterCode: { type: String, required: true },
  testCases: [TestCaseSchema],
});

const Problem = mongoose.models.Problem || mongoose.model("Problem", ProblemSchema);

export default Problem;

