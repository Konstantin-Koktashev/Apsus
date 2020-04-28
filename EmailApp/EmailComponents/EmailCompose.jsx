export class EmailCompose extends React.Component {
  state = {
    email: {
      sendTo: '',
      topic: '',
      body: '',
    },
  };
  handleInput = ({ target }) => {
    const field = target.name
    const value = (target.type === 'number') ? +target.value : target.value
    this.setState(prevState => {
        return {
            email: {
                ...prevState.email,
                [field]: value
            }
        }
    })
}
  sendEmail(ev) {
    ev.stopPropagation();
  }
  render() {
    const { email } = this.state

    return (
      <form onSubmit={this.sendEmail}>
        <label htmlFor=""></label>
        <input type="text" value={email.sendTo}  name="sendTo" onChange={this.handleInput} placeholder="Send To" />
        <label htmlFor=""></label>
        <input type="text" value={email.topic} name="topic" onChange={this.handleInput} placeholder="Send To" />
        <label htmlFor=""></label>
        <input type="text" value={email.body} name="body" onChange={this.handleInput} placeholder="Send To" />
        <button type="submit">Send</button>
      </form>
    );
  }
}
