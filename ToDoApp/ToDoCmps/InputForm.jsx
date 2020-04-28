import NewNotePreview from './NewNotePreview.jsx'
import ToDoAppServices from '../service/ToDoAppServices.js';
export default class InputForm extends React.Component{

    state = {
        formType: 'text',
        isTyping: false,
        newNote: null
    }

    
    
    componentDidUpdate(prevProps, prevState) {
     
    }

    changeFormType = (newType) => {
        
       
    }

    inputChangeHnadler = ({target}) => {
        
        (target.value !== '') ? this.setState({isTyping: true})  : this.setState({isTyping: false});
        this.state.newNote = {
            dataType: this.state.formType,
            data: target.value
        } 
        
    }
 
    onSaveNote = (ev) => {
        ev.preventDefault()
        ToDoAppServices.save(this.state.newNote)
        .then(savedNote => {
            // console.log('note succesfuly saved:', savednote);
            this.props.history.push('/note')
        })
        .catch(err => {
            // console.log('OOPs', err);
            
        })
    }
    


    render(){
        const { newNote } = this.state
       
        return (

            <div className="insertNoteContainer">

            <div className="noteForm">
                
                <input type='text' placeholder="What's on your mind..." onChange={this.inputChangeHnadler} maxLength="180"></input>

                <div className="btns">
                    <button onClick={this.changeFormType('text')}>Text</button>
                    <button onClick={this.changeFormType('image')}>Image</button>
                    <button onClick={this.changeFormType('video')}>Video</button>
                    <button onClick={this.changeFormType('audio')}>Audio</button>
                    <button onClick={this.changeFormType('list')}>List</button>
                </div>
            </div>

            <div className="notePreview">
               
               {newNote &&  <NewNotePreview data={newNote.data}></NewNotePreview>}    
                </div>

                <button className="addNoteBtn" onClick={this.onSaveNote}>+</button>
            </div>
        )
    }

}
