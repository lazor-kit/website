import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Just serve the static landing page for now
  // There's no need for API routes for a static landing page

  const httpServer = createServer(app);

  return httpServer;
}
