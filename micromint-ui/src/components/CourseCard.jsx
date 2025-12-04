export function CourseCard({ title, author, duration, onClick }) {
    return (
      <button
        onClick={onClick}
        className="w-full bg-white rounded-2xl border border-gray-100 px-4 py-3 flex items-center gap-3 shadow-sm"
      >
        <div className="h-10 w-10 rounded-full bg-mmBlue/10 flex items-center justify-center text-mmBlue text-sm font-semibold">
          {author?.[0] || "M"}
        </div>
        <div className="flex-1 text-left">
          <p className="text-sm font-medium text-mmText line-clamp-1">
            {title}
          </p>
          <p className="text-xs text-gray-500">
            {author} • {duration}
          </p>
        </div>
        <span className="text-gray-400 text-lg">›</span>
      </button>
    );
  }
  