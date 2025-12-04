import ScreenWrapper from "../components/ScreenWrapper.jsx";
import { TopBar } from "../components/TopBar.jsx";
import ModuleItem from "../components/ModuleItem.jsx";

const modules = [
  { title: "Module 1 - Introduction", duration: "2m" },
  { title: "How to Use This Course", duration: "3m" },
  { title: "Efficiency of Algorithms", duration: "6m" },
  { title: "Understanding Big-O Notation", duration: "7m" },
  { title: "Module 2 - Basic Data Structures", duration: "12m" },
  { title: "Module 3 - Trees and Graphs", duration: "18m" },
];

export default function ModulesListPage({ onBack }) {
  return (
    <ScreenWrapper>
      <TopBar
        title="Modules List"
        rightIcon={
          <button onClick={onBack} className="text-xs">
            Back
          </button>
        }
      />
      <div className="px-5 pt-1 pb-5">
        <div className="bg-white rounded-2xl border border-gray-100 px-4 py-3">
          {modules.map((m, idx) => (
            <ModuleItem
              key={idx}
              title={m.title}
              subtitle={m.subtitle}
              duration={m.duration}
            />
          ))}
        </div>
      </div>
    </ScreenWrapper>
  );
}
