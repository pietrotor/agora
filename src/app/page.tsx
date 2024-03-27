import { useState } from "react";

export default function Home() {
  const [fontSize, setFontSize] = useState(100);
  return (
    <main style={{ fontSize: `${fontSize}% !important` }} className="text-2xl">
      asfasdfasdfasdf
    </main>
  );
}
