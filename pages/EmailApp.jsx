import { EmailList } from "../cmps/EmailComponents/EmailList.jsx";

export class EmailApp extends React.Component {
  state = {
      emails:[],
      filterBy:''
  };
  componentDidMount() {}
  render() {
    return (
      <div className="email-wrapper">
        <h5>primary</h5>
        <EmailList></EmailList>
      </div>
    );
  }
}
