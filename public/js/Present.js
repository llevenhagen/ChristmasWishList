class Present extends React.Component {
  constructor(props){
    super(props)
    this.toggleState= this.toggleState.bind(this)
    this.state ={
      editPresentIsVisible: false
    }
  }
  toggleState(st1){
    this.setState(
      {
        [st1]: !this.state[st1]
      }
    )
  }
  render(){
    return (
      <div className="present-show-div">
        <div className="present-image-div">
          <img src={this.props.present.image} alt={this.props.present.name}/>
          </div>
          <div className="present-info-div">
            <h4><span>Name:</span>
            {this.props.present.name}</h4>
            <h4><span>Price:</span>
            {this.props.present.price}</h4>
            <h4><span>Bought Status:</span>
            {
             this.props.present.bought_status /*}== true ? "Someone already bought it!" : "Still on the list!"*/
            }</h4>
          </div>
          <button onClick={()=> this.toggleState('editPresentIsVisible')}>Edit</button>
          {
            this.state.editPresentIsVisible ?
          <PresentForm present={this.props.present}
          handleSubmit={this.props.handleSubmit}/> : ''
        }
      </div>
    )

  }
}
