import NewNotePreview from './NewNotePreview.jsx'

export default class InputForm extends React.Component{

    state = {
        formType: null,
        isTyping: false,
        newNote: null
    }

    
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.newNote !== this.state.newNote) {
            // console.log(prevState, this.state)
        }
    }

    changeFormType = (newType) => {
        this.state.formType = newType;
       
    }

    inputChangeHnadler = ({target}) => {
        
        (target.value !== '') ? this.setState({isTyping: true})  : this.setState({isTyping: false});
        this.state.newNote = target.value
        console.log(this.state)
    }



    render(){
        const { newNote } = this.state
        console.log(newNote)
        return (

            <div className="insertNoteContainer">

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

            <div className="notePreview">
               
                    <NewNotePreview data={newNote}></NewNotePreview>
                </div>

            </div>
        )
    }

}
