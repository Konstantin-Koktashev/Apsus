import { EmailPreview } from "./EmailPreview.jsx";

export function EmailList(props){
    console.log("EmailList -> props", props)
    return(
        <div className="email-list">
        { props.emails.map(email => <EmailPreview key={ email.id } email={ email } />) }
    </div>
    )
}