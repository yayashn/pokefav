import styled from 'styled-components';
import { motion } from 'framer-motion';

export default styled(motion.div)`
    background: white;
    max-width: 350px;
    width: 90%;
    height: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 1px 1px rgba(0,0,0,0.02), 
                0 2px 2px rgba(0,0,0,0.02), 
                0 4px 4px rgba(0,0,0,0.02), 
                0 8px 8px rgba(0,0,0,0.02),
                0 16px 16px rgba(0,0,0,0.02);
    position: relative;
    margin-bottom: 20px;
`

export const Username = styled.div`
    position: absolute;
    left: 20px;
    top: 20px;
    font-weight: bold;
    text-transform: capitalize;
`

export const Pokemon = styled(Username)`
    right: 20px;
    font-weight: 200;
    text-align: right;
`

export const Info = styled.div`
    width: 80%;
    height: 382px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FavouritePokemonImage = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(249, 248, 255);
    margin-top: 50px;
    margin-bottom: 15px;
    border-radius: 10px;
    &::after {
        width: 100%;
        height: 100%;
        display: block;
        content: "";
        background: url(${props => props.image});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
`