

export default class InputForm extends React.Component{

    state = {
        formType: 'text'
    }


    render(){

        return (
            <div className="noteForm">

                <input type={this.state.formType} placeholder="What's on your mind..."></input>

                <div className="btns">
                    <button>Text</button>
                    <button>Image</button>
                    <button>Video</button>
                    <button>Audio</button>
                    <button>List</button>
                </div>
            </div>
        )
    }

}
