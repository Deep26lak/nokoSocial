// ============================================  -------------  VARIABLES  ------------------------==============================================================

// sidebar
const menuItems = document.querySelectorAll(".manu-item");

// message
const messagesNotifications = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// theme
const theme = document.querySelector("#theme");
const themeModel = document.querySelector(".customize-theme");

const fontSizes = document.querySelectorAll(".choose-size span");
const root = document.querySelector(":root");
const chooseColor = document.querySelectorAll('.choose-color span')

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
//  ------------------- search messages ------------------------

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
const openThemeModel = () => {
  themeModel.style.display = "grid";
};

// close theme model
const closeThemeModel = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModel.style.display = "none";
  }
};
theme.addEventListener("click", openThemeModel);
themeModel.addEventListener("click", closeThemeModel);

// ===================================== FONTS ======================================

const removeActiveClass = () => {
  fontSizes.forEach(size => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  let fontSize;
  size.addEventListener("click", () => {
    removeActiveClass();
    size.classList.add("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--top-sticky-left", "5.4rem");
      root.style.setProperty("--top-sticky-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--top-sticky-left", "5.4rem");
      root.style.setProperty("--top-sticky-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--top-sticky-left", "2rem");
      root.style.setProperty("--top-sticky-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--top-sticky-left", "-5rem");
      root.style.setProperty("--top-sticky-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--top-sticky-left", "-10rem");
      root.style.setProperty("--top-sticky-right", "-33rem");
    }

    // changing html font size bcoz it will chnge all the defoult size
    document.querySelector("html").style.fontSize = fontSize;
  });
});


// ===================================== COLOR THEME ======================================
const removeActive = () => {
  chooseColor.forEach(size => {
    size.classList.remove("active");
  });
};


chooseColor.forEach(size =>{
size.addEventListener('click',()=>{
  removeActive()
  size.classList.add('active')
  if(size.classList.contains('color-1')){
    root.style.setProperty("--color-primary", "hsl(252, 75%, 60%)")
  }
   else if(size.classList.contains('color-2')){
    root.style.setProperty("--color-primary", "hsl(52, 75%, 60%)")
  }
   else if(size.classList.contains('color-3')){
    root.style.setProperty("--color-primary", "hsl(352, 75%, 60%)")
  }
   else if(size.classList.contains('color-4')){
    root.style.setProperty("--color-primary", "hsl(152, 75%, 60%)")
  }
   else if(size.classList.contains('color-5')){
    root.style.setProperty("--color-primary", "hsl(202, 75%, 60%)")
  }
})
})
