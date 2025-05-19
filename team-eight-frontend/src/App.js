import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Provider } from "./components/ui/provider";
import Mypage from "./pages/Mypage";
import MypageEdit from "./pages/MypageEdit";
import MypageSettings from "./pages/MypageSettings";
import Search from "./components/Search";
import Home from "./pages/Home";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="mypage" element={<Mypage />} />
            <Route path="mypage/edit" element={<MypageEdit />} />
            <Route path="mypage/settings" element={<MypageSettings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
