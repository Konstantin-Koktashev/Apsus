import InputForm from '../ToDoApp/ToDoCmps/InputForm.jsx';
import PinnedNotes from '../ToDoApp/ToDoCmps/PinnedNotes.jsx';
import Gallery from '../ToDoApp/ToDoCmps/Gallery.jsx';
import ToDoAppServices from "./service/ToDoAppServices.js";
import { Hamburger } from './ToDoCmps/Hamburger.jsx';
import  SideBarToDo  from './ToDoCmps/SideBarToDo.jsx';
import NewNotePreview from './ToDoCmps/NewNotePreview.jsx';

export class ToDoApp extends React.Component{
    state={
        content: 'galary',
        notes: [],
        showSideBar: false
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

      toggleSideBar = () => {
        this.setState((prevState) => ({
          showSideBar: !prevState.showSideBar,
        })); console.log(this.state)
        
      };

      

    render(){

        const {notes} = this.state;
    
        return(
            <div className="toDoPage">

                <div onClick={ this.toggleSideBar }>
            <Hamburger></Hamburger>
                </div>
            
            <SideBarToDo show={this.state.showSideBar} ></SideBarToDo>


            <h1>Manage your notes</h1>

            <InputForm></InputForm>
               
           


            <main className="mainContent">
            {/* <PinnedNotes></PinnedNotes> */}
            { notes && 
                <Gallery notes={notes}></Gallery>}
            </main>

            </div>
        )
    }
    
}