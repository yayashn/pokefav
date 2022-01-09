import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Left from '../assets/Left.svg';

const Back = styled(motion.button)`
    background: url(${Left});
    background-size: contain;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    position: fixed;
    top: 20px;
    left: 20px;
`

const ClickVariants = {
    clicked: {
        scale: 0.8
    },
    hover: {
        scale: 1.2
    }
}


export default () => {
    const navigate = useNavigate();
    return (
        <Back 
        onClick={()=>console.log(navigate('/profile'))}
        whileTap="clicked" 
        whileHover="hover"
        variants={ClickVariants}/>
    )
}
