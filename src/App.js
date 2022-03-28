import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="app">
      <div className="section">
        <Topbar />
        <Menu />
      </div>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
    </div>
  );
}

export default App;
