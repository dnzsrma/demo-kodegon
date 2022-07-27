import Banner from "./components/banner.js"
import Navbar from "./components/nav.js"
import Article from "./components/article.js";
import Links from "./components/links.js";
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  let isDesktop = width > 768;
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);


  return (
    <div className="App">
      <Banner/>
      <Navbar/>
      <Article isDesktop={isDesktop} w={width}/>
      <Links isDesktop={isDesktop} w={width}/>
    </div>
  );
}

export default App;
