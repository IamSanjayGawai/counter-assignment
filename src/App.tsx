import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import './App.css'
import Home from './pages/Home'



const App = () => {
  return (

      <Router>
        <MainApp />
      </Router>

  );
};

const MainApp = () => {

  return (
    <>
          <Routes>
<Route index element={<Home />} />
</Routes>
    </>
  )
}

export default App
