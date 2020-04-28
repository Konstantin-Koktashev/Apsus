import { EmailList } from './EmailComponents/EmailList.jsx';
// import { EmailDetails } from './EmailComponents/EmailDetails.jsx';
import { EmailCompose } from './EmailComponents/EmailCompose.jsx';
import { EmailDetails } from './EmailComponents/EmailDetails.jsx';
import { EmailServices } from './EmailAppServices.js';
import { Filter } from '../cmps/Filter.jsx';
import { NavLinks } from '../cmps/NavLinks.jsx';
import utilService from '../services/utilService.js';
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
const { createBrowserHistory } = History;
const history = createBrowserHistory();

export class EmailApp extends React.Component {
  state = {
    emails: null,
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
  toggleImportance = (emailId) => {
    EmailServices.toggleEmailImportance(emailId);
    this.loadEmails();
  };
  render() {
    const { emails } = this.state;
    const location = this.props.location.pathname;
    // const emailList =
    // location === '/email' ? (
    //   <EmailList
    //     emails={emails}
    //     toggleImportance={this.toggleImportance}
    //   ></EmailList>
    // ) : (
    //   ''
    // );
    const links = [
      { id: utilService.makeId(), url: 'email/inbox', name: 'Inbox' },
      { id: utilService.makeId(), url: 'email/starred', name: 'Starred' },
      { id: utilService.makeId(), url: 'email/send', name: 'Sent' },
      { id: utilService.makeId(), url: 'email/drafts', name: 'Drafts' },
      { id: utilService.makeId(), url: 'email/compose', name: 'compose' },
    ];

    return (
      <div className="email-wrapper">
        <section className="filter-search-bar">
          <NavLinks
            links={links}
            navClass="email-navbar"
            openClass="email-open-nav"
            closeClass="email-close-nav"
          ></NavLinks>
          <Filter
            onSetFilter={this.onSetFilter}
            placeHolder="Search By Sender,subject,Id"
          ></Filter>
        </section>
        {emails && (
          <EmailList
            emails={emails}
            toggleImportance={this.toggleImportance}
          ></EmailList>
        )}
        {/* {emails && <EmailDetails email={emails[0]}></EmailDetails>} */}
        <Switch>
          <Route component={EmailDetails} exact path="/email/:emailId" />
          <Route
            render={(props) => <EmailCompose {...props} />}
            exact
            path="/email/compose"
          />
        </Switch>
      </div>
    );
  }
}
