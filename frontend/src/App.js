import LandingPage from './pages/LandingPage';
import {Routes , Route} from "react-router-dom";
import "./app.css"
import Browse from './pages/Browse';
import Login from './pages/Login';
import Community from './pages/Community';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Account from './pages/Account';
import Signup from './pages/Signup';
import ChangePassword from './pages/ChangePassword';
import Confirmation from './pages/Confirmation';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/'>
          <Route path='' element={<LandingPage/>} ></Route>
          <Route path='browse' element={<Browse/>}></Route>
          <Route path='community' element={<Community/>}>               //done
            <Route path='blog' element={<Blog/>}></Route>               //done
          </Route>
          <Route path='post' element={<Post/>}></Route>                 //done
          <Route path='account' element={<Account/>}></Route>           //done
          <Route path='signup' element={<Signup/>}>                     //done
          </Route>
          <Route path='confirmation' element={<Confirmation/>}></Route> //done
          <Route path='login' element={<Login/>}></Route>               //done
          <Route path='ChangePassword' element={<ChangePassword/>}></Route>                         //done
        </Route>
      </Routes>
    </div>
  );
}

export default App;
