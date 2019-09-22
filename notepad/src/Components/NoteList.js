import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onNoteListClick: this.props.onNoteListClick,
      onNewNoteClick: this.props.onNewNoteClick,
      currentNoteId: ''
    };
  }

  componentDidMount() {
    this.props.onNewNoteClick(this.newNote);
  }

  updateDisplayedNote = (e) => {
    e.preventDefault();
    this.updateDisplayedNote = this.updateDisplayedNote.bind(this);
    this.state.onNoteListClick(e.target.id);
    this.setState({
      currentNoteId: e.target.id
    });
  }

  newNote = () => {
    this.state.onNewNoteClick();
    this.setState({
      currentNoteId: ''
    });
  }

  render() {
    const noteList = this.props.list;
    return (
      <div className="Note-List">
        <ul>
          {noteList.map(
            note =>
            <li key={note.objectId} id={note.objectId}
              className={(note.objectId === this.state.currentNoteId) ? 'selected' : ''}
              onClick={this.updateDisplayedNote}>
              {(note.title.length > 40) ? note.title.substr(0, 25) + '...' : note.title}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;
