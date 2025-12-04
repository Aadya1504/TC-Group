import { useState } from "react";
import Home from "./pages/Home";
import ReelPlayerPage from "./pages/ReelPlayerPage";
import CourseOverviewPage from "./pages/CourseOverviewPage";
import ModulesListPage from "./pages/ModulesListPage";
import FlashcardsPage from "./pages/FlashcardsPage";
import CreatorUploadPage from "./pages/CreatorUploadPage";

function App() {
  const [screen, setScreen] = useState("home");

  const go = (name) => setScreen(name);

  if (screen === "reel") return <ReelPlayerPage onBack={() => go("home")} />;
  if (screen === "courseOverview")
    return (
      <CourseOverviewPage
        onBack={() => go("home")}
        onViewModules={() => go("modules")}
      />
    );
  if (screen === "modules")
    return <ModulesListPage onBack={() => go("courseOverview")} />;
  if (screen === "flashcards")
    return <FlashcardsPage onBack={() => go("courseOverview")} />;
  if (screen === "creatorUpload")
    return <CreatorUploadPage onBack={() => go("home")} />;

  return <Home onNavigate={go} />;
}

export default App;
