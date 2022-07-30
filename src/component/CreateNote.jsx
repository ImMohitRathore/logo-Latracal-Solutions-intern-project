import React, { useState } from "react";
import "../App.css";
import image from "../image/favicon.png"

const CreatNote = (props) => {
  const [expand, setexpand] = useState(false);

  const [note, setnote] = useState({
    tittle: "",
    content: "",
  });

  const textEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setnote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  // **********************************************
  const addnote = () => {
    if (!note.tittle) {
      alert("please enter tittle");
    } else if (!note.content) {
      alert("please enter the note");
    } else {
      props.passnote(note);
      setnote({
        tittle: "",
        content: "",
      });
    }
  };

  const expandit = () => {
    setexpand(true);
  };

  // ***************************************

  return (
    <>
      <div className="heads">
        <div className="logo">
            <img src={image} alt="" />
        <div className="head-line">
        Latracal Solutions
        <span>
            Internship Project

        </span>
        </div>

        
        
        </div>
      </div>
      <div className="main-note">
        <form className="forms">
          {expand ? (
            <input
              onChange={textEvent}
              name="tittle"
              value={note.tittle}
              type="text"
              placeholder="Tittle"
            />
          ) : null}
          <textarea
            onChange={textEvent}
            onClick={expandit}
            name="content"
            value={note.content}
            cols=""
            rows=""
            placeholder="write a note...."
          ></textarea>
        </form>
        {expand ? <button onClick={addnote}>+</button> : null}
      </div>
    </>
  );
};
export default CreatNote;
