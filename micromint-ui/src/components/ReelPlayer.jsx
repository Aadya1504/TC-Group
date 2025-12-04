export function ReelPlayer({ title, duration = "2:45" }) {
    return (
      <div className="px-5 pt-4 pb-6 flex flex-col gap-4">
        <div className="bg-mmBlue/10 rounded-3xl h-64 flex items-center justify-center">
          <button className="h-16 w-16 rounded-full bg-mmBlue text-white flex items-center justify-center text-2xl">
            ▶
          </button>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-xs text-gray-500 mt-1">{duration}</p>
        </div>
        <div className="bg-mmText rounded-full h-9 flex items-center px-4 gap-3 text-white text-xs">
          <button>▶</button>
          <div className="flex-1">
            <div className="h-1 rounded-full bg-white/30">
              <div className="h-full w-1/4 rounded-full bg-white"></div>
            </div>
          </div>
          <span>0:42</span>
          <button>🔊</button>
          <button>⤢</button>
        </div>
      </div>
    );
  }
  