import NotePreview from './NotePreview.jsx'

export default function Gallery(props) {
    
        return (
            
            <div className="gallery" >
             { props.notes.map(note => <NotePreview  key={ note.id } note={ note } />) }
            </div>
            
        )

}