const STORAGE_KEY = 'notes'
let gNotes = null;


function save(noteToSave) {
    var savedNote = noteToSave;
    if (noteToSave.id) {
        const noteIdx = _getIdxById(noteToSave.id)
        gNotes[noteIdx] = noteToSave;
    } else {
        savedNote = _createNote()
        gNotes.push(savedNote)
    }
    storageService.store(STORAGE_KEY, gNotes)
  
    return  Promise.resolve(savedNote);
  }


function _createNote(dataType, data) {
    return {
        
    }
}