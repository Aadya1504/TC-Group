import { useState } from "react";

export function Flashcard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="px-5 pt-4 pb-6 flex flex-col gap-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex items-center justify-center">
        <p className="text-lg font-semibold text-center">
          {showAnswer ? answer : question}
        </p>
      </div>
      <button
        onClick={() => setShowAnswer((s) => !s)}
        className="w-full py-3 rounded-full bg-mmBlue text-white text-sm font-medium"
      >
        {showAnswer ? "Show Question" : "Show Answer"}
      </button>
    </div>
  );
}
