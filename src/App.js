// react router dom
import { Routes, Route ,redirect } from "react-router-dom";
// // context

import Context from "./context/Context";
import Cardcontextuse  from "./context/Cardcontextuse";
// css
import Styles from "./App.module.css"

// comoponents
import Mainpage from './components/Mainpage';
import Navbar from "./components/Navbar";
import Shopcart from "./components/Shopcart";

function App() {


  return (
          <Context>
            <Cardcontextuse>
              <Navbar />
              <Routes>
                  <Route path="/shopcart" element={<Shopcart></Shopcart>}></Route>
                  <Route path="/" element={<Mainpage to="/" replace />} />

              </Routes>
            </Cardcontextuse>
          </Context>
  );
}

export default App;
