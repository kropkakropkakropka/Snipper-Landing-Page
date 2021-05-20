const menu = document.getElementById('menu');
const list = document.getElementById('dropdown');

menu.addEventListener('click', function(){
    if(list.classList.contains('active')){
        list.classList.remove('active')
    }else{
        list.classList.add('active')
    }
})