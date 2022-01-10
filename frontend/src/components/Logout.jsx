import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logout from '../assets/logout.svg';

const Logout = styled(motion.button)`
    background: url(${logout});
    background-size: contain;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 20px;
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
        <Logout
        onClick={()=>{
            localStorage.clear();
            navigate('/')
        }}
        whileTap="clicked" 
        whileHover="hover"
        variants={ClickVariants}/>
    )
}
