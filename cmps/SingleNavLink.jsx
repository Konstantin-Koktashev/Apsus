import { eventBus } from "../services/eventBusService.js";

const {  NavLink } = ReactRouterDOM;
export  function SingleNavLink(props){
    const {url,name,iconPath,onCategoryChange}=props
    var windowSize=950
    var unsubscribeFunc=  eventBus.on('screenResized', (size)=>windowSize=size)
    // console.log("SingleNavLink -> windowSize", windowSize)
    const linkProps= (onCategoryChange===undefined) ? {exact: true, to: url} : { onClick: () => {onCategoryChange(name.toLowerCase())}}
    // const icon = (iconPath===undefined) ? '' : <Image source={iconPath}/>;
    // var img=new Image
    const icon = (windowSize>900) ? <  img source={iconPath}/> : '';
    
    // console.log("linkProps -> icon", icon)
    return(
        <NavLink  {...linkProps}>
          {icon}
          {name}
        </NavLink>
    )
}

