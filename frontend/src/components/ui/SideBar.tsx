export default function SideBar() {
    return (
      <div className="w-[15%] h-full bg-gray-100 flex flex-col shadow-lg p-5 overflow-y-auto">
        <div className="flex items-center space-x-3 w-full pb-4 border-b">
          <img
            src="https://img.icons8.com/ios/50/000000/brain--v1.png"
            alt="brain"
            className="w-8 h-8"
          />
          <h2 className="text-lg text-gray-800 font-bold">Second Brain</h2>
        </div>
  
        <div className="flex flex-col flex-grow mt-4 space-y-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            📊 Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200">
            📝 Notes
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200">
            ⏰ Reminders
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200">
            ⚙️ Settings
          </button>
        </div>

      </div>
    );
  }
  