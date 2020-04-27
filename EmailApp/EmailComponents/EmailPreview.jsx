import { EmailServices } from '../EmailAppServices.js';

export function EmailPreview(props) {
  const { email } = props;
  const { isRead } = email;
  const { isImportant } = email;
  const imgUrl = isRead
    ? 'EmailApp/emailicons/read.svg'
    : 'EmailApp/emailicons/unread.svg';
  const starUrl = isImportant
    ? 'EmailApp/emailicons/fullstar.svg'
    : 'EmailApp/emailicons/emptystar.svg';
  const CurrentTime = moment().format('hh:mm a');
  console.log('EmailPreview -> render -> CurrentTime', CurrentTime);

  return (
    <article
      className="email-preview"
      onClick={() => {
        this.handleClick;
      }}
    >
      <section className="email-read-indicator">
          <div className="email-read-indicator-icon">
        <img src={imgUrl} alt="" />
        </div>
      </section>
      <section className="email-text-preview">
        <h4>{email.sender}</h4>
        <h6>{email.subject}</h6>
        <p>{EmailServices.getShortTxt(email.body)}</p>
      </section>
      <section className="time-importance-indicators">
        <span>{CurrentTime}</span>
        <div className="star-icon-container">
        <img src={starUrl} alt="" />
        </div>
      </section>
    </article>
  );
}
