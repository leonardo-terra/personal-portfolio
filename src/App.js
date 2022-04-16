import "./index.css";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
/* import Contactme from "./pages/Contactme"; */
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <div className=''>
      <Header />
      <div className="h-screen bg-fixed bg-cover bg-[url('./images/background-placeholder.webp')]" />
      <AboutMe />
      <Skills />
      <Experience />
      <Portfolio />
      <Contacts />
      <br />
      <br />
      <br />
      <br />
      <h3> em construção ....</h3>
    </div>
  );
}
