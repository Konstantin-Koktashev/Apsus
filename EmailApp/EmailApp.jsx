import { EmailList } from './EmailComponents/EmailList.jsx';
import { EmailServices } from './EmailAppServices.js';

export class EmailApp extends React.Component {
  state = {
    emails: [],
    filterBy: '',
  };
  componentDidMount() {
    this.loadEmails();
  }
  loadEmails() {
    EmailServices.query(this.state.filterBy).then((emails) => {
      this.setState({ emails });
    });
  }
  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, () => this.loadEmails());
  };
  onDelete = (emailId) => {
    EmailServices.remove(emailId);
    this.loadEmails();
  };
  render() {
    const {emails}=this.state
    return (
      <div className="email-wrapper">
        <h5>primary</h5>
        <EmailList emails={emails}></EmailList>
      </div>
    );
  }
}
