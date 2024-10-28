import "dotenv/config";
import express, { Express, Request, Response } from "express";
import c_titles from "./controller/titles";

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(c_titles);
app.use("/api", c_titles); // Applying routes to the /api path

// Basic routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Error handling for unsupported HTTP methods
app.all("/", (req: Request, res: Response) => {
  res.status(405).send("Method Not Allowed");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
