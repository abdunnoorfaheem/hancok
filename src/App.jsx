
import './App.css';
import {Routes , Route} from "react-router-dom";
import RootLayout from './components/layouts/RootLayout';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<RootLayout/>}>
       <Route index element={<Home/>}/>
       <Route path="/aboutUs" element={<AboutUs/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
