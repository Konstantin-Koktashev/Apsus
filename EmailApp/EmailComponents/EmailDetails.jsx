import { EmailServices } from '../EmailAppServices.js';
const history = History.createBrowserHistory();

export class EmailDetails extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.emailId;
    console.log('EmailDetails -> componentDidMount -> id', id);
    const email = EmailServices.getEmailById(id);
    
  }
  render() {
    // const { email } = this.props;
    return (
      <div>
          <h2>Hello</h2>
        <section
          className="go-back-brn"
        //   BrowserHistoryonClick={history.goBack()}
        >
          button Hello World
        </section>
        {/* <section className="email-topic"></section>
        <section className="sender-name">{email.sender}</section>
        <section className="email-topic">{email.topic}</section>
        <section className="email-body">{email.body}</section> */}
      </div>
    );
  }
}
