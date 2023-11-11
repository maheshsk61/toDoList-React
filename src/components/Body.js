import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
function Body() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [notes, setNotes] = useState([]);

  function handle(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        //title:{note.title}->Task
        //content:{note.content}->Description
      };
    });
  }
  function addNotes() {
    if (note.title === "" && note.content === "") {
      alert("Please add Title and Content");
    } else if (note.title === "") {
      alert("Please add Title");
    } else if (note.content === "") {
      alert("Please add Content");
    } else {
      setNotes((prevNote) => [...prevNote, note]);
      /*const [notes, setNotes] = useState([
            { title: "Task 1", content: "Description 1"},
            { title: "Task 2", content: "Description 2"},
            // ... additional note objects
          ]);*/
      setNote({ title: "", content: "" });
    }
  }
  function deleteNotes(index) {
    setNotes((prevNote) => {
      const updatedNote = [...prevNote];
      updatedNote.splice(index, 1);
      return updatedNote;
    });
  }
  function markItAsDone(index) {
    setNotes((prevNote) => {
      const updatedNote = [...prevNote];
      updatedNote[index].done = true;
      return updatedNote;
    });
    /*const [notes, setNotes] = useState([
            { title: "Task 1", content: "Description 1", done: false },
            { title: "Task 2", content: "Description 2", done: true },
            // ... additional note objects
          ]);*/
  }
  return (
    <div className="col-xs-12 text-center">
      <form className="mx-auto img-thumbnail mb-2" style={{ width: "300px" }}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={note.title}
          onChange={handle}
          size="27"
        />
        <textarea
          cols="30"
          rows="3"
          placeholder="Content"
          name="content"
          value={note.content}
          onChange={handle}
        />
        <Fab className="bg-dark text-white mx-auto" onClick={addNotes}>
          <AddIcon />
        </Fab>
      </form>
      <div className="displayNotes text-center">
        {notes.map((item, index) => {
          return (
            <div
              className="img-thumbnail mx-auto mb-2"
              style={{ width: "300px" }}
              key={index}
            >
              <b>{item.title}</b>
              <p>{item.content}</p>
              <Fab
                className="bg-dark text-white mx-1"
                onClick={() => deleteNotes(index)}
              >
                <DeleteIcon />
              </Fab>
              <Fab
                className={`text-white ${
                  item.done ? "bg-success" : "bg-danger"
                }`}
                onClick={() => markItAsDone(index)}
              >
                <DoneOutlineIcon />
              </Fab>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Body;
