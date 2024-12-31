import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const API_KEY = 'iA5p4qDa3RgVTShi1fs2L3wAbhKLhU1yTr5fTj5z';

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal () {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData () {
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${API_KEY}`;
      try {
        const res = await fetch(url); 
        const apiData = res.json();
        setData(apiData);
        // console.log(apiData);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchAPIData();
  }, []);
  
  return (
    <>
      {data ? (<Main />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && <SideBar data={data} handleToggleModal={handleToggleModal} />}
      {data && (<Footer data={data} handleToggleModal={handleToggleModal} />)} 
    </>
  );
}

export default App;
