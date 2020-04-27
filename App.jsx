import { NavBar } from './cmps/NavBar.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/about.jsx';
import { Overview } from './pages/Overview.jsx';
import { EmailApp } from './EmailApp/EmailApp.jsx';
import { ToDoApp } from './ToDoApp/ToDoApp.jsx';
import { BookApp } from './pages/BookApp.jsx';
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch, NavLink } = ReactRouterDOM;
// const History = History.createBrowserHistory();

export class App extends React.Component {
  render() {
    return (
      <Router>
            <NavBar  location={this.props.location}></NavBar>
        <Switch>
          <div className="wrapper">
            <Route exact  path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact component={Overview} path="/app" />
            <Route exact component={EmailApp} path="/email" />
            <Route exact component={ToDoApp} path="/todo" />
            <Route exact component={BookApp} path="/book" />
            {/* <Route component={About} path="/faq" />
              <Route component={About} path="/signup" />
              <Route component={About} path="/login" /> */}
            {/* <Home></Home> */}
            <footer>Footer</footer>
          </div>
        </Switch>
      </Router>
    );
  }
}
