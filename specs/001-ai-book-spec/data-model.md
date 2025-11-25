# Data Model: AI Book Project

## Entities

### Chapter

*   **Description**: Represents a single chapter of the AI Book.
*   **Attributes**:
    *   `chapterNumber`: Integer (1-10), Unique, Required.
    *   `title`: String, Required.
    *   `summary`: String, Required.
    *   `content`: String (Markdown), Required.
    *   `keywords`: Array of Strings, Optional.
*   **Relationships**: Part of the AI Book.

### Specification

*   **Description**: Represents the auto-generated documentation from the content schema (`schema.json`).
*   **Attributes**:
    *   `title`: String, Required.
    *   `content`: String (Markdown, derived from `schema.json`), Required.
*   **Relationships**: Part of the project documentation.

### Meta-Document

*   **Description**: Represents supplementary project documents (e.g., Constitution, Plan, Tasks, Implement).
*   **Attributes**:
    *   `title`: String, Required.
    *   `content`: String (Markdown), Required.
*   **Relationships**: Part of the project documentation.
