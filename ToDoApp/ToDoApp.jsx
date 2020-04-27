import InputForm from '../ToDoApp/ToDoCmps/InputForm.jsx';
import PinnedNotes from '../ToDoApp/ToDoCmps/PinnedNotes.jsx';
import Gallery from '../ToDoApp/ToDoCmps/Gallery.jsx';
import ToDoAppServices from "./service/ToDoAppServices.js";

export class ToDoApp extends React.Component{
    state={
        content: 'galary',
        notes: []
    }
    componentDidMount(){
        this.loadNotes();
        
    }

    loadNotes() {
        
        ToDoAppServices.query()
        .then(notes => {
            this.setState({ notes })
        })
      }

    

    render(){

        const {notes} = this.state;
    
        return(
            <div className="toDoPage">

            <h1>Manage your notes</h1>

            <div className="searchNotesContainer">
            <button>Search</button>
            <input type="text" placeholder="Search notes"></input>
            <select>
                <option value="text">Text</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
                <option value="audio">Audio</option>
                <option value="list">List</option>
            </select>
            </div>

            <div className="insertNoteContainer">
                <InputForm></InputForm>
                
            </div>


            <main className="mainContent">
            {/* <PinnedNotes></PinnedNotes> */}
            { notes && 
                <Gallery notes={notes}></Gallery>}
            </main>

            </div>
        )
    }
    
}