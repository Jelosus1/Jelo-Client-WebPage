const btn_close = document.querySelector('#close');
const cont_cookies = document.querySelector('.cookies-box')
const accept = document.querySelector('#accept')

accept.addEventListener('click', () => {
    cont_cookies.style.bottom = '-200px'
})

btn_close.addEventListener('click', () => {
    cont_cookies.style.bottom = '-200px'
})