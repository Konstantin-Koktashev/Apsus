import {PinnedNotes} from '../NoteApp/NoteCmp/PinnedNotes.jsx'

const Router = ReactRouterDOM.HashRouter;
const { NavLink } = ReactRouterDOM;
export class Overview extends React.Component{
    state={
       
    }
    componentDidMount(){

      
    }

    render(){



        return(
            <div className="overview">
            <h1>Welcome To Apsus</h1>
            <section className="email-app-board">
                <div className="board-header">
                    <h4>Email App</h4>
                    <NavLink exact to="/email">Email App</NavLink>
                </div>
            </section>
            <section className="note-app-board">
            <div className="board-header">
                    <NavLink exact to="/note">Note App</NavLink>
                    <PinnedNotes/>
             
                </div>
            </section>
            <section className="book-app-board">
            <div className="board-header">
                    <h4>Book App</h4>
                    <NavLink exact to="/book">BookApp</NavLink>

                </div>
                <div className="testing">
                        Hello World
                    </div>
                <div className="testing">
                        Hello World
                    </div>
                <div className="testing">
                        Hello World
                    </div>
                <div className="testing">
                        Hello World
                    </div>
            </section>
            </div>
        )
    }

}