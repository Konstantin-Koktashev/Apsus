const {  NavLink } = ReactRouterDOM;
export function SingleNavLink(props){
    console.log("SingleNavLink -> props", props)
    const {url,name,onCategoryChange}=props
    const linkProps= (onCategoryChange===undefined) ? {exact: true, to: url} : { onClick: () => {onCategoryChange(name.toLowerCase())}}
    return(
        <NavLink  {...linkProps}>
          {name}
        </NavLink>
    )
}