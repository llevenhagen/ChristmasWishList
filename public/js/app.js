class App extends React.Component {
  render(){
    return (
      <div className="app-div">
      <header>
      <img src="images/transparent-holly.png"/>
        <h1>My Christmas Wish List</h1>
        <img className="holly-4" src="images/holly-4.png"/>
        </header>
      <Presents/>
      <Footer/>
      </div>
    )
  }

}

ReactDOM.render(
  <App></App>,
  document.querySelector('.container')
)
