import { useState } from "react";
import { searchPokemon } from "../app/api";

const Searchbar = (props) => {
  const [search, setSearch] = useState("dito")
  const {onSearch} = props
  const onChangeHandler = (e) => {
      setSearch(e.target.value)
      if(e.target.value.length === 0) {
          onSearch(undefined)
      }
  }

  const onButtonClickHandler = () => {
      onSearch(search)
  }

  return (
      <div className="searchbar-container">
          <div className="searchbar">
              <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
          </div>
          <div className="searchbar-btn">
              <button onClick={onButtonClickHandler} >Buscar</button>
          </div>
          <div className="searchbar-btn-fire">
              <button>Fire</button>
          </div>
          <div className="searchbar-btn-water">
              <button>Water</button>
          </div>
          <div className="searchbar-btn-grass">
              <button>Grass</button>
          </div>
          <div className="searchbar-btn-electric">
              <button>Electric</button>
          </div>
          <div className="searchbar-btn-flying">
              <button>Flying</button>
          </div>
          <div className="searchbar-btn-ice">
              <button>Ice</button>
          </div>
          <div className="searchbar-btn-rock">
              <button>Rock</button>
          </div>
          <div className="searchbar-btn-stell">
              <button>Stell</button>
          </div>
          <div className="searchbar-btn-normal">
              <button>Normal</button>
          </div>
          <div className="searchbar-btn-fighting">
              <button>Fighting</button>
          </div>
          <div className="searchbar-btn-ghost">
              <button>Ghost</button>
          </div>
          <div className="searchbar-btn-dark">
              <button>Dark</button>
          </div>
          <div className="searchbar-btn-poison">
              <button>Poison</button>
          </div>
          <div className="searchbar-btn-dragon">
              <button>Dragon</button>
          </div>
          <div className="searchbar-btn-fairy">
              <button>Fairy</button>
          </div>
          <div className="searchbar-btn-bug">
              <button>Bug</button>
          </div>
          <div className="searchbar-btn-psychic">
              <button>Psychic</button>
          </div>
      </div>
  )
}

export default Searchbar;
