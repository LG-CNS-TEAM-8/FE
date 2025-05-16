import "./App.css";
import Footer from "./components/Footer";
import { Provider } from "./components/ui/provider";
import Mypage from "./pages/Mypage";
import MypageEdit from "./pages/MypageEdit";

function App() {
  return (
    <Provider>
      <div className="App">
        <MypageEdit></MypageEdit>
      </div>
    </Provider>
  );
}

export default App;
