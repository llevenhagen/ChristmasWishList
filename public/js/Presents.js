class Presents extends React.Component {
  constructor(props){
    super(props)
    this.getPresents=this.getPresents.bind(this)
<<<<<<< HEAD
    this.getPresents=this.getPresents.bind(this)
=======
    this.getPresent=this.getPresent.bind(this)
>>>>>>> 493a0e4c70f4a8965073a55489105acb7a7b449c
    this.deletePresent=this.deletePresent.bind(this)
    this.toggleState=this.toggleState.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
    this.state = {
      presentListIsVisible: true,
      addPresentIsVisible: false,
      presentIsVisible: false,
      editPresentIsVisible: false,
      presents: [],
      present: {}
    }
  }
  componentDidMount(){
    this.getPresents()
  }
  deletePresent(present, index){
    fetch('/presents/' + present.id,
  {
    method: 'DELETE'
  }).then(data => {
    console.log(data)
    this.setState({
      presents: [
        ...this.state.presents.slice(0, index),
        ...this.state.presents.slice(index+1)
      ]
    })
  })
  }
  getPresents(){
    fetch('/presents')
    .then(response=> response.json())
    .then(data=> {
      this.setState({
        presents:data
      })
      console.log(data);
    }).catch(error=>console.log(error))
  }
  getPresent(present){
    this.setState({present: present})

  }
  toggleState(st1, st2){
    this.setState(
      {
        [st1]: !this.state[st1],
        [st2]: !this.state[st2]
      }
    )
  }
  handleCreate(present){
    console.log([present, ...this.state.present])
    this.setState({presents: [present, ...this.state.presents]})
  }
  handleCreateSubmit(present){
    console.log('hey')
    fetch('/presents', {
      body: JSON.stringify(present),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdPresent => {
      return createdPresent.json()
    }).then(jsonedPresent => {
      this.handleCreate(jsonedPresent),
      this.toggleState('addPresentIsVisible', 'presentListIsVisible')
    }).catch(error=> console.log(error))
  }
  handleUpdateSubmit(present) {
      fetch('/presents/' + present.id, {
        body: JSON.stringify(present),
        method: 'PUT',
        headers: {
          'Accept' : 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(updatedPresent => {
        return updatedPresent.json()
      })
      .then(jsonedPresent => {
        this.getPresents()
        this.toggleState('presentListIsVisible', 'presentIsVisible')
      }).catch(error => console.log(error))
      console.log(present)
    }
  render(){
    return(
      <div className="main">
        {
          this.state.presentListIsVisible ?
          <PresentList
            presents={this.state.presents}
            toggleState={this.toggleState}
            getPresent={this.getPresent}
            deletePresent={this.deletePresent}/>
            : ''
        }
        {
          this.state.addPresentIsVisible ?
          <PresentForm
          toggleState={this.toggleState}
          handleCreate={this.handleCreate}
          handleSubmit={this.handleCreateSubmit}/>
          : ''
        }
        {
          this.state.presentIsVisible ?
          <Present
            toggleState={this.toggleState}
            present={this.state.present}
            handleSubmit={this.handleUpdateSubmit}/>
            : ''
        }
        <br/>
        <button
        onClick={()=>this.toggleState('addPresentIsVisible', 'presentListIsVisible')}
        >Add a Present</button>
        </div>
    )
  }
}
