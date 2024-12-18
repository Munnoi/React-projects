import { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import "./Notes.css";
import { v4 as uuid } from "uuid";
import Note from "./Note";

const Notes = () => {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);
  const [editToggle, setEditToggle] = useState(null);

  const editHandler = (id, text) => {
    setEditToggle(id);
    setInputText(text);
  };

  const saveHandler = () => {
    if (editToggle) {
      setNotes(
        notes.map((note) =>
          note.id === editToggle ? { ...note, text: inputText } : note
        )
      );
    } else {
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          id: uuid(),
          text: inputText,
        },
      ]);
    }
    setInputText("");
    setEditToggle(null);
  };

  const deleteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("Notes"));
      if (data) {
        setNotes(data);
        console.log(data);
      }
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      setNotes([]);
    }
  }, []);

  useEffect(() => {
    // console.log(notes);
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="notes">
      {notes.map((note) =>
        editToggle === note.id ? (
          <CreateNote
            key={note.id}
            inputText={inputText}
            setInputText={setInputText}
            saveHandler={saveHandler}
          />
        ) : (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        )
      )}
      {!editToggle && (
        <CreateNote
          inputText={inputText}
          setInputText={setInputText}
          saveHandler={saveHandler}
        />
      )}
    </div>
  );
};

export default Notes;
