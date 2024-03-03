
const menuSize = '350px';

let open = true;

document.querySelector('#btnMenu').addEventListener('click', e => {
    open = !open;

    
    toggleMenu();
})

function toggleMenu(){
    if(open){
        document.querySelector('#menu').style.marginLeft = `-${menuSize}`;
        return;
    }
    document.querySelector('#menu').style.marginLeft = 0;
    
}
