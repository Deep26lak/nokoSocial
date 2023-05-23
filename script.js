// sidebar
const menuItems = document.querySelectorAll(".manu-item");

// message
const messagesNotifications = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");


// theme
const theme = document.querySelector("#theme")
const themeModel = document.querySelector(".customize-theme")


// remove avtive class from manu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

// ====================================== SIDEBAR ======================================

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "Notifications") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
      document.querySelector(
        "#Notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// ====================================== MESSAGES ======================================
//  ------------------- search messages

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};


messageSearch.addEventListener("keyup", searchMessage);

//  -------------------------    highlighted msges when clicked
messagesNotifications.addEventListener("click", () => {
  messages.style.boxShadow = " 0 0 1rem var(--color-primary)";
  messagesNotifications.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 1500);
});



// ====================================== Theme customization ======================================
// open theme model
const openThemeModel = () =>{
    themeModel.style.display= 'grid'
}

// close theme model
const closeThemeModel = (e) =>{
    if(e.target.classList.contains('customize-theme')){
    themeModel.style.display= 'none'

}

}
 theme.addEventListener('click',openThemeModel)
 themeModel.addEventListener('click',closeThemeModel)