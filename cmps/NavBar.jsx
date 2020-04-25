const { NavLink } = ReactRouterDOM

export class NavBar extends React.Component {
    state={
        hamburgerMenue:{
            id:1
        }
        ,closeBtn:{
            id:2
        },
        isSideMenueShown:false
    }
    handleClick=(id)=>{
        (id===1)?this.setState({isSideMenueShown:true}):this.setState({isSideMenueShown:false})  
    }
    render(){
        let classToSelect = (this.state.isSideMenueShown)? 'show-menue':''
        return (
      <header>
          <button className="hambuger-menue" onClick={() =>this.handleClick(this.state.hamburgerMenue.id)}>
              	&#x2630;
          </button>
          <h3>
            App
        </h3>
    <nav className={classToSelect}>

      <section className="nav-links">
        <NavLink exact to="/">
          Home
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