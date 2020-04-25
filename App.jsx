import { NavBar } from './cmps/NavBar.jsx';
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch, NavLink } = ReactRouterDOM;
const history = History.createBrowserHistory();

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
            <div className="wrapper">
            <NavBar></NavBar>
            <main>Hello World</main>
            <footer>Footer</footer>
            </div>
        </Switch>
      </Router>
    );
  }
}
