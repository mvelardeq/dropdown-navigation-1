export function activeMobileMenu(btnHamburgerIcon){
    document.addEventListener('click',e=>{
        if(e.target.matches(btnHamburgerIcon)){
            e.target.parentElement.nextElementSibling.classList.toggle('d-flex')
            document.querySelector('.body-cover').classList.toggle('active')
            console.log(document.querySelector('.body-cover'))
        }
    })
}
export function closeMobileMenu(btnCloseIcon){
    document.addEventListener('click',e=>{
        if(e.target.matches(btnCloseIcon)){
            console.log('click')
            console.log(e.target)
            e.target.parentElement.parentElement.classList.toggle('d-flex')
            document.querySelector('.body-cover').classList.toggle('active')
        }
    })
}