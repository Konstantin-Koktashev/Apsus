export class Overview extends React.Component{
    state={

    }
    componentDidMount(){}
    render(){
        return(
            <div className="overview">
            <h1>Welcome To Apsus</h1>
            <section className="email-app-board">
                <div className="board-header">
                    <h4>Email App</h4>
                </div>
            </section>
            <section className="todo-app-board">
            <div className="board-header">
                    <h4>Todo App</h4>
                </div>
            </section>
            <section className="book-app-board">
            <div className="board-header">
                    <h4>Board App</h4>
                </div>
            </section>
            </div>
        )
    }

}