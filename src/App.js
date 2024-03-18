import React,{useState,useEffect}from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import axios from 'axios';
function App() {

  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl,setcurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon");
    const [nextPageUrl, setnextPageUrl] = useState([])
    const [prevPageUrl, setprevPageUrl] = useState([])
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    let cancel
    axios.get(currentPageUrl,{
    cancelToken:new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setnextPageUrl(res.data.next)
      setprevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    }) 

    return() => {
cancel();
    }
  }, [currentPageUrl])
//current state | method use to update state

function gototnextpage() {
  setcurrentPageUrl(nextPageUrl);
}

function gotoprevpage() {
  setcurrentPageUrl(prevPageUrl);
  
}
if (loading) {
  return "Loading"
}

console.log(pokemon);
  return (
    <>
  <PokemonList pokemon={pokemon} />
  <Pagination 
  gototnextpage={nextPageUrl ?  gototnextpage : null}
  gotoprevpage={prevPageUrl ? gotoprevpage : null}
  />
  </>
  );
}

export default App;
