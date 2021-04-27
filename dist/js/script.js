const btn = document.querySelector('.button_subheader')

btn.addEventListener('click', () => {
    const butt = prompt('Что тебе надо тут ?')
})

const old = +prompt('Сколько вам лет ?')

const obj = {
    dataBase:old
}

function check() {
    if(obj.dataBase === 18) {
        console.log('вам есть 18!')
    }else if (obj.dataBase > 18) {
        console.log('вам больше 18')
    }else if (obj.dataBase < 18) {
        console.log('вам меньше 18!')
    }
}

check()

for(let i = 1; i <= 6; i++ ) {
    console.log(i)
}




