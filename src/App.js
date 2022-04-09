import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Useraccount from './components/Useraccount';

import {
  BrowserRouter as Router,
Routes,
  Route,
  

} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    
    
<Routes>
<Route exact path="/" element={<Login/>} />
<Route exact path="/Useraccount" element={<Useraccount/>} />
<Route exact path="/SignUp" element={<SignUp/>} />



</Routes>

    </Router>
    

    
    
    </>
  );
}

export default App;
