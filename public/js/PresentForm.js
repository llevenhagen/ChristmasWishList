class PresentForm extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      name: '',
      image: '',
      price: '',
      bought_status: false
    }
  }
  handleChange(event){
    console.log(event.target.checked);
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [event.target.id]: value
    })
    console.log(this.state.bought_status);
  }
  handleSubmit(event){
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }
  componentDidMount(){
    if(this.props.present){
      this.setState({
        id: this.props.present.id,
        name: this.props.present.name,
        image: this.props.present.image,
        price: this.props.present.price,
        bought_status: this.props.present.bought_status
      })
    }
  }
  render(){
    console.log(this.props);
    return (
      <div>
      <button
        className="cancel-button"
        onClick={()=>this.props.mainPage()}>Cancel</button>
        <form onSubmit={this.handleSubmit}>
          <label className='label' for='name'>Name</label>
          <div>
            <input
              value={this.state.name}
              onChange={this.handleChange}
              className="input"
              type="text"
              id="name"
              ref="name"
              />
          </div>
          <label className="label" for="image">Image</label>
          <div>
            <input
              value={this.state.image}
              onChange={this.handleChange}
              className="input"
              type="text"
              id="image"
              ref="image"
              />
          </div>
          <label className="label" for="price">Price</label>
          <div>
            <input
              value={this.state.price}
              onChange={this.handleChange}
              className="input"
              type="text"
              id="price"
              ref="price"
              />
          </div>
          <label className="label" for="bought_status" >Bought Status</label>
          <div>
            <input
              value={this.state.bought_status}
              onChange={this.handleChange}
              className="input"
              type="checkbox"
              id="bought_status"
              ref="bought_status"
            />
          </div>
          <div>
            <input
              className="submit-button"
              type="submit"/>
          </div>
        </form>
      </div>
    )
  }

}
