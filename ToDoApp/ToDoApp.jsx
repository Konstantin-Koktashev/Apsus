import InputForm from '../ToDoApp/ToDoCmps/InputForm.jsx';
import PinnedNotes from '../ToDoApp/ToDoCmps/PinnedNotes.jsx';
import Gallery from '../ToDoApp/ToDoCmps/Gallery.jsx';

export class ToDoApp extends React.Component{
    state={
        content: 'galary'
    }
    componentDidMount(){}
    render(){
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

            <div className="contentToggler">
            <button onClick={() => {}}></button>
            </div>

            <main className="mainContent">
            {/* <PinnedNotes></PinnedNotes> */}
            <Gallery></Gallery>
            </main>

            </div>
        )
    }
    
}