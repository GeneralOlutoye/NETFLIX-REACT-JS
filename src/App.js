import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectiveRoute from "./components/ProtectiveRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./Pages/Account";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectiveRoute>
                <Account />
              </ProtectiveRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
