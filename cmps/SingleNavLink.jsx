import { eventBus } from "../services/eventBusService.js";

const {  NavLink } = ReactRouterDOM;
export  function SingleNavLink(props){
    const {url,name,iconPath,onCategoryChange,closeSideMenu}=props
    const IsAllowedToCloseMenue=(closeSideMenu===undefined)? '':{ onClick: () => {closeSideMenu()}}
  
    const linkProps= (onCategoryChange===undefined) ? {exact: true, to: url} : { onClick: () => {onCategoryChange(name.toLowerCase())}}

    
    // console.log("linkProps -> icon", icon)
    return(
        <NavLink  {...linkProps} onClick={()=>closeSideMenu()}>
          {name}
        </NavLink>
    )
}





// import { eventBus } from "../services/eventBusService.js";

// const {  NavLink } = ReactRouterDOM;
// export  class SingleNavLink extends React.Component{
//   state={
//     windowSize:0,
//     usubsribeFunc:null
    
//   }
// componentDidMount(){
  
//   const unsubscribeFunc=  eventBus.on('screenResized', (size)=>{this.setState({windowSize:size})})
//   this.setState({unsubscribeFunc:unsubscribeFunc})
// }
// // componentWillUnmount(){
// //   this.state.unsubscribeFunc()
// // }
// get icon(){
//   const icon = (this.state.windowSize>900) ? <  img source={iconPath}/> : '';
//   return icon
// }

//   render(){
//     const {url,name,onCategoryChange}=this.props
//     const iconPath=this.icon
//     const linkProps= (onCategoryChange===undefined) ? {exact: true, to: url} : { onClick: () => {onCategoryChange(name.toLowerCase())}}

//   return(
//         <NavLink  {...linkProps}>
//           {this.icon}
//           {name}
//         </NavLink>
//     )}
// }

