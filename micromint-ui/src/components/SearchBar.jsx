export function SearchBar({ placeholder = "Search micro courses" }) {
    return (
      <div className="px-5 pb-3">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-500">
          <span className="text-base">🔍</span>
          <input
            className="bg-transparent outline-none w-full"
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
  