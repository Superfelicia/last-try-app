import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ButtonBar from './components/ButtonBar';
import EditProfile from './components/EditProfile';


function App() {

  return (
    <BrowserRouter>
    <div>
      <h2>
        <ButtonBar />
      </h2>
      <h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/editprofile" exact element={<EditProfile />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
        </Routes>
      </h2>
    </div>
    </BrowserRouter>
  );
};

export default App;