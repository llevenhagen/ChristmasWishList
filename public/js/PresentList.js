class PresentList extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="presents-container">
        {this.props.presents.map((present, index)=> {
          return (
            <div className="present-div">
              <div className="present-img"
              onClick={ ()=>
                {this.props.getPresent(present)
                  this.props.toggleState('presentListIsVisible', 'presentIsVisible')}}
                  >
                  <img src={present.image}
                  alt={present.name}/>
              </div>
              <div className="present-name">

                <button className="button"
                onClick={()=>
                  this.props.deletePresent(present, index)}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
