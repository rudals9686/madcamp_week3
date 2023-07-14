import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom'
import LoginPage from './components/login';
import Main from './components/Main'
import Signup from './components/signup';
import CreateCV from './components/createCV';
import Serach from './components/Search';
function App() {


  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route path="/" exact={true} element={<Main />}></Route>
    <Route path="/login" exact={true} element={<LoginPage />}></Route>
    <Route path="/signup" exact={true} element={<Signup />}></Route>
    <Route path="/createCV" exact={true} element={<CreateCV />}></Route>
    <Route path="/Search" exact={true} element={<Serach />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );

}

export default App;
