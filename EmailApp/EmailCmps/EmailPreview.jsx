export function EmailPreview (){
    // const {email}=props
    return(
        <article className="email-preview">
            <section className="email-read-indicator">
                <img src="" alt=""/>
            </section>
            <section className="email-text-preview">
                <h4>Sender</h4>
                <h6>Title</h6>
                <p>First Line OF Email Is Here</p>
            </section>
            <section className="revice-time-start-mail">
                <span>Time</span>
                <img src="" alt=""/>
            </section>
        </article>
    )
}