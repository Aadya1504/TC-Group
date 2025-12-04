export function ProgressBar({ value }) {
    return (
      <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full bg-mmBlue rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    );
  }
  