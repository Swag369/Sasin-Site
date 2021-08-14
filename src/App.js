import './App.css';
import Nav from "./Navigation";
import Home from "./Home.js";
import Gallery from "./Gallery.js";
import Experience from "./Experience.js";
import MusicPlayer from "./MusicPlayer.js";
import Footer from "./Footer.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

const App = () => {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route path = "/Experience" component = {Experience} />
              <Route path = "/Gallery" component = {Gallery} />
              <Route path = "/Music" component = {MusicPlayer} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    )
}


export default App;
