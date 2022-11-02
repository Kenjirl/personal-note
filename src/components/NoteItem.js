import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({id, title, body, createdAt, archived, onDelete, onArchive, onActive}) {
  return (
    <div id={id} className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} onActive={onActive} />
    </div>
  )
}

export default NoteItem;
