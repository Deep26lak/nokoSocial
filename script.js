// sidebar
const menuItems = document.querySelectorAll('.manu-item')


// message
const messagesNotifications = document.querySelector('#messages-notifications')
const messages = document.querySelector('.messages')


// remove avtive class from manu items
const changeActiveItem = ()=>{
   menuItems.forEach((item)=>{
    item.classList.remove("active")
   })
}


// ====================================== SIDEBAR ======================================

menuItems.forEach((item)=>{
    item.addEventListener('click',()=>{
        changeActiveItem()
        item.classList.add('active')
        if(item.id != 'Notifications'){
            document.querySelector(".notification-popup").style.display = 'none'
        }
        else{
            document.querySelector(".notification-popup").style.display = 'block';
            document.querySelector('#Notifications .notification-count').style.display = 'none'

        }
    })
})

// ====================================== MESSAGES ======================================
messagesNotifications.addEventListener('click',()=>{
    messages.style.boxShadow = ' 0 0 1rem var(--color-primary)'
    messagesNotifications.querySelector('.notification-count').style.display = 'none'
    setTimeout(()=>{
        messages.style.boxShadow = 'none'
    },1500)
})