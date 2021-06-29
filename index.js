
// for Dynamic date and Time ------------------------ 

const dateVal = new Date()
const time = `${dateVal.getHours()}:${dateVal.getMinutes()}:${dateVal.getSeconds()}`
const date = `${dateVal.getDate()}-${dateVal.getMonth()}-${dateVal.getFullYear()}`

const dateDiv = document.querySelector('.date');
    dateDiv.innerHTML = date;
const timeDiv = document.querySelector('.time');
    timeDiv.innerHTML = time;

// for Hide and show windows bar----------------------

const windowsBar = document.querySelector('.windows-card');

    const windowsKey = document.querySelector('#windows-key');
    windowsKey.addEventListener('click',()=>{
        windowsBar.classList.toggle('hide');
    })

const searchkey = document.querySelector('.search');
    const searchCard = document.querySelector('.search-card');
    searchkey.addEventListener('click',()=>{
        searchCard.classList.toggle('hide')
    })
const foldercard = document.querySelector('.folder-card');
    const folderKey = document.querySelector('#folder-key');
    folderKey.addEventListener('click',()=>{
        foldercard.classList.toggle('hide')
    })