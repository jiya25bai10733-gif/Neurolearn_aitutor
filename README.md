# NeuroTutor AI — Emotion-Aware Virtual Learning Assistant

Created with ❤️ by **Team Synapse**

---

## Overview

**NeuroTutor AI** is an Emotion-Aware Virtual Learning Assistant that continuously monitors student engagement and learning behavior. Instead of providing the same static explanation to every student, the system detects confusion through behavioral events and dynamically adapts its teaching strategy in real time.

The platform follows a neuromorphic-inspired event-driven architecture where meaningful learning events generate "spikes" that influence the tutor's decisions.

---

## Team Name: **Team Synapse**

*Inspired by the neural junctions in the human brain, Team Synapse designs event-driven, adaptive learning systems that emulate human cognitive feedback loops.*

---

## Repository Structure

Below is the directory tree of the `Neurolearn_aitutor` codebase:

```text
[DIR] ./
  [FILE] .gitignore                          # Standard git configuration ignoring build folders & lockfiles
  [FILE] .prettierignore                      # Files and folders ignored by Prettier formatter
  [FILE] .prettierrc                          # Prettier code formatting rules
  [FILE] README.md                            # Main project documentation (this file)
  [FILE] components.json                     # Configuration file for Shadcn UI components
  [FILE] eslint.config.js                    # ESLint rules for code analysis
  [FILE] package-lock.json                   # NPM dependency lockfile
  [FILE] package.json                        # Project dependencies, scripts, and metadata
  [FILE] tsconfig.json                       # TypeScript compiler options
  [FILE] vite.config.ts                      # Vite build tool and development server configuration
  [DIR] designs/                             # Mockups, design specifications, and asset previews
    [DIR] academic_warmth/
      [FILE] DESIGN.md
    [DIR] ai_tutor_neurotutor_ai/
      [FILE] screen.png
    [DIR] analytics_learning_dna_neurotutor_ai/
      [FILE] screen.png
    [DIR] dashboard_neurotutor_ai/
      [FILE] screen.png
    [DIR] landing_page_neurotutor_ai/
      [FILE] screen.png
  [DIR] public/                              # Static public assets served to the client
    [DIR] app/                               # Core front-end application pages
      [FILE] index.html                      # Landing page mock UI
      [DIR] ai_tutor_neurotutor_ai/
        [FILE] code.html                     # AI Tutor Study Space & chat simulator
      [DIR] analytics_learning_dna_neurotutor_ai/
        [FILE] code.html                     # Learning DNA analytics page
      [DIR] dashboard_neurotutor_ai/
        [FILE] code.html                     # Student Dashboard interface
      [DIR] landing_page_neurotutor_ai/
        [FILE] code.html                     # Landing Page wrapper
  [DIR] src/                                 # TanStack React wrapper codebase
    [FILE] routeTree.gen.ts                  # Generated routing tree for TanStack Router
    [FILE] styles.css                        # Tailwind CSS imports and Design System theme configurations
    [DIR] app/
      [FILE] router.tsx                      # TanStack Router initialization
      [FILE] server.ts                       # SSR helper for TanStack Start
      [FILE] start.ts                        # Entrypoint wrapper for React app hydration
    [DIR] assets/                            # Production assets used by React components
    [DIR] features/                          # Feature directories for logical modularity
      [DIR] adaptive-learning/
      [DIR] analytics/
      [DIR] assessments/
      ...
    [DIR] routes/
      [FILE] index.tsx                       # Redirects root route to /app/index.html
      [FILE] README.md
      [FILE] __root.tsx                      # Master layout, styles injector, and global metadata
    [DIR] services/                          # Core system drivers and API clients
      [DIR] ai/
      [DIR] api/
      [DIR] camera/
      [DIR] websocket/
    [DIR] shared/                            # Shared components, hooks, utilities, and constants
      [DIR] components/
        [DIR] Button/
          [FILE] button.tsx
        [DIR] Charts/
          [FILE] chart.tsx
        [DIR] Sidebar/
          [FILE] sidebar.tsx
        [DIR] ui/                            # Reusable base Shadcn UI components
          [FILE] button.tsx
          ...
      [DIR] constants/
      [DIR] hooks/
        [FILE] use-mobile.tsx
      [DIR] utils/                           # Helper functions, config variables, and error logging
        [FILE] config.server.ts
        [FILE] error-capture.ts
        [FILE] error-page.ts
        [FILE] tutor-error-reporting.ts
        [FILE] utils.ts
```

---

## Logical Model & System Flow

```text
Student Starts Session
          ↓
AI Tutor Explains Topic
          ↓
Engagement Monitoring
(Camera + Learning Activity)
          ↓
Event Generation
          ↓
Confusion Score Engine
          ↓
Adaptive Teaching Engine
          ↓
Personalized Explanation
          ↓
Quiz & Feedback
          ↓
Learning DNA Update
          ↓
Dashboard Analytics
```

### 1. Session Initialization
When a learning session begins:
1. Student selects a subject and topic.
2. The user's camera is activated for real-time engagement tracking.
3. The AI Tutor session starts and initializes the:
   * Focus Score
   * Confusion Score
   * Learning Session State
   * Event Tracking Engine

