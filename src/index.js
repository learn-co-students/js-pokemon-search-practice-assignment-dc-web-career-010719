document.addEventListener('DOMContentLoaded', () => {
  app = new App()

  document.querySelector("#pokemon-search-input").addEventListener('keyup', (e) => {
    app.setState({filterTerm: e.target.value})
  })

  fetch('http://localhost:3000/pokemon')
  .then(res => res.json())
  .then(pokemonArray => {
    app.setState({allPokemon: pokemonArray})
  })
})
