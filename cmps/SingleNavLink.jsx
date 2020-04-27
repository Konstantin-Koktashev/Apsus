const {  NavLink } = ReactRouterDOM;

export function SingleNavLink(props){
    const {url,name}=props
    return(
        <NavLink exact to={url}>
          {name}
        </NavLink>
    )
}