import { useEffect, useState } from "react";

export default function Footer({ handleToggleModal, data }) {
  const [title, setTitle] = useState('')

  useEffect(() => {
  data.then(result => {
    setTitle(result.title);
  }).catch(err => {
    console.error(err);
  })}, [data]);

  return (
    <footer>
        <div className="bgGradient"></div>
        <div>
            <h1>APOD PROJECT</h1>
            <h2>{title}</h2>
        </div>
        <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}
