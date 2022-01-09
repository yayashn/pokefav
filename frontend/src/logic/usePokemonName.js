import { useEffect } from "react";
import axios from "axios";

export default props => {
    const {setFound, setData, defaultData, name} = props;

    useEffect(() => {
        setFound(false);
        const delayDebounceFn = setTimeout(() => {
            axios
            .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(result => {
                setFound(true);
                setData(result);
            })
            .catch(err=>{
                setFound(false);
                setData(defaultData);
            })
        }, 700)
    
        return () => clearTimeout(delayDebounceFn)
      }, [name])
};