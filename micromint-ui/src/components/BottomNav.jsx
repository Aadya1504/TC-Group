export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-white shadow-md py-3 border-t">
      <button className="flex flex-col items-center text-mmPrimary">
        <span>🏠</span>
        <span className="text-xs">Home</span>
      </button>

      <button className="flex flex-col items-center text-gray-500">
        <span>🎞️</span>
        <span className="text-xs">Reels</span>
      </button>

      <button className="flex flex-col items-center text-gray-500">
        <span>📚</span>
        <span className="text-xs">Courses</span>
      </button>

      <button className="flex flex-col items-center text-gray-500">
        <span>👤</span>
        <span className="text-xs">Profile</span>
      </button>
    </div>
  );
}
