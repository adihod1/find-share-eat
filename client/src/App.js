import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/pages/main/main-component'
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./components/pages/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/saved" element={<Main />} />
        <Route path="/shared" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
