import axios from "axios";

export default props => {
    const {username, password, setUser, setLoginColour, setError, setMessage, navigate} = props;
    
    axios.get(`https://yayapokefav.herokuapp.com/api/users/${username}`)
    .then(res => {
      if(res.data.password == password) {
          setUser(res.data);
          localStorage.setItem('user', username);
          navigate("/profile");
      } else {
          setLoginColour('rgb(255,0,0)');
          setError(true);
          setMessage('Username and/or password is incorrect.');
      }
    }).catch(err => {
        setLoginColour('rgb(255,0,0)');
        setError(true);
        setMessage('Username and/or password is incorrect.');
    })
};