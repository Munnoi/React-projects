import { useState, useEffect } from "react";

export default function SideBar({ handleToggleModal, data }) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  
  useEffect(() => {
    data.then(result => {
    setTitle(result.title);
    setDescription(result.explanation);
    setDate(result.date);
  }).catch(err => {
    console.error(err);
  })}, [data]);
  
  return (
    <div className="sidebar">
        <div className="bgOverlay" onClick={handleToggleModal}></div>
        <div className="sidebarContents">
          <h2>{title}</h2>
          <div className="descriptionContainer">
              <p className="descriptionTitle">{date}</p>
              <p>{description}</p>
          </div>
          <button onClick={handleToggleModal}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
    </div>
  )
}
