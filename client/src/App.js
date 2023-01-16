import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import EditPost from "./components/EditPost/EditPost";
import Navbar from "./components/Navbar/Navbar";
import NewPost from "./components/NewPost/NewPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="new" element={<NewPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
