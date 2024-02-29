const formEl = document.getElementById("form_login");

formEl.addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("input_email").value;
  const password = document.getElementById("input_password").value;

  if (!email || !password) {
    return alert("Please fill all input fields");
  }

  try {
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    window.location.href = "http://localhost:3000/chat";
  } catch (error) {
    console.log(error);
  }
});
