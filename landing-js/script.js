const modalOverlay = document.querySelector('.ModalOverlay')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.modal-close')
const openModalBtn = document.querySelector('.openModal')
function openModal(){
    modal.classList.add('modal--active')
    modalOverlay.classList.add('ModalOverlay--active')
}
function closeModal(){
    modal.classList.remove('modal--active')
    modalOverlay.classList.remove('ModalOverlay--active')
}
closeModalBtn.addEventListener('click',function(event){
    event.preventDefault()
    closeModal()
})
openModalBtn.addEventListener('click',function(event){
    event.preventDefault()
    openModal()
})
modalOverlay.addEventListener('click',() =>{
    if(event.target === modalOverlay){
        closeModal()
    }
})