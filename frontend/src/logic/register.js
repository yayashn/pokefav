import axios from "axios";

export default props => {
    const {username, password, setRegisterColour, setError, setMessage} = props;

    const data = {
        "username": username,
        "password": password,
        "pokemon": "pikachu"
    }
    axios.post('http://localhost:8000/api/users/', data)
    .then(res => {
        setRegisterColour('rgb(0, 208, 0)');
        setError(false);
        setMessage('Account has been created! You may now login.');
    })
    .catch(err => {
        setRegisterColour('rgb(255,0,0)');
        setError(true);
        setMessage(err.response.data.detail);
    })
};