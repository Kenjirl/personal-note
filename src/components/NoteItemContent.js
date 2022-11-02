import React from "react";
import { showFormattedDate } from "../utils/data";

function NoteItemContent({title, body, createdAt}) {
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <span className="note-item__date">{showFormattedDate(createdAt)}</span>
      <p className="note-item__body">{body}</p>
    </div>
  )
}

export default NoteItemContent;
