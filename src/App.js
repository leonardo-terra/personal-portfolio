import "./index.css";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <div className=''>
      <Header />
      <div className="h-screen bg-fixed bg-cover bg-[url('./images/background-placeholder.webp')]" />
      <AboutMe />
      <Skills />
      <br />
      <h3> em construção ....</h3>
    </div>
  );
}
