import axios from "axios";

export default props => {
    const {username, setUser} = props;
    
    axios.get(`http://localhost:8000/api/users/${localStorage.getItem('user')}`)
    .then(res => {
        setUser(res.data);
    })
};