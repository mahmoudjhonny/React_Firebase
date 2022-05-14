import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/layout/Navbar";
import CreateProject from "./Components/projects/CreateProject";
import ProjectDetails from "./Components/projects/ProjectDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/create" element={<CreateProject />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
