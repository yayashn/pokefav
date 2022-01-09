import axios from "axios";

export default props => {
    const {user, setImage} = props;

    axios.get(`https://pokeapi.co/api/v2/pokemon/${user && user.pokemon || 'charizard'}`)
    .then(res => {
        setImage(`https://projectpokemon.org/images/normal-sprite/${localStorage.getItem("pokemon") || (user && user.pokemon) || "charizard"}.gif`)
    })
};