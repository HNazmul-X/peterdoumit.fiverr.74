import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Navbar/Navbar";
import "./Styles/App.css"
import MainRouter from "./router/Router"
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <>
            <BrowserRouter>
              <Header></Header>
              <MainRouter></MainRouter>
              <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
