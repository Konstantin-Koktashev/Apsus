import { EmailServices } from '../EmailAppServices.js';
import { GoBack } from '../../cmps/GoBackBtn.jsx';
const history = History.createBrowserHistory();

export class EmailDetails extends React.Component {
  state = {
    email: {
      sender: '',
      topic: '',
      body: '',
    },
  };
  async componentDidMount() {
    const id = this.props.match.params.emailId;
    const email = await EmailServices.getEmailById(id);
    // const {sender,topic,body}=email
    debugger
    (email!==undefined)?  this.setState({ email }):this.setState({email:{sender:'Email was Deleted',topic:'Was Deleted',body:'Was Deleted'}})
    // this.setState({ email });
  }
  render() {
    const { email } = this.state;

    return (
      
      <div className="full-email">
        <h2>Hello</h2>
        <GoBack backBtnSecondClass="email-go-back"></GoBack>
        <section className="email-topic"></section>
        <section className="sender-name">{email.sender}</section>
        <section className="email-topic">{email.topic}</section>
        <section className="email-body">{email.body}</section>
      </div>
    );
  }
}
