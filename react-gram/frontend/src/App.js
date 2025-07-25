import "./App.css"

//pages
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

//router
import{BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
