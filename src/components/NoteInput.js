import React from "react";

function TitleCounterDisplay({count}) {
  return (
    <p className="note-input__title__char-limit">
      Sisa karakter : {count}
    </p>
  )
}

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      titleCounter: 30,
    }

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onNoteSubmitHandler = this.onNoteSubmitHandler.bind(this);
    this.handleTitleKeyDown = this.handleTitleKeyDown.bind(this);
  }

  handleTitleKeyDown(event) {
    this.setState((previousState) => {
      if (event.key === 'Backspace') {
        if (this.state.title === '') {
          return {
            titleCounter: 30,
          }
        }

        return {
          title: event.target.value,
          titleCounter: previousState.titleCounter + 2,
        }
      }
    })
  }

  onTitleChangeHandler(event) {
    this.setState((previousState) => {
      if (this.state.titleCounter === 0) {
        return {
          title: previousState.title,
          titleCounter: previousState.titleCounter,
        }
      }

      return {
        title: event.target.value,
        titleCounter: previousState.titleCounter - 1,
      }
    })
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    })
  }

  onNoteSubmitHandler(event) {
    event.preventDefault();

    if (this.state.title === '' || this.state.body === '') {
      alert('Judul atau isi dari Note tidak boleh kosong!')
    }
    else {
      this.props.addNote(this.state);
      
      this.setState(() => {
        return {
          title: '',
          body: '',
          titleCounter: 30,
        }
      })
    }
  }

  render() {
    return (
      <div className="note-input">
        <div className="note-input__title">
          <h2>Buat Catatan</h2>
          <TitleCounterDisplay count={this.state.titleCounter} />
        </div>

        <form className="note-input__body" onSubmit={this.onNoteSubmitHandler} >
          <input type="text" placeholder="masukkan judul catatan" value={this.state.title} onChange={this.onTitleChangeHandler} onKeyDown={this.handleTitleKeyDown} autoComplete="false" autoFocus />
          <textarea cols="30" rows="10" placeholder="masukkan catatanmu ..." value={this.state.body} onChange={this.onBodyChangeHandler} />
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}

export default NoteInput;
