document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("logform");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate form fields
    const username = document.getElementById("Logusername").value.trim();
    const password = document.getElementById("Logpassword").value.trim();

    if (!username || !password) {
      alert("All fields are required");
      return;
    }

    // Call submitForm function to handle form submission
    submitForm(username, password);
  });
});

function submitForm(username, password) {
    axios
    .post(`${API_BASE_URL}login`, { username, password })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
