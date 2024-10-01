import PokadexList from "../PokadexList/PokadexList";
import Search from "../Search/Search";
import './Pokadex.css'
function Pokadex(){
   return(
   <>
    <h1 className="heading">Pokadex</h1>
    <Search/>
    <PokadexList/>
   </>
   );
}
export default Pokadex;