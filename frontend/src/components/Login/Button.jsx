import { Button, ButtonHover, ButtonText } from './styles';
import { useState } from 'react';

const ButtonVariant = {
    hover: {
        staggerChildren: 0.5,
    },
    initial: {
        staggerChildren: 0.5
    }
}

const ButtonHoverVariant = {
    initial: {
        left: "-100%"
    },
    hover: {
        left: 0
    }
}

export default (props) => {
    const [enableHover, setEnableHover] = useState('hover');
    const [textColour, setTextColour] = useState('black');

    return (
        <Button 
        onTap={() => {
            setEnableHover("initial")
            props.onClick()
        }}
        onHoverEnd={()=>{
            if(!props.disabled) setEnableHover("hover")
        }}
        color={props.color}
        type="button"
        variants={ButtonVariant}
        whileHover={enableHover}
        initial="initial"
        width={props.width || "50%"}>
            <ButtonHover variants={ButtonHoverVariant}
            transition={{duration: 0.2, type: "tween"}}
            color={props.color}
            error={props.error}/>
            <ButtonText
            textColour={textColour}>{props.text}</ButtonText>
        </Button>
    )
}