import { NavBar } from './cmps/NavBar.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/about.jsx';
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch, NavLink } = ReactRouterDOM;
// const History = History.createBrowserHistory();

export class App extends React.Component {
  render() {
    return (
      <Router>
            <NavBar  location={this.props.location}></NavBar>
        <Switch>
            <Route path="/about" component={About} />
          <div className="wrapper">
            {/* <Route exact component={SprintApp} path="/app" /> */}
            <Route exact  path="/" component={Home} />
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
