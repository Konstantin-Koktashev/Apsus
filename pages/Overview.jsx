import { PinnedNotes } from '../NoteApp/NoteCmp/PinnedNotes.jsx';
import { EmailServices } from '../EmailApp/EmailAppServices.js';
import { EmailOverView } from './OverviewCmps/EmailOverView.jsx';

const Router = ReactRouterDOM.HashRouter;
const { NavLink } = ReactRouterDOM;
export class Overview extends React.Component {
  state = {
    emails: null,
  };
  componentDidMount() {
    this.setState({ emails: EmailServices.getOverviewEmails() });
  }
  onRemove = (id) => {
    EmailServices.remove(id);
    this.setState({ emails: EmailServices.getOverviewEmails() });
  };
  render() {
    const { emails } = this.state;
    return (
      <div className="overview">
        <h1>Welcome To Apsus</h1>
        <section className="all-apps">
          <EmailOverView></EmailOverView>

          <section className="note-app-board">
            <div className="board-header">
              <NavLink exact to="/note">
                Note App
              </NavLink>
              <PinnedNotes />
            </div>
          </section>
          <section className="book-app-board">
            <div className="board-header">
              <h4>Book App</h4>
              <NavLink exact to="/book">
                BookApp
              </NavLink>
            </div>
            <div className="testing">Hello World</div>
            <div className="testing">Hello World</div>
            <div className="testing">Hello World</div>
            <div className="testing">Hello World</div>
          </section>
        </section>
      </div>
    );
  }
}
