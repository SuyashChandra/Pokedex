import React, {Component}from 'react';
import "./Pokecard.css";

class Pokecard extends Component{
    render() {
        const arr =this.props
        console.log(arr)
        return(
            <div className="Pokecard">
            <h3 className="Pokecard-title">{arr.name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${arr.id}.png`} />
        <div className="Pokecard-data">Type: {arr.type}</div>
        <div className="Pokecard-data">EXP: {arr.exp}</div>
            </div>
        )
    }
} 

export default Pokecard