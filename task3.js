const div = document.getElementsByTagName('div')
console.log(div)
const clicked = ()=>{
    alert('clicked');
}
document.getElementsByTagName('button')[0].addEventListener('click',clicked)

let user={
    name:'Ali',
    address:{
        // city:'bangalore'
    }
}

let usercity = user?.address
console.log(usercity);
window.alert('press ok')