const btn = document.querySelector('.button_subheader')

btn.addEventListener('click', () => {
    const butt = prompt('Что тебе надо тут ?')
    const secondQuest = prompt('пошел отсюда ')

    const db = [butt, secondQuest, 8, 9]

    console.log(db)

    function checkOut() {
        if (db.butt === 'ok') {
            console.log('it is woork !!')
        } else if (db.butt > 6) {
            for (let e = 1; e < 10; e++) {
                console.log(e)
            }
        }
    }

    checkOut()
})

const old = +prompt('Сколько вам лет ?')
const randomNum = +prompt('Рандомное число ')
const whatIs = prompt('test !')

const obj = {
    dataBase: old,
    DB: randomNum
}

function check() {
    if (obj.dataBase === 18) {
        console.log('вам есть 18!')
    } else if (obj.dataBase > 18) {
        console.log('вам больше 18')
    } else if (obj.dataBase < 18) {
        console.log('вам меньше 18!')
    }
}

check()

for (let i = 1; i <= 6; i++) {
    console.log(i)
}

function wow() {
    if (obj.DB < 1) {
        console.log('вам ' + `${obj.DB}`)
    } else if (obj.DB === 1) {
        console.log('вам ' + `${obj.DB}`)
    } else if (obj.DB > 1) {
        console.log('вам ' + `${obj.DB}`)
    }
}

wow()

const obj = {
    name:maxim
}



