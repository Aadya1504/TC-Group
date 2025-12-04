import ScreenWrapper from "../components/ScreenWrapper";
import { TopBar } from "../components/TopBar";
import { CreatorUploadForm } from "../components/CreatorUploadForm";

export default function CreatorUploadPage({ onBack }) {
  return (
    <ScreenWrapper>
      <TopBar
        title="Creator Upload"
        rightIcon={
          <button onClick={onBack} className="text-xs">
            Back
          </button>
        }
      />
      <CreatorUploadForm />
    </ScreenWrapper>
  );
}
