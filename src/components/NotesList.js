import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, onDelete, onArchive, onActive }) {
  if (notes.length) {
    return (
      <div className="notes-list">
      {
        notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            onActive={onActive}
            {...note}
          />
        ))
      }
      </div>
    )
  }
  else {
    return (
      <div className="notes-list__empty-message">Tidak ada catatan</div>
    )
  }
}

export default NotesList;
