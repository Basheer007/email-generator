// @ts-ignore
import express from "express";
import postmark from "postmark";
const app = express();

// Send an email:
let client = new postmark.ServerClient("b61b8e58-aa60-4aa4-9d35-bf409d98a9d3");

client.sendEmail({
  From: " lonap73345@easipro.com",
  To: " lonap73345@easipro.com",
  Subject: "Hello from Postmark",
  HtmlBody: "<strong>Hello</strong> dear Postmark user.",
  TextBody: "Hello from Postmark!",
  MessageStream: "outbound",
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// lonap73345@easipro
