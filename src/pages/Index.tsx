import { useMemo } from "react";

const words = [
  "ephemeral", "solitude", "cascade", "whisper", "labyrinth",
  "aurora", "reverie", "obsidian", "serendipity", "velvet",
  "phantom", "mosaic", "enigma", "horizon", "ember",
  "nebula", "echo", "drift", "fracture", "silhouette",
];

const Index = () => {
  const word = useMemo(() => words[Math.floor(Math.random() * words.length)], []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <span className="text-5xl font-light tracking-widest text-foreground lowercase">
        {word}
      </span>
    </div>
  );
};

export default Index;
