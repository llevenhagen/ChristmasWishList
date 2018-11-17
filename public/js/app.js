class APP extends React.Component {
  render(){
    return (
      <div>
        <h1>Presents</h1>
        <Presents/>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('.container')
)
