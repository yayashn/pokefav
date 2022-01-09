import Pokemon, { 
    Search, SearchInput, PokemonType,
    PokemonGridItem, PokemonImage, PokemonName,
    Loading, PokemonTypes, ButtonContainer, Motion} from './styles';
import { useState, useEffect, useContext } from 'react';
import Button from '../Login/Button';
import Back from '../Back';
import UserContext from '../../contexts/UserContext';
import usePokemonName from '../../logic/usePokemonName';
import setPokemon from '../../logic/setPokemon';
import setPokemonImage from '../../logic/setPokemonImage';
import update from '../../logic/update'; 
import { motion } from 'framer-motion';

const SearchVariants = {
    focused: {
        y: -50,
    },
    initial: {
        y: 100,
    },
}

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


const defaultData = {
    data: {
        types: []
    }
}

export default () => {
    const [searchPosition, setSearchPosition] = useState(false);
    const [name, setName] = useState();
    const [found, setFound] = useState(false);
    const [data, setData] = useState(defaultData);
    const [user, setUser, image, setImage] = useContext(UserContext);
    const [buttonColour, setButtonColour] = useState('rgb(52, 53, 57)');
    const [buttonText, setButtonText] = useState('SET AS FAVOURITE');

    usePokemonName({setFound, setData, defaultData, name});

    return (
        <Motion
        variants={pageVariants}
        initial="exit"
        animate="enter"
        exit="exit">
            <Back/>
            <Pokemon
            variants={SearchVariants}
            animate={searchPosition ? "focused" : "initial"}>
                <Search>
                    <SearchInput
                    placeholder='Search for a pokemon!'
                    onChange={(event)=>{
                        const pokeName = event.target.value.toLowerCase();
                        setSearchPosition(pokeName.length > 0)
                        if(name !== pokeName) {
                            setName(pokeName)
                            if(pokeName != localStorage.getItem('pokemon')) {
                                setButtonText('SET AS FAVOURITE');
                                setButtonColour('rgb(52, 53, 57)');
                            } else {
                                setButtonText('FAVOURITED');
                                setButtonColour('rgb(0, 211, 0)');
                            }
                        }
                    }}/>
                </Search>
                {searchPosition && found && <PokemonGridItem>
                    <PokemonName>{data.data.name}</PokemonName>
                    <PokemonTypes>
                    {data.data.types !== undefined && data.data.types.map(slot => {
                        return (
                            <PokemonType type={slot.type.name}/>
                        )
                    })}
                    </PokemonTypes>
                    <PokemonImage image={`https://projectpokemon.org/images/normal-sprite/${name}.gif`}/>
                    <ButtonContainer>
                        <Button
                        text={buttonText}
                        color={buttonColour}
                        width="80%"
                        onClick={()=>{
                            setButtonText("FAVOURITED");
                            setButtonColour('rgb(0, 211, 0)');
                            setPokemon({name: name,
                                callback: ()=>{
                                        setPokemonImage({user, setImage});
                                        update({username: user.username, setUser: setUser})
                                    }}
                                )
                            }
                        }
                        error={buttonText == "FAVOURITED"}/>
                    </ButtonContainer>
                </PokemonGridItem>}
                {searchPosition && !found && <Loading/>}
            </Pokemon>
        </Motion>
    )
}