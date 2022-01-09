import { useEffect } from "react";
import setPokemonImage from "./setPokemonImage";

export default props => {
    const {user, setImage} = props;

    useEffect(()=>{
        setPokemonImage({user, setImage});
    })
};