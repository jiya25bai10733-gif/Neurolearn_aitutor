import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeuroTutor AI — Emotion-Aware Learning Assistant" },
      { name: "description", content: "AI tutor that adapts explanations based on learner engagement and confusion levels." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/app/index.html");
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-sm text-muted-foreground">Loading NeuroTutor AI…</p>
    </div>
  );
}
