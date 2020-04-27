export  class EmailFilter extends React.Component {
    state = {
        filter: {
            sender: '',
            topic: '',
            id: ''
        }
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? parseInt(target.value) : target.value

        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })
    }
    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filter)
    }
    render() {
        const { vendor, maxPrice, minPrice } = this.state.filter
        return (
            <React.Fragment>
                <h1>Filter:</h1>
                <form onSubmit={ this.onFilter }>
                    <label htmlFor="">By vendor</label>
                    <input type="text" name='vendor' value={ vendor } onChange={ this.handleChange } />
                    <label htmlFor="">min price</label>
                    <input type="number" name='minPrice' value={ minPrice } onChange={ this.handleChange } />
                    <label htmlFor="">max price</label>
                    <input type="number" name='maxPrice' value={ maxPrice } onChange={ this.handleChange } />
                    <button>Filter</button>
                </form>
            </React.Fragment>
        )
    }
}