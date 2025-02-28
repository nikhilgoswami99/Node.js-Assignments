import express from "express";
import { nanoid } from 'nanoid';
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"));
});

app.post("/long-to-short", (req, res) => {
    try {
        const { longUrl } = req.body;

        // Validate the URL
        if (!longUrl || !/^https?:\/\/.+/.test(longUrl)) {
            return res.status(400).json({ success: false, message: "Invalid URL format" });
        }

        const uniqueId = nanoid(8);
        const shortUrl = `http://localhost:5000/${uniqueId}`;

        let urlObj = {};

        // Read existing data
        if (fs.existsSync("url-data.json")) {
            const fileData = fs.readFileSync("url-data.json", "utf8");
            urlObj = fileData ? JSON.parse(fileData) : {};
        }

        // Store the URL
        urlObj[uniqueId] = longUrl;
        fs.writeFileSync("url-data.json", JSON.stringify(urlObj, null, 2));

        res.json({ success: true, data: shortUrl });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

app.get("/:shortUrl", (req, res) => {
    try {
        const uniqueId = req.params.shortUrl;

        if (!fs.existsSync("url-data.json")) {
            return res.status(404).json({ success: false, message: "Short URL not found" });
        }

        const fileData = fs.readFileSync("url-data.json", "utf8");
        const urlObj = fileData ? JSON.parse(fileData) : {};

        if (!urlObj[uniqueId]) {
            return res.status(404).json({ success: false, message: "Short URL not found" });
        }

        res.redirect(urlObj[uniqueId]);

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

app.listen(5000, () => console.log(`Server is up and running at port 5000`));
