import { EmailServices } from '../EmailAppServices.js';
const { Link } = ReactRouterDOM;

export function EmailPreview(props) {
  const { email,onDelete } = props;
  let { isRead } = email;
  let { isImportant } = email;
  let imgUrl = isRead
    ? 'EmailApp/emailicons/read.svg'
    : 'EmailApp/emailicons/unread.svg';
  let starUrl = isImportant
    ? 'EmailApp/emailicons/fullstar.svg'
    : 'EmailApp/emailicons/emptystar.svg';
  const CurrentTime = moment().format('hh:mm a');

  return (
    <article
      className="email-preview"
      // onClick={() => {
        //   this.handleClick;
      // }}
    >
      <section className="email-read-indicator">
          <div className="email-read-indicator-icon delet-icon">
        <img src={imgUrl} alt="" />
        <img src="EmailApp/emailicons/delete.svg" onClick={()=>onDelete(email.id)}/>
        </div>
      </section>
      <section className="email-text-preview">
                <Link  to={`/email/${email.id}`} onClick={()=>props.onReadEmail(email.id)}>
        <h4>{email.sender}</h4>
        <h6>{email.subject}</h6>
        <p>{EmailServices.getShortTxt(email.body)}</p>
    </Link>
      </section>
      <section className="time-importance-indicators">
        <span>{CurrentTime}</span>
        <div className="star-icon-container" onClick={()=>props.toggleImportance(email.id)} >
        <img src={starUrl}  />
        </div>
      </section>
    </article>
  );
  
}
