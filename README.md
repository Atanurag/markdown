# Markdown Renderer

A production-minded Markdown rendering application built with **React**, **Vite**, and **Tailwind CSS**. The application renders GitHub-Flavored Markdown (GFM) documents with a clean, responsive interface and provides rich clipboard support for copying rendered content.

## Live Demo

**Application:** `https://markdown-two-beryl.vercel.app/`

## GitHub Repository

**Repository:** `https://github.com/Atanurag/markdown`

---

# Features

* Upload a single Markdown (`.md` / `.markdown`) file.
* Drag-and-drop file upload support.
* GitHub-Flavored Markdown (GFM) rendering.
* Support for:

  * Headings
  * Paragraphs
  * Ordered Lists
  * Unordered Lists
  * Nested Lists
  * Tables
  * Blockquotes
  * Inline Code
  * Code Blocks
  * Bold
  * Italic
  * Strikethrough
  * Hyperlinks
* Syntax highlighting for fenced code blocks.
* Responsive layout for desktop, tablet, and mobile devices.
* Graceful handling of invalid or unreadable files.
* Rich clipboard support:

  * `text/html`
  * `text/plain`
  * `text/markdown` (where browser support is available)
* Accessible UI with keyboard-friendly controls and focus states.

---

# Tech Stack

* React
* Vite
* JavaScript
* Tailwind CSS
* react-markdown
* remark-gfm
* react-dropzone
* react-syntax-highlighter

---

# Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── UploadArea.jsx
│   ├── MarkdownPreview.jsx
│   ├── MarkdownRenderer.jsx
│   ├── CopyButton.jsx
│   ├── EmptyState.jsx
│   └── ErrorBoundary.jsx
│
├── styles/
│   └── markdown.css
│
├── utils/
│   └── clipboard.js
│
├── App.jsx
└── main.jsx
```

---

# Setup Instructions for local testing

## Clone the repository

```bash
git clone https://github.com/Atanurag/markdown
```

## Install dependencies

```bash
npm install
```

## Start the development server

```bash
npm run dev
```

## Build the project

```bash
npm run build
```

## Preview the production build

```bash
npm run preview
```

---

# Design Decisions

This project was designed with a focus on creating a polished and production-minded frontend application within the recommended assignment time.

Key decisions include:

* Component-based architecture with clear separation of responsibilities.
* Responsive layout built with Tailwind CSS.
* GitHub-Flavored Markdown rendering using `react-markdown` and `remark-gfm`.
* Syntax highlighting for fenced code blocks.
* Drag-and-drop upload experience using `react-dropzone`.
* Error handling for invalid or unreadable files.
* Error Boundary to prevent rendering failures from crashing the application.
* Rich clipboard support for HTML, plain text, and Markdown where supported.
* Accessibility improvements including keyboard navigation, focus states, and ARIA attributes.

---

# AI Coding Assistants

AI coding assistants were used during development to:

* Discuss architecture and component organization.
* Explore implementation approaches.
* Review code structure.
* Identify edge cases.
* Improve accessibility considerations.
* Refine UI and user experience.

All generated code was reviewed, integrated, tested, and modified as needed. I understand the implementation and can explain the design decisions and technical choices made throughout the project.

---

# Additional Improvements (Given More Time)

If additional time were available, I would consider adding:

* Dark mode.
* Search within rendered Markdown.
* Table of Contents generation for long documents.
* Print-friendly rendering.
* Virtualized rendering for very large Markdown files.
* Unit and integration tests.
* End-to-end tests.
* Performance optimization for extremely large documents.
* Clipboard compatibility improvements across additional browsers.
* More comprehensive handling of malformed Markdown edge cases.

---

# Notes

* The application runs entirely in the browser.
* No backend or server-side processing is required.
* The implementation prioritizes a polished core experience while following the assignment requirements.
* The project has been deployed to Vercel for evaluation.
