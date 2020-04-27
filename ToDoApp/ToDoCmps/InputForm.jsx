

export default class InputForm extends React.Component{

    state = {
        formType: 'text'
    }

    changeFormType = (newType) => {
        this.state.formType = newType;
        console.log(newType ,this.state)
    }


    render(){

        return (
            <div className="noteForm">

                <input type='text' placeholder="What's on your mind..."></input>

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
