class PokemonCard{
  constructor(pokemonObj){
    this.id = pokemonObj.id
    this.name = pokemonObj.name
    this.sprite = pokemonObj.sprites.front
  }

  render(){
    return (`
      <div class="pokemon-card">
        <div class="pokemon-frame">
          <h1 class="center-text">${this.name}</h1>
          <div class="pokemon-image">
            <img data-id="${this.id}" data-action="flip" class="toggle-sprite" src="${this.sprite}">
          </div>
        </div>
      </div>
    `)
  }
}
