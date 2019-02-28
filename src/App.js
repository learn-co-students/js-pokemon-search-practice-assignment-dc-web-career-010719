class App {
  constructor(){
    this.state = {
      allPokemon: [],
      filterTerm: ""
    }
    this.componentDidMount()
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemonArray => {
      app.setState({allPokemon: pokemonArray})
    })
  }

  setState(newState){
    if(newState.hasOwnProperty("allPokemon")){
      this.state.allPokemon = newState.allPokemon
    }else if(newState.hasOwnProperty("filterTerm")){
      this.state.filterTerm = newState.filterTerm
    }
    document.querySelector("#pokemon-container").innerHTML = this.render()
  }

  render(){
    let subArray = this.state.allPokemon.filter(pokemonObj => pokemonObj.name.includes(this.state.filterTerm))
    let dom = subArray.map(pokemonObj => {
      let pokemonInstance = new PokemonCard(pokemonObj)
      return pokemonInstance.render()
    })
    return dom.join("")
  }
}
