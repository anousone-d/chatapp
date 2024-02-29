const rightContainer = document.querySelector(".right_container");
const leftContainer = document.querySelector(".left_container");

const toggleBtn = document.querySelector(".toggleBtn");
const backBtn = document.querySelector(".backBtn");

// toggleBtn.addEventListener("click", function () {
//   rightContainer.classList.toggle("hidden");
//   leftContainer.classList.toggle("hidden");
// });

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

/////////////////////////////////////////////////////////////////////////////
const userAvatar = document.getElementById("user_avatar");
const usersContainer = document.getElementById("users_container");

window.addEventListener("load", async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users/get-current-user");
    const { user } = await res.json();

    userAvatar.src = user.profilePic;

    //get user's friends
    const friendsDataRes = await fetch(
      "http://localhost:3000/api/users/get-user-friends"
    );
    const friendsData = await friendsDataRes.json();

    //render list of user's friends
    friendsData.forEach(async (friend, i) => {
      //get the message betwwen user and friend
      const messagesRes = await fetch(
        `http://localhost:3000/api/messages/get-messages/${friend.id}`
      );
      const messagesData = await messagesRes.json();

      const messageHtml = `<p class="text-zinc-500">${
        messagesData[0]?.content || ""
      }</p>`;

      const html = `
        <div  class="flex justify-between hover:bg-zinc-600 hover:rounded-lg transition-all duration-300 cursor-pointer toggleBtn">
          <div class="flex items-center gap-4">
            <img
              src=${friend.profilePic}
              alt="profile picture" 
              class="rounded-full w-[4rem] h-[4rem]"
            />
            <div class="flex flex-col items-start justify-between gap-3">
              <p>${friend.name}</p>
              ${messageHtml}
            </div>
          </div>

          <div class="self-end">
              <p class="text-zinc-500">2m</p>
          </div>
        </div>
      `;

      usersContainer.insertAdjacentHTML("beforeend", html); // insert HTML directly
    });
  } catch (error) {
    console.log(error);
  }
});
