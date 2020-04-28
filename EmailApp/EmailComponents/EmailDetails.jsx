import { EmailServices } from '../EmailAppServices.js';
import { GoBack } from '../../cmps/GoBackBtn.jsx';
const history = History.createBrowserHistory();

export class EmailDetails extends React.Component {
  state={
    email:{
      sender:'',
      topic:'',
      body:''
    }
  }
 async componentDidMount() {
    const id = this.props.match.params.emailId;
    const email =await EmailServices.getEmailById(id);
    this.setState({email:email})  
  }
  render() {
    const { email } = this.state;
    return (
      <div>
          <h2>Hello</h2>
        {/* <section
          className="go-back-brn"
          BrowserHistoryonClick={history.goBack}
        > */}
  <GoBack backBtnSecondClass='email-go-back'></GoBack>
        {/* </section> */}
        <section className="email-topic"></section>
        <section className="sender-name">{email.sender}</section>
        <section className="email-topic">{email.topic}</section>
        <section className="email-body">{email.body}</section>
      </div>
    );
  }
}
