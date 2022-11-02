import React from "react";

function NoteItemAction({ id, archived, onDelete, onArchive, onActive }) {
  if (archived === false) {
    return (
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={() => onDelete(id)}>Hapus</button>
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>Arsipkan</button>
      </div>
    )
  } else {
    return (
    <div className="note-item__action">
        <button className="note-item__delete-button" onClick={() => onDelete(id)}>Hapus</button>
        <button className="note-item__archive-button" onClick={() => onActive(id)}>Aktifkan</button>
      </div>
    )
  }
}

export default NoteItemAction;
