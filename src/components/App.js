import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import {AuthProvider} from "../contexts/AuthContext";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<PublicRoute element={Signup} />} />
            <Route path="/login" element={<PublicRoute element={Login} />} />
            <Route path="/quiz/:id" element={<PrivateRoute element={Quiz} />} />
            <Route path="/result/:id" element={<PrivateRoute element={Result} />} />

            {/* <Home />
            <Signup />
            <Login />
            <Quiz />
            <Result /> */}

          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
