function getformdata(){
	const username = document.getElementById('username').value.trim();
	const email = document.getElementById('email').value.trim();
	const password = document.getElementById('password').value.trim();
  
	return {
    	username: username,
    	email: email,
    	password: password
  	};
}

const API_BASE_URL = "http://localhost:3000/";

document.getElementById('regUser').addEventListener('click', (event) => {
	event.preventDefault();
	if (!username || !email || !password || username.length < 3 || username.length > 25) {
		alert("All fields are required, and username should be between 3 and 25 characters");
		return;
	  }  

	
	const formData = getformdata();
	axios.post(`${API_BASE_URL}signup`, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
});