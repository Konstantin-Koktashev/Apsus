const Router = ReactRouterDOM.HashRouter;
const {Link} = ReactRouterDOM;
import {SingleNavLink} from './SingleNavLink.jsx'


export function desktopNavBar () {
    // {
    //     id: utilService.makeId(),
    //     url: '/',
    //     name: 'Home',
    //      iconPath:''
    //   }
    let classToSelect = (this.state.isSideMenueShown)? 'show-menue':''
    let headerBtnClass =(this.state.isMainPage)? '': 'show'
    const {links,navClass,onCategoryChange}=this.props
   return (
    <nav className={`nav-bar-desktop ${navClass}`}>
<section className="nav-links">
{links.map(link => <SingleNavLink key={ link.id }  url={link.url}  name={link.name} onCategoryChange={onCategoryChange} />) }

</section>
</nav>
   );
 
}
