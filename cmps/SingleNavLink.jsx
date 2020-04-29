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

