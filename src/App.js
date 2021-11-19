import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Admin from "./components/Admin";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
          <Route path="/catalog" exact element={<Catalog />}></Route>
          <Route path="/admin" exact element={<Admin />}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
