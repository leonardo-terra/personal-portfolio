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
    <div className='font-serif'>
      <Header />
      <div className="h-screen bg-fixed bg-cover bg-[url('./images/background-placeholder.webp')]">
        <h2 className='p-20'>under construction</h2>
      </div>
      <AboutMe />
      <Skills />
      <Experience />
      <Portfolio />
      <Contacts />
    </div>
  );
}
