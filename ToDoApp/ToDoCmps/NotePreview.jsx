export default function NotePreview(props) {
  const { note } = props;

  return (
    // <Link to={`/note/${note.id}/${note.title}` }>
    <div className="note-preview">
      <p>ID: {note.id} </p>
      <p className="title">Data: {note.data}</p>
      <p>Data type: {note.dataType}</p>
    </div>
    // </Link>
  );
}
