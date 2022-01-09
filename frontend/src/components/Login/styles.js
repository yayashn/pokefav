import styled from 'styled-components';
import {motion} from 'framer-motion';

export default styled(motion.form)`
    background: white;
    max-width: 350px;
    max-height: 400px;
    min-height: 320px;
    width: 90%;
    height: 60%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 1px 1px rgba(0,0,0,0.02), 
                0 2px 2px rgba(0,0,0,0.02), 
                0 4px 4px rgba(0,0,0,0.02), 
                0 8px 8px rgba(0,0,0,0.02),
                0 16px 16px rgba(0,0,0,0.02);
    > * {
        margin-top: 11%;
    }
    position: relative;
`

export const Input = styled.input`
    width: 70%;
    height: 40px;
    font-size: 17px;
    border-bottom: 1px solid grey;
    color: black;
    &::placeholder {
        color: grey;
    }
    &:focus {
        outline: none;
        border-bottom: 1px solid rgb(52, 53, 57);
        &::placeholder {
            color: black;
        }
    }
`

export const Button = styled(motion.button)`
    background: none;
    border: 1px solid ${props => props.color};
    border-radius: 5px;
    width: ${props => props.width};
    height: 40px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const ButtonText = styled.div`
    color: white;
    font-size: 15px;
    mix-blend-mode: difference;
    position: absolute;
`

export const ButtonHover = styled(motion.div)`
    background: ${props => props.color};
    width: 100%;
    height: 40px;
    position: absolute;
    ${props => props.error && `display: none`};
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 70%;
    position: absolute;
    bottom: 40px;
    & > button:nth-child(1) {
        margin-right: 21px;
    }
`

export const Message = styled.div`
    ${props => props.error 
    ? `color: red`
    : `color: rgb(0, 208, 0)`};
    width: 70%;
`