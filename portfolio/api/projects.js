import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "data", "projects.json");

    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data);

  } catch (error) {
    console.error("API Error:", error);

    res.status(500).json({
      error: "Failed to load projects.json",
      details: error.message
    });
  }
}
