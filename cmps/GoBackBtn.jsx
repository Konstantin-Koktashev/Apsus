const history = History.createBrowserHistory();
export function GoBack(props){
    return (
        <button className={`go-back-btn ${props.backBtnSecondClass} `} onClick={history.goBack}>
        Go Back
            </button>
    );
}