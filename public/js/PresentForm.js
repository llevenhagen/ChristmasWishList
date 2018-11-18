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
    this.setState({[event.target.id]: event.target.value})
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
    return (
      <div>
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
              type="boolean"
              id="bought_status"
              ref="bought_status"
            />
          </div>
          <div>
            <input
              className="button"
              type="submit"/>
            <button
              className="button"
              onClick={()=> this.props.toggleState('presentListIsVisible', 'addPresentIsVisible')}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}
