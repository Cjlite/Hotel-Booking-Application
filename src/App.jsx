import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      <div className="">
        {!isOwnerPath && <Navbar />}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
