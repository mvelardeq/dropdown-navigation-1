export default function activeItemMenu(itemMenu){
    document.addEventListener('click',(e)=>{
        let isSubActive, elActive
        document.querySelectorAll(itemMenu).forEach((el,index)=>{
            if(el.nextElementSibling.classList.contains('active')){
                isSubActive=true
                elActive=el
            }
        })
        if(isSubActive && elActive!==e.target){
            elActive.nextElementSibling.classList.remove('active')
            elActive.querySelector('.arrow-down').classList.toggle('d-none')
            elActive.querySelector('.arrow-up').classList.toggle('d-none')
        }
        if(e.target.matches(itemMenu)){
            e.target.nextElementSibling.classList.toggle('active')
            e.target.querySelector('.arrow-down').classList.toggle('d-none')
            e.target.querySelector('.arrow-up').classList.toggle('d-none')
        }
    })
}

