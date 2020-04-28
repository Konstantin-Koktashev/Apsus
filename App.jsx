import { NavBar } from './cmps/NavBar.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/about.jsx';
import { Overview } from './pages/Overview.jsx';
import { EmailApp } from './EmailApp/EmailApp.jsx';
import { NoteApp } from './NoteApp/NoteApp.jsx';
import { BookApp } from './pages/BookApp.jsx';
import { NavLinks } from './cmps/NavLinks.jsx';
import { Header } from './cmps/header.jsx';
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch, NavLink } = ReactRouterDOM;
const history = History.createBrowserHistory();

// const History = History.createBrowserHistory();

export class App extends React.Component {
  render() {
    const links = [
      {
        id: utilService.makeId(),
        url: '/',
        name: 'Home',
      },
      {
        id: utilService.makeId(),
        url: '/faq',
        name: 'FAQ',
      },
      {
        id: utilService.makeId(),
        url: "/about",
        name: 'About',
      },
      {
        id: utilService.makeId(),
        url: "/signup",
        name: 'SignUp'
      },
      {
        id: utilService.makeId(),
        url: "/login",
        name: 'Login'
      },
    ];

    return (
      // const {links,navClass,openClass,closeClass}=this.props
      <Router>
      {/* <NavLinks links={links} navClass='' openClass='' closeClass=''></NavLinks> */}
        <Header></Header>
        {/* <NavBar></NavBar> */}
        <Switch>
          <div className="wrapper">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact component={Overview} path="/app" />
            <Route component={EmailApp} path="/email" />
            <Route component={NoteApp} path="/note" />
            <Route exact component={BookApp} path="/book" />
            <footer>Footer</footer>
          </div>
        </Switch>
      </Router>
    );
  }
}
