# Quickstart Guide: AI Book Project

This guide provides a minimal set of steps to get the AI Book project up and running locally.

## Prerequisites

*   Node.js (LTS version)
*   npm (Node Package Manager) or Yarn

## Setup

1.  **Clone the repository:**
    ```bash
    git clone [repository_url]
    cd my-book
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    # OR
    yarn start
    ```
    This will open the site in your browser at `http://localhost:3000`.

## Building for Production

To build the static site for deployment:

```bash
npm run build
# OR
yarn build
```

The static files will be generated in the `build/` directory.

## Content Creation

*   Chapters are located in the `book/` directory.
*   Meta-documents (constitution.md, specify.md, tasks.md, plan.md, implement.md) are in the root directory.
*   Edit Markdown files to update content. Docusaurus will hot-reload changes in development mode.
