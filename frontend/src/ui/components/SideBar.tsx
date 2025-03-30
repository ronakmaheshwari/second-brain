import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  const signOut = useCallback(()=>{
    localStorage.removeItem("token");
    navigate("/signin");
  },[])
  
  return (
    <div className="w-[15%] h-full bg-white flex flex-col rounded-md shadow-lg p-5 overflow-y-auto">
      <div className="flex items-center space-x-3 w-full pb-4 border-b " onClick={()=>{navigate("/dashboard")}}>
        <img
          src="https://img.icons8.com/ios/50/000000/brain--v1.png"
          alt="brain"
          className="w-8 h-8"
        />
        <h2 className="text-lg text-gray-800 font-bold">Second Brain</h2>
      </div>

      <div className="flex flex-col flex-grow mt-4 space-y-4">
        <button className="w-full flex items-center gap-3 px-4 py-3 bg-white text-black rounded-md hover:bg-indigo-700 hover:text-white" onClick={()=>{navigate("/tweet")}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20" 
              height="20" 
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              className="w-5 h-5" 
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22.46 6c-.77.35-1.6.58-2.46.69a4.24 4.24 0 0 0 1.86-2.34 8.54 8.54 0 0 1-2.71 1.03 4.2 4.2 0 0 0-7.15 3.83 12.1 12.1 0 0 1-8.77-4.46 4.2 4.2 0 0 0 1.3 5.63c-.64-.02-1.24-.2-1.76-.49v.05c0 2.06 1.47 3.78 3.42 4.17a4.18 4.18 0 0 1-1.88.07 4.2 4.2 0 0 0 3.91 2.92A8.45 8.45 0 0 1 2 18.26a11.95 11.95 0 0 0 6.29 1.84c7.55 0 11.68-6.27 11.68-11.7 0-.18 0-.35-.01-.53A8.36 8.36 0 0 0 22.46 6z"
              />
            </svg>

          <h4 className="font-semibold text-md">Tweets</h4>
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 bg-white text-black rounded-md hover:bg-indigo-700 hover:text-white" onClick={()=>{navigate("/video")}}  >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          <h4 className="font-semibold text-md">Videos</h4>
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 bg-white text-black rounded-md hover:bg-indigo-700 hover:text-white"  onClick={()=>{navigate("/document")}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
          <h4 className="font-semibold text-md">Documents</h4>
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 bg-white text-black rounded-md hover:bg-indigo-700 hover:text-white" onClick={()=>{navigate("/links")}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
          <h4 className="font-semibold text-md">Links</h4>
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 bg-white text-black rounded-md hover:bg-indigo-700 hover:text-white" onClick={()=>{navigate("/code")}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
            />
          </svg>
          <h4 className="font-semibold text-md">Code</h4>
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 bg-white text-black rounded-md hover:bg-indigo-700 hover:text-white" onClick={()=>{navigate("/text")}}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
        </svg>

          <h4 className="font-semibold text-md">Texts</h4>
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 bg-white text-black rounded-md hover:bg-indigo-700 hover:text-white" onClick={()=>{navigate("/audio")}}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          className="size-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        </svg>
          <h4 className="font-semibold text-md">Audio</h4>
        </button>
      </div>
      <div className="mt-auto">
        <button
          onClick={signOut}
          className="w-full flex items-center gap-3 px-4 py-3 bg-red-500 text-white rounded-md hover:bg-red-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6.75a3 3 0 0 0 3-3v-3m-7.5-3h10.5m0 0-3-3m3 3-3 3"
            />
          </svg>
          <h4 className="font-semibold text-md">Log Out</h4>
        </button>
      </div>
    </div>
  );
}
