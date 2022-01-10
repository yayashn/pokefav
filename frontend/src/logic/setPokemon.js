import axios from "axios";

export default props => {
    const {name, callback} = props;

    localStorage.setItem('pokemon', name);
    axios.put(`https://ypokefav.herokuapp.com/api/users/${localStorage.getItem('user')}/?pokemon=${name}`)
    .then(callback);
}