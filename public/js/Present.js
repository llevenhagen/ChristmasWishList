class Present extends React.Component {
  constructor(props){
    super(props)
    this.toggleEditPage= this.toggleEditPage.bind(this)
    this.state ={
      editPresentIsVisible: false
    }
  }
  // toggleState(st1, st2, st3){
  //   this.setState(
  //     {
  //       [st1]: !this.state[st1],
  //     }
  //   )
  // }
  toggleEditPage(st1, st2, st3 ){
    this.setState(
      {
        [st1]: !this.state[st1],
      }
    )
    this.props.toggleState(st2, st3)
  }
  render(){
    return (
      <div className="present-show-div">
        <div className="present-image-div">
          <img src={this.props.present.image} alt={this.props.present.name}/>
          </div>
          <div className="present-info-div">
            <h4 className="name">
            {this.props.present.name}</h4>
            <h4><span>Price:</span>
            ${this.props.present.price}</h4>
            <h4><span>Bought Status:</span>
            {
             this.props.present.bought_status == 't' ? "Someone already bought it!" : "Still on the list!"
            }</h4>
          </div>
          <button className="edit-button" onClick={()=> this.toggleEditPage('editPresentIsVisible')}>Edit</button>
          {
            this.state.editPresentIsVisible ?
          <PresentForm toggleState={this.toggleEditPage}
          mainPage={this.props.mainPage}
           present={this.props.present}
          handleSubmit={this.props.handleSubmit}/> : ''
        }
      </div>
    )

  }
}
