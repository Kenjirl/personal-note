import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NoteAppBody({ addNote, activeNotes, archivedNotes, onDelete, onArchive, onActive }) {
    return (
      <div className="note-app__body">
        <NoteInput addNote={addNote} />

        <h2 className="notes-list__title">Catatan Aktif</h2>
        <NotesList 
          notes={activeNotes} 
          onDelete={onDelete} 
          onArchive={onArchive}
        />
        
        <h2 className="notes-list__title">Arsip</h2>
        <NotesList 
          notes={archivedNotes} 
          onDelete={onDelete} 
          onActive={onActive}
        />
      </div>
    )
}

export default NoteAppBody;
