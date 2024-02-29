const formEl = document.getElementById("form_signup");

formEl.addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("input_name").value;
  const username = document.getElementById("input_username").value;
  const email = document.getElementById("input_email").value;
  const password = document.getElementById("input_password").value;

  if (!name || !username || !email || !password) {
    return alert("Please fill all input fields");
  }

  const user = { name, username, email, password };

  try {
    const res = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (data.error) {
      alert(data.error);
    }

    name.value = "";
    username.value = "";
    email.value = "";
    password.value = "";

    if (data) {
      window.location.href = "http://localhost:3000/login";
    }
  } catch (error) {
    console.log(error.message);
  }
});
