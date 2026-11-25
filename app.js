import express from "express";
// import dotenv from "dotenv";
// dotenv.config({ override: true });
// console.log("PORT from .env:", process.env.PORT);

const app = express();

app.get("/", (req, res) => res.send("<h1>Hello world!</h1>"));
app.get("/about", (req, res) => res.send("<h1>Hello about page</h1>"));
app.get("/contact", (req, res) => {
  return res.send(`<div class="container">
        <h1>URL Shortener</h1>
        <form id="shorten-form">
            <div>
                <label for="url">Enter URL:</label>
                <input type="url" name="url" id="url" required />
            </div>
            <div>
                <label for="shortCode">Custom Short URL (Optional):</label>
                <input type="text" name="shortCode" id="shortCode" />
            </div>
            <button type="submit">Shorten</button>
        </form>
        <h2>Shortened URLs</h2>
        <ul id="shortened-urls"></ul>
    </div>`);
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running  at port ${PORT}`);
});1