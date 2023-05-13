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

function App() {


  return (
    // <div className={`${Styles.App}`}>
      <Context>
        <Cardcontextuse>
          <Navbar />
          <Routes>
            <Route path="*" element={<Mainpage to="/" replace />} />
            
          </Routes>
        </Cardcontextuse>
      </Context>
    // </div>

  );
}

export default App;
