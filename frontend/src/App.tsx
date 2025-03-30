import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import SignUp from './ui/pages/signup';
import Dashboard from './ui/pages/dashboard';
import { Bounce, ToastContainer } from 'react-toastify';
import SignIn from './ui/pages/signin';
import Tweets from './ui/pages/tweet';
import Video from './ui/pages/video';
import Documents from './ui/pages/document';
import Links from './ui/pages/link';
import Code from './ui/pages/code';
import AudioPage from './ui/pages/audio';
import SharePage from './ui/pages/SharePage';

function App() {
  return (
    <div>
      <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
      />
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/tweet' element={<Tweets />} />
          <Route path='/links' element={<Links />} />
          <Route path='/document' element={<Documents />} />
          <Route path='/code' element={<Code />} />
          <Route path='/video' element={<Video />} />
          <Route path='/text' element={<Video />} />
          <Route path='/audio' element={<AudioPage />} />
          <Route path='/share/:shareLink' element={<SharePage />} />
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
