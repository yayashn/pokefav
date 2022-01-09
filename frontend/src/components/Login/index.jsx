import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Login, { Input, ButtonContainer, Message } from './styles';
import Button from './Button';
import UserContext from '../../contexts/UserContext';
import register from '../../logic/register';
import login from '../../logic/login';

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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registerColour, setRegisterColour] = useState('rgb(52, 53, 57)');
    const [loginColour, setLoginColour] = useState('rgb(52, 53, 57)');
    const [error, setError] = useState(true);
    const [message, setMessage] = useState('');
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const onKeyEnter = e => {
        if(e.key == "Enter") {
            login({
                username: username,
                password: password,
                setUser: setUser,
                setLoginColour: setLoginColour,
                setError: setError,
                setMessage: setMessage,
                navigate: navigate
            })
        }
    }

    return (
        <Login
        variants={pageVariants}
        initial="exit"
        animate="enter"
        exit="exit">
            <Input placeholder="Username" 
            onKeyPress={onKeyEnter}
            onChange={
                event => setUsername(event.target.value)
            }/>
            <Input placeholder="Password" 
            onKeyPress={onKeyEnter}
            type="password"
            onChange={
                event => setPassword(event.target.value)
            }/>
            <ButtonContainer>
                <Button
                text="LOGIN"
                onClick={()=>login({
                    username: username,
                    password: password,
                    setUser: setUser,
                    setLoginColour: setLoginColour,
                    setError: setError,
                    setMessage: setMessage,
                    navigate: navigate
                })}
                color={loginColour}
                setButtonColour={setLoginColour}/>
                <Button
                text="REGISTER"
                onClick={()=>register({
                    username: username,
                    password: password,
                    setRegisterColour: setRegisterColour,
                    setError: setError,
                    setMessage: setMessage
                })}
                color={registerColour}
                setButtonColour={setRegisterColour}/>
            </ButtonContainer>
            <Message error={error}>{message}</Message>
        </Login>
    )
}