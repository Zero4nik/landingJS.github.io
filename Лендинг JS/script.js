const burgerMenu = document.getElementById('burgerMenu');
        const navigMenu = document.querySelector('.navig-menu');
        burgerMenu.addEventListener('click', () => {
            navigMenu.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if (!navigMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
                navigMenu.classList.remove('active');
            }
        });

const navLinks = document.querySelectorAll('.navigMainMenu');
const openDemoModalBtn = document.getElementById('watchDemoBtn');
const demoModal = document.getElementById('modal');
const fullDemoModal = document.getElementById('fullModal');
const openFullModalBtn = document.getElementById('FullDemoBtn');
const closeFullModalBtn = document.getElementById('closeModal');

const demoNameInput = document.getElementById('modalInput');
const fullNameInput = document.getElementById('JSModalName');
const liveNameInput = document.querySelector('.lifeName');
const liveSkillInput = document.querySelector('.newSkill');
const modalSkillInput = document.querySelector('.inputModal');

const addNameBtns = document.querySelectorAll('.modalBtn, .BtnModalName, .lifeNameBtn');
const addSkillBtns = document.querySelectorAll('.addSkill, .BtnModalSkill');

const demoInfo = document.getElementById('modalInfo');
const fullNameContainer = document.querySelector('.nameModal');
const liveNameContainer = document.getElementById('yourName');
const liveSkillsList = document.getElementById('listSkill');
const modalSkillsList = document.querySelector('.skillModal');

const orderForm = document.getElementById('orderModal')
const closeOModal = document.getElementById('closeOrderModal')
const orderName = document.getElementById('orderName')
const orderEmail = document.getElementById('orderEmail')
const orderInfo = document.getElementById('description')
const budget = document.getElementById('budget')
const orderBtnSubmit = document.querySelector('.order-btn--submit')

const actionBtns = document.querySelectorAll('.action-btn') 

const buttons = document.querySelectorAll('.priceSelect')
const allPriceInfo = document.querySelectorAll('.priceInfo')

const lastEmail = document.getElementById('lastEmail')
const lastBtn = document.getElementById('lastBtn')


// Проверяем, что форма существует и есть хотя бы одна кнопка
if (orderForm && actionBtns.length > 0) { 
    actionBtns.forEach(button => { // Перебираем хуйню
        button.addEventListener('click', function(event) {
            event.preventDefault()
            closeAllModals(); 
            orderForm.classList.add('active')
        })
    })
}

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

if (openDemoModalBtn && demoModal) {
    openDemoModalBtn.addEventListener('click', function(event) {
        event.preventDefault();
        closeAllModals();
        demoModal.classList.add('active');
    });
}

if (openFullModalBtn && fullDemoModal) {
    openFullModalBtn.addEventListener('click', function(event) {
        event.preventDefault();
        closeAllModals();
        fullDemoModal.classList.add('active');
    });
}

if (closeFullModalBtn) {
    closeFullModalBtn.addEventListener('click', function(event) {
        event.preventDefault();
        fullDemoModal.classList.remove('active');
    });
}

function closeAllModals() {
    if (orderForm) orderForm.classList.remove('active')
    if (demoModal) demoModal.classList.remove('active');
    if (fullDemoModal) fullDemoModal.classList.remove('active');
}

document.addEventListener('click', function(event) {
    if (demoModal && demoModal.classList.contains('active')) {
        if (!demoModal.contains(event.target) && event.target !== openDemoModalBtn) {
            demoModal.classList.remove('active');
        }
    }
    if (fullDemoModal && fullDemoModal.classList.contains('active')) {
        if (!fullDemoModal.contains(event.target) && event.target !== openFullModalBtn) {
            fullDemoModal.classList.remove('active');
        }
    }
});

addNameBtns.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        addNameToContainer(this);
    });
});

function addNameToContainer(clickedButton) {
    let inputField, targetContainer;
    
    if (clickedButton.classList.contains('modalBtn')) {
        inputField = demoNameInput;
        targetContainer = demoInfo;
    } 
    else if (clickedButton.classList.contains('BtnModalName')) {
        inputField = fullNameInput;
        targetContainer = fullNameContainer;
    }
    else if (clickedButton.classList.contains('lifeNameBtn') || clickedButton.id === 'lifeNameBtn') {
        inputField = liveNameInput;
        targetContainer = liveNameContainer;
    }
    
    if (!inputField || !targetContainer) {
        alert('Ошибка: не найдено поле ввода или контейнер');
        return;
    }
    
    const name = inputField.value.trim();
    
    if (!name) {
        alert('Пожалуйста, введите имя');
        return;
    }
    
    if (targetContainer === demoInfo) {
        targetContainer.innerHTML = `Привет, <span class="highlight">${name}</span>`;
    } 
    else if (targetContainer === fullNameContainer) {
        targetContainer.innerHTML = `Имя: <span class="highlight">${name}</span>`;
    }
    else if (targetContainer === liveNameContainer) {
        targetContainer.innerHTML = `Вас зовут: <span class="highlight">${name}</span>`;
    }
    
    inputField.value = '';
    inputField.focus();
}

addSkillBtns.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        addSkillToList(this);
    });
});

function addSkillToList(clickedButton) {
    let inputField, targetList;
    
    if (clickedButton.classList.contains('addSkill')) {
        inputField = liveSkillInput;
        targetList = liveSkillsList;
    }
    else if (clickedButton.classList.contains('BtnModalSkill')) {
        inputField = modalSkillInput;
        targetList = modalSkillsList;
    }
    
    if (!inputField || !targetList) {
        alert('Ошибка: не найдено поле ввода или список');
        return;
    }
    
    const skill = inputField.value.trim();
    
    if (!skill) {
        alert('Пожалуйста, введите навык');
        return;
    }
    
    const newSkillItem = document.createElement('li');
    newSkillItem.textContent = skill;
    targetList.appendChild(newSkillItem);
    
    inputField.value = '';
    inputField.focus();
}

closeOModal.addEventListener('click', function(){
orderForm.classList.remove('active')
})
orderBtnSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    
    if(orderName.value.trim() === '' || orderEmail.value.trim() === '' || 
       orderInfo.value.trim() === '' || budget.value === "Выберите вариант") {
        alert('Пожалуйста, заполните все поля!');
        return; 
    }
    
    orderName.value = '';
    orderEmail.value = '';
    orderInfo.value = '';
    budget.value = "Выберите вариант";
    alert('Данные успешно переданы');
});
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault()
        allPriceInfo.forEach(info =>{
        info.classList.remove('selected')
        })
        buttons.forEach(button =>{
            button.classList.remove('selected')
        })
        const thisPriceInfo = button.closest('.priceInfo')
        const thisBtn = button.closest('.priceSelect')
        thisPriceInfo.classList.add('selected')
        thisBtn.classList.add('selected')
    })
})

lastBtn.addEventListener('click',function(event){
    event.preventDefault()

    if(lastEmail.value.trim() === '' || !lastEmail.value.includes('@')){
        alert('Введите корректный Email')
    }else{
        
    lastEmail.value = ''
    alert('Данные отправлены')
    }
    
})


