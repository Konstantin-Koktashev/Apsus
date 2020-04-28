import InputForm from './NoteCmp/EditNote.jsx';
import PinnedNotes from './NoteCmp/PinnedNotes.jsx';
import Gallery from './NoteCmp/Gallery.jsx';
import NoteAppServices from './service/NoteServices.js';
import NewNotePreview from './NoteCmp/NewNotePreview.jsx';
import utilService from '../services/utilService.js';
import { NavLinks } from '../cmps/NavLinks.jsx';
import { Filter } from '../cmps/Filter.jsx';

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
const { createBrowserHistory } = History;
const history = createBrowserHistory();

export class NoteApp extends React.Component {
  state = {
    notes: [],
    showSideBar: false,
    filterBy: '',
  };
  componentDidMount() {
    this.loadNotes();
  }

  loadNotes() {
    NoteAppServices.query(this.state.filterBy).then((notes) => {
      this.setState({ notes });
    });
  }

  // toggleSideBar = () => {
  //   this.setState((prevState) => ({
  //     showSideBar: !prevState.showSideBar,
  //   }));
  //   console.log(this.state);
  // };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, () => this.loadNotes());
  };

  render() {
    const { notes } = this.state;
    const links = [
      { id: utilService.makeId(), url: '/note', name: 'MAIN' },
      { id: utilService.makeId(), url: '/note/edit', name: 'EDIT' },
      { id: utilService.makeId(), url: '/note/pinned', name: 'PINNED' },
      
    ];

    return (
      <div className="NotePage">
        {/* <div onClick={this.toggleSideBar}><Hamburger></Hamburger></div> */}

        <div className="NoteSearchBar">
          <Filter
            onSetFilter={this.onSetFilter}
            placeHolder="Search By content"
          ></Filter>

          <NavLinks
            links={links}
            navClass=""
            openClass=""
            closeClass=""
          ></NavLinks>
        </div>

        {/* <SideBarToDo show={this.state.showSideBar} ></SideBarToDo> */}

        <h1>Manage your notes</h1>
        <Switch>
          <Route
            render={(props) => {
              return <InputForm history={history} />;
            }}
            path="/note/edit"
          />

          <Route
            render={(props) => {
              return notes && <Gallery notes={notes} />;
            }}
            path="/note"
          />

          <Route 
            render={(props) => {
              return
            }}
            path="/pinned"
          />
        </Switch>
        {/* 
        <main className="mainContent">
          <PinnedNotes></PinnedNotes>
          {notes && <Gallery notes={notes}></Gallery>}
        </main> */}
      </div>
    );
  }
}
