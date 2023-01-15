import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import NewPost from './components/NewPost.jsx/NewPost';

// mock data
import { mockData } from './mockData';


function App() {

  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Dashboard />}/>
        <Route path='new' element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default App;
