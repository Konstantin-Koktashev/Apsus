import {PinnedNotes} from '../NoteApp/NoteCmp/PinnedNotes.jsx'
import { EmailServices } from "../EmailApp/EmailAppServices.js";

const Router = ReactRouterDOM.HashRouter;
const { NavLink } = ReactRouterDOM;
export class Overview extends React.Component{
    state={
        emails:null
    }
    componentDidMount(){
        this.setState({emails:EmailServices.getOverviewEmails()})
    }
    onRemove=(id)=>{
        EmailServices.remove(id)
        this.setState({emails:EmailServices.getOverviewEmails()})      
    }
    render(){
        const {emails}=this.state
        return (
            <div className="overview">
            <h1>Welcome To Apsus</h1>
            <section className="all-apps">
            <section className="email-app-board">         
                    <NavLink exact to="/email" className='open-app-btn'>Open App</NavLink>
                    { emails && emails.map(email => {
                        const {sender,subject,isRead}=email
                          let imgUrl = isRead
                          ? 'EmailApp/emailicons/read.svg'
                          : 'EmailApp/emailicons/unread.svg';
                        return (
                            
                            <article className="important-overview" key={email.id}>
                            <div className="overview-icon read-unread-img-container">
                                <img src={imgUrl} alt=""/>
                                <img src="EmailApp/emailicons/delete.svg" onClick={()=>this.onRemove(email.id)}/>
                            </div>
                                <NavLink to={`/email/${email.id}`} >
                            <div className="overview-text email-text" onClick={()=>EmailServices.setEmailToRead(email.id)}>
                            <h4>{sender}</h4>
                            <h6>{subject}</h6>
                        <p>{EmailServices.getShortTxt(email.body)}</p>
                        </div>
                        </NavLink>
{}                        </article>
                        );
                    }) }
                    
                    {!emails && <div>No Important Emails</div>}
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
            </section>
            </div>
        );
    }

}