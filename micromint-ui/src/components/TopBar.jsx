export function TopBar({ title, rightIcon }) {
    return (
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        {rightIcon ? (
          <button className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
            {rightIcon}
          </button>
        ) : null}
      </div>
    );
  }
  