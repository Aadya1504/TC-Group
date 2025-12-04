export function CreatorUploadForm() {
    return (
      <form className="px-5 pt-3 pb-6 flex flex-col gap-4">
        <div className="bg-mmBlue/10 rounded-2xl h-40 flex items-center justify-center">
          <span className="h-14 w-20 rounded-2xl bg-mmBlue text-white flex items-center justify-center">
            ▶
          </span>
        </div>
  
        <input
          className="w-full bg-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none"
          placeholder="Title"
        />
        <textarea
          className="w-full bg-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none min-h-[72px]"
          placeholder="Description"
        />
        <select className="w-full bg-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none">
          <option>Category</option>
          <option>Data Structures</option>
          <option>Web Development</option>
          <option>Machine Learning</option>
        </select>
  
        <label className="flex items-center justify-between text-sm">
          <span className="text-gray-700">Allow comments</span>
          <span className="relative inline-flex items-center">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-mmBlue transition-colors"></div>
            <div className="absolute left-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform"></div>
          </span>
        </label>
  
        <button className="mt-2 w-full py-3 rounded-full bg-mmBlue text-white text-sm font-semibold">
          Post
        </button>
      </form>
    );
  }
  