

export default class InputForm extends React.Component{

    state = {
        formType: null,
        isTyping: false
    }

    changeFormType = (newType) => {
        this.state.formType = newType;
       
    }

    inputChangeHnadler = ({target}) => {
        // (target.value !== '') ? this.setState( isTyping: true) : 
        
    }


    render(){

        return (
            <div className="noteForm">

                <input type='text' placeholder="What's on your mind..." onChange={this.inputChangeHnadler}></input>

                <div className="btns">
                    <button onClick={this.changeFormType('text')}>Text</button>
                    <button onClick={this.changeFormType('image')}>Image</button>
                    <button onClick={this.changeFormType('video')}>Video</button>
                    <button onClick={this.changeFormType('audio')}>Audio</button>
                    <button onClick={this.changeFormType('list')}>List</button>
                </div>
            </div>
        )
    }

}
