import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in (credentials in local storage)
    const userEmail = localStorage.getItem("userEmail");
    const userPassword = localStorage.getItem("userPassword");

    if (userEmail && userPassword) {
      setLoggedIn(true);
    }
  }, []);

  const PrivateRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/Login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PrivateRoute element={<Home />} />} />
          <Route path="about" element={<PrivateRoute element={<About />} />} />
          <Route
            path="dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  const userEmail = localStorage.getItem("userEmail");
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome, {userEmail}</p>
    </div>
  );
}

function About() {
  const userEmail = localStorage.getItem("userEmail");

  return (
    <div>
      <h2>About</h2>
      <p>Welcome, {userEmail}</p>
    </div>
  );
}

function Dashboard() {
  const userEmail = localStorage.getItem("userEmail");

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {userEmail}</p>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
