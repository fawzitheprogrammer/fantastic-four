"use client";
import NavBar from "../components/NavBar";
import Main from '../components/Main';
import Home from '../pages/Home';



// This file should hold all parent components
function App() {
  return (
    <div className="w-full xl:w-[1280px] mx-auto relative ">
      <Home />
    </div>
  );
}

export default App;