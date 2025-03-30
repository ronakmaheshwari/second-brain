import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import ContentSide from './components/ui/ContentSide';
import SideBar from './components/ui/SideBar'
import Card from './components/ui/Card';

function App() {
  return (
    <BrowserRouter>
      <div className="flex w-screen h-screen overflow-hidden p-5 space-x-5">
        <SideBar />
        <Routes>
          <Route path='/signup' element={<Card />} />
          <Route path='/signin' element={<Card />} />
          <Route path='/dashboard' element={<Card />} />
          <Route path='/tweet' element={<Card />} />
          <Route path='/links' element={<Card />} />
          <Route path='/document' element={<Card />} />
          <Route path='/code' element={<Card />} />
          <Route path='/video' element={<Card />} />
        </Routes>
        <ContentSide />
      </div>
    </BrowserRouter>
  );
}

export default App;
