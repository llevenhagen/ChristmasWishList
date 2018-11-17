class Present extends React.Component {
  constructor(props){
    super(props)
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
            <h4><span>Name:</span>
            {this.props.present.bought_status}</h4>
          </div>
          <button className="button"
                onClick={ ()=> this.props.toggleState('presentListIsVisible', 'presentIsVisible')}>Back to Present List
          </button>
          <PresentForm present={this.props.present}
          handleSubmit={this.props.handleSubmit}/>
      </div>
    )
  }
}
