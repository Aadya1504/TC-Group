import ScreenWrapper from "../components/ScreenWrapper";
import { TopBar } from "../components/TopBar";
import { ReelPlayer } from "../components/ReelPlayer";

export default function ReelPlayerPage({ onBack }) {
  return (
    <ScreenWrapper>
      <TopBar
        title="Reel Player"
        rightIcon={
          <button onClick={onBack} className="text-xs">
            Back
          </button>
        }
      />
      <ReelPlayer title="Introduction to Algorithms" />
    </ScreenWrapper>
  );
}
