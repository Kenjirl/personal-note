import React from "react";
import { getInitialData } from "../utils/data";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchedNotes: [],
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHanlder = this.onDeleteHanlder.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActivateHandler = this.onActivateHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title, 
            body,
            createdAt: +new Date(),
            archived: false
          }
        ]
      }
    })
  }

  onDeleteHanlder(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes })
  }

  onArchiveHandler(id) {
    const newNotes = this.state.notes;
    newNotes.forEach((note) => {
      if (note.id === id) {
        note.archived = true
      }
    })

    
    this.setState(() => {
      return {
        notes: newNotes
      }
    })
  }

  onActivateHandler(id) {
    const newNotes = this.state.notes;
    newNotes.forEach((note) => {
      if (note.id === id) {
        note.archived = false
      }
    })

    this.setState(() => {
      return {
        notes: newNotes
      }
    })
  }

  render() {
    let activeNotes, archivedNotes;
    if (this.state.searchedNotes.length) {
      activeNotes = this.state.searchedNotes.filter(note => note.archived === false);
      archivedNotes = this.state.searchedNotes.filter(note => note.archived === true);
    } else {
      activeNotes = this.state.notes.filter(note => note.archived === false);
      archivedNotes = this.state.notes.filter(note => note.archived === true);
    }

    return (
      <>
        <NoteAppHeader/>
        <NoteAppBody
          activeNotes={activeNotes} 
          archivedNotes={archivedNotes} 
          addNote={this.onAddNoteHandler} 
          onDelete={this.onDeleteHanlder} 
          onArchive={this.onArchiveHandler} 
          onActive={this.onActivateHandler} 
          />
      </>
    )
  }
}

export default NoteApp;
