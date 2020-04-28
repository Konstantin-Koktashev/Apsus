const {  NavLink } = ReactRouterDOM;

export function SingleNavLink(props){
    const {url,name,onCategoryChange}=props
    return(
        <NavLink  exact to={url} onClick={onCategoryChange(name.toLowerCase())}>
          {name}
        </NavLink>
    )
}
