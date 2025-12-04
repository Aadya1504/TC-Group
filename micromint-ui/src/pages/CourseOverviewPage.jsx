import ModuleItem from "../components/ModuleItem";

export default function CourseOverviewPage() {
  return (
    <ScreenWrapper>
      <div className="p-4 space-y-6">

        <h1 className="text-2xl font-bold text-gray-900">Data Structures and Algorithms</h1>

        {/* Progress */}
        <p className="text-sm text-gray-500">80% completed</p>

        {/* Resume */}
        <button className="w-full bg-mmPrimary text-white py-3 rounded-xl text-sm font-medium">
          Resume
        </button>

        {/* About Course */}
        <div>
          <h2 className="text-lg font-semibold mb-2">About Course</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Learn how IP, parsing, data structures, and algorithms work with simple step‑by‑step micro‑lessons.
          </p>
        </div>

        {/* Course Content */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Course Content</h2>

          {/* Module 1 */}
          <ModuleItem
            title="Module 1"
            subtitle="Introduction"
            duration="2m"
            hasArrow={true}
          />

          <ModuleItem
            title="How to Use This Course"
            duration="3m"
          />

          <ModuleItem
            title="Efficiency of Algorithms"
            duration="6m"
          />

          <ModuleItem
            title="Understanding Big O Notation"
            duration="7m"
          />

          {/* Module 2 */}
          <ModuleItem
            title="Module 2"
            subtitle="Basic Data Structures"
            hasArrow={true}
          />

          {/* Module 3 */}
          <ModuleItem
            title="Module 3"
            subtitle="Trees and Graphs"
            hasArrow={true}
          />
        </div>

      </div>
    </ScreenWrapper>
  );
}
