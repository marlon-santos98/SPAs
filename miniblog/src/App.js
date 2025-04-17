import './App.css';
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect, use } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
//context 
import { AuthProvider } from './context/AuthContext';

//pages
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()


  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <>    <div className='App'>
    <AuthProvider value={{user}}>
      <BrowserRouter>
      <Navbar/>
        <div className="container">
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/'/>}></Route>
              <Route path='/register' element={!user ? <Register /> : <Navigate to='/'/>}></Route>
              <Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to='/login'/>}></Route>
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login'/>}></Route>
              
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
    </div>
    </>
  );
}

export default App;
