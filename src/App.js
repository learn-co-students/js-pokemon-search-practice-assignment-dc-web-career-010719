class App {
  constructor(){
    this.state = {
      allPokemon: [],
      filterTerm: ""
    }
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
