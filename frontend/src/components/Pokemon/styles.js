import styled from "styled-components";
import { motion } from "framer-motion";
import loading from '../../assets/loading.svg';

export default styled(motion.div)`
    width: 80%;
    height: 100%;
    min-height: 377px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Motion = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    position: relative;
`

export const SearchInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 15px;
    border-radius: 20px;
    font-size: 30px;
    background: white;
    box-shadow: 0 1px 1px rgba(0,0,0,0.02), 
                0 2px 2px rgba(0,0,0,0.02), 
                0 4px 4px rgba(0,0,0,0.02), 
                0 8px 8px rgba(0,0,0,0.02),
                0 16px 16px rgba(0,0,0,0.02);
`

export const SearchButton = styled(motion.button)`
    background: url(${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    height: 40px;
    aspect-ratio: 1;
    right: 10px;
`


export const PokemonGridItem = styled.div`
    background: white;
    height: 500px;
    width: 300px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.02), 
                0 2px 2px rgba(0,0,0,0.02), 
                0 4px 4px rgba(0,0,0,0.02), 
                0 8px 8px rgba(0,0,0,0.02),
                0 16px 16px rgba(0,0,0,0.02);
    border-radius: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`

export const PokemonImage = styled.div`
    background: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding: 100px;
    margin-top: 10px;
`

export const PokemonName = styled.div`
    text-transform: capitalize;
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
`

export const Loading = styled.div`
    background-color: none;
    background: url(${loading});
    background-size: contain;
    background-repeat: no-repeat;
    padding: 200px;
`

export const PokemonTypes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`

const Colours = {
    water: "rgb(126, 157, 255)",
    steel: "rgb(124, 164, 175)",
    grass: "rgb(111, 193, 82)",
    fire: "rgb(246, 97, 66)",
    ground: "rgb(215, 168, 93)",
    fighting: "rgb(220, 86, 81)",
    psychic: "rgb(239, 84, 128)",
    electric: "rgb(249,	195, 14)",
    dragon: "rgb(72, 78, 153)",
    flying: "rgb(111, 119, 187)",
    normal: "rgb(161, 132, 91)",
    poison: "rgb(165, 83, 145)",
    rock: "rgb(153, 144, 81)",
    bug: "rgb(133, 157, 47)",
    ghost: "rgb(110, 90, 127)",
    water: "rgb(68, 189, 208)",
    ice: "rgb(96, 213, 200)",
    dark: "rgb(72, 62, 62)",
    fairy: "rgb(238, 94, 150)"
}

export const PokemonType = styled.div`
    text-transform: capitalize;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    background: ${props=>props.type && Colours[props.type]};
    &:after {
        content: '${props=>props.type}';
        -webkit-text-stroke: 0.5px black;
        color: white;
    }
`

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 20px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`