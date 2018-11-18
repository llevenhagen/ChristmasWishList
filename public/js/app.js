class App extends React.Component {
  render(){
    return (
      <div>
      <header>
      <img src="images/transparent-holly.png"/>
        <h1>My Christmas Wish List</h1>
        <img src="images/transparent-holly.png"/>
        </header>
      <Presents/>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('.container')
)
