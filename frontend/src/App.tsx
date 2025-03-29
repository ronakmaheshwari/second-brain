import './App.css'
import SideBar from './components/ui/SideBar'

function App() {
  return (
    <div className="flex w-screen h-screen overflow-hidden p-5 space-x-5">
      <SideBar />
      <div className="flex-grow h-full shadow-lg bg-gray-100 p-5 rounded-lg">
        <h1 className="text-2xl font-semibold">Main Content</h1>
        <p>Start building your app here...</p>

      </div>
    </div>
  );
}

export default App;
