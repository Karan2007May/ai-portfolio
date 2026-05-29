import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "public", "projects.json");

    const json = fs.readFileSync(filePath, "utf-8");

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(JSON.parse(json));
  } catch (err) {
    res.status(500).json({
      error: "Failed to load projects",
      details: err.message,
    });
  }
}
