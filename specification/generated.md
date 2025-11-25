# AI Book Project - Generated Specifications

This document is auto-generated based on `specification/schema.json` by Spec Kit Plus.

## Chapter Schema

**Title**: AI Book Chapter Schema
**Type**: object

### Properties:

*   **`chapterNumber`** (integer, required)
    *   **Description**: The unique number of the chapter (1-10)
    *   **Minimum**: 1
    *   **Maximum**: 10

*   **`title`** (string, required)
    *   **Description**: The title of the chapter

*   **`summary`** (string, required)
    *   **Description**: A brief summary of the chapter content

*   **`content`** (string, required)
    *   **Description**: The full Markdown content of the chapter

*   **`keywords`** (array of strings, optional)
    *   **Description**: A list of keywords relevant to the chapter
