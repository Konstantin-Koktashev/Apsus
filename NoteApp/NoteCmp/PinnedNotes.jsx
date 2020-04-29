import {StorageService, StorageServices} from '../../services/storageService.js'
import NotePreview from './NotePreview.jsx'
import {NotePreviewToolBar} from './NotePreviewToolBar.jsx'

export function PinnedNotes(props) {

        const notes = StorageServices.load('pinnedNotes')
        console.log(notes)
        return (
            <div className="pinnedNotesContainer">
               {notes.map((note) => (
        <div
          key={note.id}
          style={{ backgroundColor: note.bgc }}
          className="noteBg"
        >
          {' '}
          <NotePreview key={note.id} note={note} />{' '}
          <NotePreviewToolBar note={note} />{' '}
          
        </div>
      ))}
    </div>
           
        )

}