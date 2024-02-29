const rightContainer = document.querySelector(".right_container");
const leftContainer = document.querySelector(".left_container");

const toggleBtn = document.querySelector(".toggleBtn");
const backBtn = document.querySelector(".backBtn");

toggleBtn.addEventListener("click", function () {
  rightContainer.classList.toggle("hidden");
  leftContainer.classList.toggle("hidden");
});

backBtn.addEventListener("click", function () {
  rightContainer.classList.toggle("hidden");
  leftContainer.classList.toggle("hidden");
});

const btn_logout = document.getElementById("btn_logout");

btn_logout.addEventListener("click", async function () {
  try {
    const res = await fetch("http://localhost:3000/api/auth/logout");

    const data = await res.json();

    if (!data) throw Error;

    window.location.href = "http://localhost:3000/login";
  } catch (error) {
    console.log(error);
  }
});
