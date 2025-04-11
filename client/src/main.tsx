import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add Inter and JetBrains Mono fonts
const fontLinks = document.createElement('link');
fontLinks.rel = 'stylesheet';
fontLinks.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';
document.head.appendChild(fontLinks);

// Add title
const title = document.createElement('title');
title.textContent = 'Lazor.kit - The Simplest Sign-in-with-Solana Solution';
document.head.appendChild(title);

createRoot(document.getElementById("root")!).render(<App />);
