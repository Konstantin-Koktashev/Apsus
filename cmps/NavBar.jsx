
const Router = ReactRouterDOM.HashRouter;
const { withRouter , NavLink ,Link} = ReactRouterDOM;

export class NavBar extends React.Component {
    state={
        hamburgerMenue:{
            id:1
        }
        ,closeBtn:{
            id:2
        },
        isSideMenueShown:false,
        isMainPage:true
    }
    
    componentDidMount(){

      // if(currentLocation!=='/') this.setState({isMainPage:false})
  }
    handleClick=(id)=>{
        (id===1)?this.setState({isSideMenueShown:true}):this.setState({isSideMenueShown:false})  
    }
    render(){
        let classToSelect = (this.state.isSideMenueShown)? 'show-menue':''
        let headerBtnClass =(this.state.isMainPage)? '': 'show'
        return (
      <header>
        <div className="logon-hamburger-wrapper">
          <button className="hambuger-menue" onClick={() =>this.handleClick(this.state.hamburgerMenue.id)}>
              	&#x2630;
          </button>
            <h3><span>Appsus</span></h3>
          </div>
                {/* <Link to="/app" className="secondary-call-to-action-btn"> */}
                <Link to="/app" className={`secondary-call-to-action-btn ${headerBtnClass}`}>
          <button >
            App
          </button>
          </Link>
    <nav className={classToSelect}>

      <section className="nav-links">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/faq">
          FAQ
        </NavLink>
        <NavLink exact to="/about">
          About
        </NavLink>
        <NavLink exact to="/signup">
          Sign Up
        </NavLink>
        <NavLink exact to="/login">
          Log In
        </NavLink>
      <button className="close-nav-btn" onClick={() =>this.handleClick(this.state.closeBtn.id)}>
            X
        </button>
      </section>
    </nav>

        </header>
  );
}
}





If the component you are rendering it doesn't have a this.props.location, then it won't have the location to pass down to NavBar.

Though, I'd recommend using either withRouter or useLocation in your NavBar component if it needs access to the location without being a Route itself. As a note, useLocation is only usable in hook components
