import { Routes, Route ,Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RecipeDetail from "./pages/RecipeDetail";


function Layout(){
  return(
    <>
    <Navbar/>
    <Outlet/>

    <Footer/>
    
    </>
  )
}
function App() {
  return (
    <div className='bg-black'>
      <Routes>
        <Route path="/" element={<Layout/>} />  
        <Route index element={<Home/>} />
        <Route path="recipes/:id" element={<RecipeDetail/>} />

    </Routes>

  
    </div>
  );
}

export default App;
