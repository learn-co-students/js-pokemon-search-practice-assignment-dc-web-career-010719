document.addEventListener('DOMContentLoaded', () => {
  app = new App()

  document.querySelector("#pokemon-search-input").addEventListener('keyup', (e) => {
    app.setState({filterTerm: e.target.value})
  })

})
