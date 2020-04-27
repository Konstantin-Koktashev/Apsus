



import { EmailList } from './EmailComponents/EmailList.jsx';
import { EmailServices } from './EmailAppServices.js';
import { Filter } from '../cmps/Filter.jsx';
import { EmailDetails } from './EmailComponents/EmailDetails.jsx';
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;


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
  toggleImportance=(emailId)=>{
     EmailServices.toggleEmailImportance(emailId)
    this.loadEmails();

  }
  render() {
    const {emails}=this.state
    const location=this.props.location.pathname
    const emailList=  (location==='/email')? <EmailList emails={emails} toggleImportance={this.toggleImportance}></EmailList>:''
    return (
      
      <div className="email-wrapper">
        <section className="filter-sidebar">
        <button className="hambuger-menue-email" onClick={() =>this.handleClick(this.state.hamburgerMenue.id)}>
              	&#x2630;
          </button>
        <Filter onSetFilter={ this.onSetFilter } placeHolder='Search By Sender,subject,Id'></Filter>
        </section>
       {emailList}
       <React.Fragment>
          <Switch>
        <Route  exact component={EmailDetails}  path="/email/:emailId/" />
        </Switch>
        </React.Fragment>
      </div>
      
    );
  }
}

