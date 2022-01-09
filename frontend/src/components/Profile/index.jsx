import Profile, { Username, Info, FavouritePokemonImage, Pokemon } from './styles';
import { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import Button from '../Login/Button';
import { useNavigate } from 'react-router-dom';
import usePokemonImage from '../../logic/usePokemonImage';

const pageVariants = {
    enter: {
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.15,
            delay: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: {
            type: "tween",
            duration: 0.15,
        }
    }
}

export default () => {
    const [user, setUser, image, setImage] = useContext(UserContext);
    const navigate = useNavigate();

    usePokemonImage({user, setImage});
    
    useEffect(()=>{
        const name = localStorage.getItem("pokemon") || (user && user.pokemon) || "charizard"
        localStorage.setItem('pokemon', name);
    },[localStorage])

    return (
        <Profile
        initial="exit"
        animate="enter"
        exit="exit"
        variants={pageVariants}>
            <Username>{localStorage.getItem("user") || "Username"}</Username>
            <Pokemon>{localStorage.getItem("pokemon") || (user && user.pokemon) || "charizard"}</Pokemon>
            <Info>
                <FavouritePokemonImage image={`${image}`}/>
                <Button
                text="CHANGE FAVOURITE POKEMON"
                color="rgb(52, 53, 57)"
                width="110%"
                onClick={()=>navigate('/pokemon')}/>
            </Info>
        </Profile>
    )
}