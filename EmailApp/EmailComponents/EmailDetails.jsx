import { EmailServices } from "../EmailAppServices.js"

export class EmailDetails extends React.Component{

    componentDidMount(){
        const id = this.props.match.params.emailId
        const email= EmailServices.getEmailById(id)

    }
    render(){
    return (
    <div>{email.body}
    HELLOOOOOO</div>
    )
    }
}