### 2. Engagement Monitoring Layer
The platform continuously collects active learning signals:
* **Behavioral Signals**: Face Present/Absent, Looking At Screen/Looking Away, Tab Switching, Inactivity.
* **Learning Signals**: Correct/Wrong Answers, Hint Requests, "Explain Again" Requests, Quiz Performance.

### 3. Event Generation Engine (Neuromorphic Spikes)
Instead of continuously modifying explanations, the system operates using event-driven generation. It waits for meaningful learning events to generate "spikes" that affect the tutoring logic.
* **Key Events**: `FOCUS_LOST`, `FOCUS_REGAINED`, `WRONG_ANSWER`, `CORRECT_ANSWER`, `HINT_REQUESTED`, `EXPLAIN_AGAIN`, `TOPIC_COMPLETED`, `USER_ABSENT`.

Example Event Object:
```json
{
  "event": "FOCUS_LOST",
  "timestamp": "2026-06-14T10:00:00"
}
```

### 4. Confusion Score Engine
Each learning event contributes to a dynamic, real-time confusion score:

| Event | Score Impact |
| --- | --- |
| **Wrong Answer** | +20 |
| **User Absent** | +15 |
| **Explain Again** | +15 |
| **Hint Request** | +10 |
| **Focus Lost** | +10 |
| **Focus Regained** | -5 |
| **Correct Answer** | -10 |

### 5. Confusion Spike Detection
When the confusion score crosses predefined thresholds, the system generates a **Confusion Spike** that triggers adaptive teaching modes:
* **0 - 30**: Low Confusion
* **31 - 50**: Moderate Confusion
* **51 - 70**: High Confusion
* **71 - 90**: Very High Confusion
* **91+**: Critical Confusion (Triggers Rescue Mode)

### 6. Adaptive Teaching Engine
The AI tutor changes its teaching strategy according to the current confusion level:
* **Mode 1 — Standard Explanation (Confusion 0-30)**: Normal academic explanations.
* **Mode 2 — Simplified Explanation (Confusion 31-50)**: Simpler language, bullet points, and shorter explanations.
* **Mode 3 — Example Mode (Confusion 51-70)**: Real-world analogical explanations (e.g., using Cars or Footballs to explain physics).
* **Mode 4 — Visual Learning Mode (Confusion 71-90)**: Renders interactive flowcharts, diagrams, concept maps, and SVGs.
* **Mode 5 — Rescue Mode (Confusion 91+)**: Detects prerequisite knowledge gaps. For example, if Newton's Laws are failing because of a lack of understanding in *Force* or *Motion*, the engine halts the lesson, teaches the prerequisite concepts first, and then returns to the main topic.

### 7. Quick Quiz Validation
After every explanation adaptation cycle, the student is presented with a Quick Quiz:
* **Success (Correct Answers)**: Generates a `MASTERY` event, reducing the confusion score.
* **Failure (Wrong Answers)**: Generates another `CONFUSION` event, prompting the next, more supportive teaching mode.

### 8. Learning DNA Engine
The platform builds a personalized cognitive profile over time by assessing which explanation types yield the best quiz performance:
* **Visual Learning Weight**: e.g., 70%
* **Example-Based Weight**: e.g., 20%
* **Textual Learning Weight**: e.g., 10%
* Future sessions automatically prioritize the most effective learning mode.

### 9. Smart Learning Environment (Focus Lock)
To prevent distractions:
* **Allowed Content**: Wikipedia, research papers, educational channels, standard learning domains.
* **Blocked Content**: Social media, video games, entertainment portals, short-form video content.
* **Focus Check**: Repeated tab-switching or focus loss triggers a `FOCUS_LOST` event, causing the tutor to check in on the student and offer simplified materials.

### 10. Session Intelligence Summary
When a session ends, the app generates a personalized session report capturing:
* Focus Score average
* Peak Confusion score
* Correct/Wrong counts
* Strong and Weak concepts identified
* Custom learning recommendations

### 11. Analytics Dashboard
The dashboard visualizes learning intelligence:
* **Topic Difficulty Heatmap**: Highlights which topics took the most time or caused the most confusion spikes.
* **Learning Events Timeline**: Shows events chronological order (e.g., `2:15 PM Confusion Spike`, `2:22 PM Focus Recovery`, `2:50 PM Rescue Mode`).
* **Learning DNA Analytics**: Displays visual vs. example vs. text learning preferences.

---

## Innovation Summary

NeuroTutor AI is a next-generation learning application combining:
1. **Biometric & Behavioral Telemetry**: Utilizing camera and tab tracking to monitor focus.
2. **Event-Driven Spiking Architecture**: Inspired by neuromorphic principles to update logic dynamically on spikes.
3. **Multi-Modal Adaptability**: Tailors pedagogy through 5 levels of explanation (textual, simple, analogical, visual, and prerequisite rescue).
4. **Distraction Prevention**: Integrated focus locking to keep students on task.