import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/pages/main/main-component'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
