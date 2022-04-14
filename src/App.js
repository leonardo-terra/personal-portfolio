import "./index.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

export default function App() {
  return (
    <div className=''>
      <Header />
      <div className="min-h-screen bg-fixed bg-cover bg-[url('./images/background-placeholder.webp')]" />
      <AboutMe />
      <span>hello world!</span>
    </div>
  );
}
