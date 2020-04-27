import { StorageServices } from '../../services/storageService.js';
import utilService from '../../services/utilService.js';
export default {
  query,
  save,
  // remove,
  // getTodoById,
};

const STORAGE_KEY = 'notes';
let gNotes = null;

function _createNote(dataType, data) {
  return {
    id: utilService.makeId(),
    dataType,
    data,
  };
}

const gDefaultNotes = [
  _createNote('text', 'ThisIsBody'),
  _createNote('image', 'https://...'),
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
    savedNote = _createNote();
    gNotes.push(savedNote);
  }
  storageService.store(STORAGE_KEY, gNotes);

  return Promise.resolve(savedNote);
}

function query(filterBy) {
  let notes = gNotes;
  !gNotes ? (notes = StorageServices.load(STORAGE_KEY)) : (notes = gNotes);
  return Promise.resolve(notes);
}
