import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/The-Coding-Network/' exact />
        <Route component={About} path='/The-Coding-Network/information' />
        <Route component={Project} path='/The-Coding-Network/project' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
