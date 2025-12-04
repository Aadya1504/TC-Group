import ScreenWrapper from "../components/ScreenWrapper";
import { TopBar } from "../components/TopBar";
import { Flashcard } from "../components/Flashcard";

export default function FlashcardsPage({ onBack }) {
  return (
    <ScreenWrapper>
      <TopBar
        title="Flashcards"
        rightIcon={
          <button onClick={onBack} className="text-xs">
            Back
          </button>
        }
      />
      <Flashcard
        question="What is a binary tree?"
        answer="A tree data structure where each node has at most two children."
      />
      <div className="flex justify-between px-5 pb-5 text-xs text-gray-500">
        <button>{"< Back"}</button>
        <button>{"Next >"}</button>
      </div>
    </ScreenWrapper>
  );
}
