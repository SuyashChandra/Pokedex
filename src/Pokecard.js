import React, {Component}from 'react';
import "./Pokecard.css";

class Pokecard extends Component{
    render() {
        const arr =this.props
        const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
        const pokeId= (number) => (number <=999 ? `00${number}`.slice(-3): number)
        console.log(arr)
        return(
            <div className="Pokecard">
            <h3 className="Pokecard-title">{arr.name}</h3>
            <img src={`${POKE_API}${pokeId(arr.id)}.png`} />
        <div className="Pokecard-data">Type: {arr.type}</div>
        <div className="Pokecard-data">EXP: {arr.exp}</div>
            </div>
        )
    }
} 

export default Pokecard