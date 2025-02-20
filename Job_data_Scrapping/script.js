const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const ExcelJS = require("exceljs");

// URL to scrape
const URL =
  "https://www.timesjobs.com/candidate/job-search.html?searchType=Home_Search&from=submit&asKey=OFF&txtKeywords=&cboPresFuncArea=35";

// Function to scrape job postings
async function scrapeJobs() {
  try {
    // Fetch the HTML from the page
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);

    const jobs = [];

    // Select each job posting container
    $(".job-bx").each((index, element) => {
      const jobTitle = $(element).find("h2 a").text().trim();
      const companyName = $(element).find(".company-name").text().trim();
      const location = $(element).find(".loc").text().trim();
      const jobType = $(element).find(".job-type").text().trim() || "N/A";
      const postedDate = $(element).find(".sim-posted span").text().trim();
      const jobDescription = $(element)
        .find(".list-job-dtl li")
        .first()
        .text()
        .trim();

      // Store job details in an object
      jobs.push({ jobTitle, companyName, location, jobType, postedDate, jobDescription });
    });

    console.log(jobs);

    // Save data to an Excel file
    await saveToExcel(jobs);

  } catch (error) {
    console.error("Error scraping jobs:", error);
  }
}

// Function to save job data to an Excel file
async function saveToExcel(jobs) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Job Listings");

  // Define columns
  worksheet.columns = [
    { header: "Job Title", key: "jobTitle", width: 30 },
    { header: "Company Name", key: "companyName", width: 25 },
    { header: "Location", key: "location", width: 20 },
    { header: "Job Type", key: "jobType", width: 15 },
    { header: "Posted Date", key: "postedDate", width: 15 },
    { header: "Job Description", key: "jobDescription", width: 50 },
  ];

  // Add job data to the sheet
  jobs.forEach((job) => worksheet.addRow(job));

  // Save the Excel file
  await workbook.xlsx.writeFile("jobs.xlsx");
  console.log("Job data saved to jobs.xlsx");
}

// Run the scraper
scrapeJobs();
