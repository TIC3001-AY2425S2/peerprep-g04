import http from "http";
import express from "express";
import cors from "cors";
import "dotenv/config";
import index from "./index.js";
import { connectToDB } from "./model/repository.js";
import matchRoutes from "./routes/match.js";
import authRoutes from "./routes/auth-routes.js";

const app = express();
const port = process.env.PORT || 3001;

// ✅ CORS middleware (very top and well configured)
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true, // if you're using cookies or auth headers
}));

// ✅ JSON body parser
app.use(express.json());

// ✅ Routes
app.use("/api", matchRoutes);
app.use("/api/auth", authRoutes);

// ✅ Start HTTP server
const server = http.createServer(index);

connectToDB()
  .then(() => {
    console.log("MongoDB Connected!");
    server.listen(port, () => {
      console.log("User service server listening on http://localhost:" + port);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB");
    console.error(err);
  });
