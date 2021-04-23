// Получим данные о человеке Имя, Город, Дату, пол
// Выводим фразу Привет дорогой(ая) "Имя"! Как тебе живется в "Город"? 
// Тебе всего лишь "лет", а ты уже такой хороший
// * Проверку на город - находится ли он в Украине? array ['Kiev', 'Mariupol', 'Lviv']

let name = prompt('Твоё имя?')
let city = prompt('В каком городе живешь?')
let date = prompt('Дата рождения?')

let day = date.substr(0, 2)
let month = date.substr(3, 2)
let year = date.substr(6, 4)

let now = new Date()
const nowDay = now.getDate()
const nowMonth = now.getMonth() + 1
const nowYear = now.getFullYear()

age = nowYear - year
if (month == nowMonth) {
    if (day > nowDay) {
        age = age - 1
    }
} else if (month > nowMonth) {
    age = age - 1
}


let sex = prompt('Твой пол (Ж или М)?')

if (sex == 'М' || sex == 'м') {
    alert(`Привет дорогой ${name}! Как тебе живется в городе ${city}? Тебе всего лишь ${age}, а ты уже такой умный!`)
} else if (sex == 'Ж' || sex == 'ж') {
    alert(`Привет дорогая ${name}! Как тебе живется в городе ${city}? Тебе всего лишь ${age}- вся жизнь впереди!`)
} else {
    alert(`Hello ${name}! Как тебе живется в городе ${city}? Тебе всего лишь ${age}- живи весело!`)
}


