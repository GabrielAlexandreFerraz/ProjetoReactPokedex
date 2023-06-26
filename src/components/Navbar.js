import { useContext, React } from "react";
import FavoriteContext from "../context/favoritesContext";

const Navbar = () => {

  const {favoritePokemons} = useContext(FavoriteContext)
  
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
    <nav>
      <div>
        <img
          alt="PokéAPI"
          src={logoImg}
          className="navbar-img"
        />
      </div>
      <div> Pokémons Favoritados {favoritePokemons.length}💖</div>
    </nav>
  );
};
export default Navbar;
