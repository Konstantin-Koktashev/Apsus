
const Router = ReactRouterDOM.HashRouter;
const {Link} = ReactRouterDOM;
import {SingleNavLink} from './SingleNavLink.jsx'


export class NavLinks extends React.Component {
    state={
        
        hamburgerMenue:{
            id:1
        }
        ,closeBtn:{
            id:2
        },

        isSideMenueShown:false,
        isMainPage:true,

    }
    
    componentDidMount(){

  }
    handleClick=(id)=>{
        (id===1)?this.setState({isSideMenueShown:true}):this.setState({isSideMenueShown:false})  
    }
    render(){
      
        let classToSelect = (this.state.isSideMenueShown)? 'show-menue':''
        let headerBtnClass =(this.state.isMainPage)? '': 'show'
        const {links,navClass,openClass,closeClass}=this.props
        return (
          <section className="nav-bar">
        <div className={`logon-hamburger-wrapper ${openClass}`}>
          <button className="hambuger-menue" onClick={() =>this.handleClick(this.state.hamburgerMenue.id)}>
              	&#x2630;
          </button>
          </div>
    <nav className={`${classToSelect} ${navClass}`}>
      <section className="nav-links">
    {links.map(link => <SingleNavLink key={ link.id } url={link.url}  name={link.name}/>) }
      <button className={`close-nav-btn ${closeClass}`} onClick={() =>this.handleClick(this.state.closeBtn.id)}>
            X
        </button>
      </section>
    </nav>
    </section>
  );
}
}


// nav class,open class, close class,URL,linkname
