import axios from "axios";

export default props => {
    const {name, callback} = props;

    localStorage.setItem('pokemon', name);
    axios.put(`http://localhost:8000/api/users/${localStorage.getItem('user')}/?pokemon=${name}`)
    .then(callback);
}