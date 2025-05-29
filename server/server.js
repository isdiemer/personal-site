const express = require("express");
const { spawn } = require("child_process");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/run",(req,res) => {
    const input = req.body.input || "";
    console.log("Spawning with arg:", input);
    const child = spawn(path.join(__dirname, "WS_exec"), [input]);
    let output = "";
    child.stdout.on("data", (data) => {
    output += data.toString();
    console.log("stdout chunk:", JSON.stringify(data.toString()));
    });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
    });

  child.on("close", () => {
    res.json({ output });
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});