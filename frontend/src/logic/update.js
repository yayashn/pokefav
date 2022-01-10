import axios from "axios";

export default props => {
    const {username, setUser} = props;
    
    axios.get(`https://ypokefav.herokuapp.com/api/users/${localStorage.getItem('user')}`)
    .then(res => {
        setUser(res.data);
    })
};