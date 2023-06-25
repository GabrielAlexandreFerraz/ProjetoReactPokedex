import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  
  const { pokemons, loading, page, totalPages, onLeftClick, onRightClick } = props;
  const onLeftClickHandler = () => {
    console.log("volta")
  }
  const onRightClickHandler = () => {
    console.log("avanca")
  }
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination page={page+1}
        totalPages={totalPages}
        onLeftClick={onLeftClick}
        onRightClick={onRightClick}/>
      </div>
      {loading ? (
        <div> Carregando.....</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons && pokemons.map((pokemon, index) => {
            return (<Pokemon key={index} pokemon={pokemon}></Pokemon>);
          })}
        </div>
      )}
    </div>
  );
};
export default Pokedex;
