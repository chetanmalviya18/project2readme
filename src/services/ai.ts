import { GoogleGenAI } from "@google/genai";
import { ui } from "../utils/ui.js";
import { AIGeneratedData, ReadmeAnswers } from "../types/index.js";

/**
 * Service responsible for communicating with Google's Gemini Gen AI API.
 * Uses the modern @google/genai SDK to generate structured JSON readme layouts.
 */
export async function generateAICore(
  answers: ReadmeAnswers,
): Promise<AIGeneratedData> {
  const result: AIGeneratedData = {};

  // Check if Gemini API Key is configured in environment variables
  const apiKey = process.env.GEMINI_API_KEY as string;
  if (!apiKey) {
    ui.warn(
      "\nGEMINI_API_KEY environment variable is not set. Skipping AI generation.",
    );
    return result;
  }

  // Start Ora loading spinner
  const spinner = ui
    .spinner(
      "Gemini AI is analyzing your project and generating professional sections...",
    )
    .start();

  try {
    // Initialize the official Google Gen AI Client
    const ai = new GoogleGenAI({ apiKey });

    // Define the prompt instructing Gemini to return a clean JSON readme structure
    const promptText = `
      You are an expert technical writer and open-source developer.
      Analyze the following basic project details:
      - Project Title: "${answers.title}"
      - Short Description: "${answers.description}"
      - Basic Installation Command: "${answers.installation}"
      - Basic Run Command: "${answers.usage}"

      Your task is to generate and expand this information into high-quality, professional developer sections.
      You must return a raw JSON object with the following fields:
      - "description": A highly polished, engaging, and professional version of the short description.
      - "longDescription": A comprehensive, multi-paragraph overview of the project, its goals, and why it is useful.
      - "techStack": An array of 4-6 relevant modern technologies, languages, or libraries typically used in a project of this nature.
      - "installation": An expanded, detailed, step-by-step terminal installation block (e.g. including repository cloning and environment setups).
      - "usage": A professional code block showing detailed usage commands, flags, or configuration options.
      - "apiDocs": A beautifully structured Markdown table describing 2-3 standard REST API endpoints or command options relevant to this project, complete with Method/Option, Endpoint/Flag, and Description headings.

      Ensure the JSON object is completely valid and follows this exact JSON structure. Do not wrap the JSON in markdown code blocks.
    `;

    // Fetch structured content generation from Gemini 2.5 Flash
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: promptText,
      config: {
        responseMimeType: "application/json",
      },
    });

    if (response.text) {
      // Parse the emitted JSON output
      const parsedData = JSON.parse(response.text) as AIGeneratedData;

      result.description = parsedData.description || answers.description;
      result.longDescription = parsedData.longDescription || "";
      result.techStack = parsedData.techStack || [];
      result.installation = parsedData.installation || answers.installation;
      result.usage = parsedData.usage || answers.usage;
      result.apiDocs = parsedData.apiDocs || "";

      spinner.succeed("Gemini AI generated your sections successfully!");
    } else {
      spinner.warn(
        "AI generation returned empty results. Using standard inputs.",
      );
    }
  } catch (error: any) {
    spinner.fail(
      `Gemini AI Generation failed: ${error.message}. Using standard inputs.`,
    );
  }

  return result;
}
