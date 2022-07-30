import React, { useEffect, useState } from "react";

import CreatNote from "./CreateNote";
import Notes from "./Note";

const Dairy = () => {
  const [Additem, setAdditem] = useState([]);
  const addnote = (note) => {
    setAdditem((predata) => {
      return [...predata, note];
    });
    console.log(note);
  };

  const ondelete = (id) => {
    setAdditem((olddata) =>
      olddata.filter((currentdata, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
      <div className="create-note">
        <CreatNote passnote={addnote} />
      </div>
      <div className="notess">
        {Additem.map((val, index) => {
          return (
            <Notes
              key={index}
              id={index}
              tittle={val.tittle}
              content={val.content}
              deleteitem={ondelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default Dairy;
