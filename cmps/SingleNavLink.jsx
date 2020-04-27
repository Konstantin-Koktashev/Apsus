const {  NavLink } = ReactRouterDOM;

export function SingleNavLink(props){
    console.log("SingleNavLink -> props", props)
    const {url,name}=props
    return(
        <NavLink exact to={url}>
          {name}
        </NavLink>
    )
}