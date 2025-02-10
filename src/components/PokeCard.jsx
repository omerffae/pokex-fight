import react, { Component } from "react";
const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

class PokeCard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div className="PokeCard">
        <h1 className="PokeCard-title">PokeCard</h1>
        <div className="PokeCard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="PokeCard-data">Type: {this.props.type}</div>
        <div className="PokeCard-data">Exp: {this.props.base_experience}</div>
      </div>
    );
  }
}

export default PokeCard;
