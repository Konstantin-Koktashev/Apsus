import { StorageServices } from '../../services/storageService.js';
import utilService from '../../services/utilService.js';
export default {
  query,
  save,
  setPlaceHolder,
  // remove,
  // getTodoById,
};

const STORAGE_KEY = 'notes';
let gNotes = null;

function _createNote(dataType, data, bgc) {
  return {
    id: utilService.makeId(),
    dataType,
    data,
    bgc
  };
}

const gDefaultNotes = [
  _createNote('text', 'ThisIsBody', 'lightgreen'),
  _createNote('image', 'https://images.befunky.com/wp/wp-2014-08-milky-way-1023340_1280.jpg?auto=format&fm=jpg&q=75&w=1184&ixlib=js-1.4.1'),
  _createNote('video', 'https://www.youtube.com/embed/HuS5NuXRb5Y')
];

function _creatNotes() {
  gNotes = StorageServices.load(STORAGE_KEY, gDefaultNotes);
  StorageServices.store(STORAGE_KEY, gNotes);
}
_creatNotes();

function save(noteToSave) {
  var savedNote = noteToSave;
  if (noteToSave.id) {
    const noteIdx = _getIdxById(noteToSave.id);
    gNotes[noteIdx] = noteToSave;
  } else {
    savedNote = _createNote(noteToSave.dataType, noteToSave.data, noteToSave.bgc);
    gNotes.push(savedNote);
  }
  StorageServices.store(STORAGE_KEY, gNotes);
  console.log(gNotes)
  return Promise.resolve(savedNote);
}

function query(filterBy) {
  filterBy = filterBy.toLowerCase()
  var notes = gNotes;
  if (filterBy) {
    notes = gNotes.filter((note => {
      return (
        note.data.toLowerCase().includes(filterBy) ||
        note.dataType.toLowerCase().includes(filterBy)
        
        )
    }))
  } 

  !gNotes ? (notes = StorageServices.load(STORAGE_KEY)) : notes ;
  return Promise.resolve(notes);
}


function setPlaceHolder(type) {
  switch (type) {
    case 'text':
      return "What's on your mind..."
    case 'image':
      return "Paste url link address..."
    case 'video':
      return "www.youtube.com/watch?v=[Insert only this part...]"
    case 'audio':
      return "Record somthing"
    case 'list':
      return "Start a ToDo list!"
  
  }
}
  

