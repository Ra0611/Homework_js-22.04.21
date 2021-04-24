// Получим данные о человеке Имя, Город, Дату, пол
// Выводим фразу Привет дорогой(ая) "Имя"! Как тебе живется в "Город"? 
// Тебе всего лишь "лет", а ты уже такой хороший
// * Проверку на город - находится ли он в Украине? array ['Kiev', 'Mariupol', 'Lviv']


// Градусник
// Получаем от пользователя температуру
// Если человек ввел меньше 5 градусов - выводим "холодно"
// от 5 до 20 - "тепло"
// от 20 до 30 - "жарко"
// от 30 и выше - "очень жарко"
// * В зависимости от того какой значение выбрано менять background для body. 
// document.querySelector, style.background


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

let ukrTowns = ["Киев", "Львов", "Мариуполь", "Бердянск", "Харьков", "Черкассы"]
let country = null
if (city == ukrTowns[0] || city == ukrTowns[1] || city == ukrTowns[2] || city == ukrTowns[3] || city == ukrTowns[4] || city == ukrTowns[5]){
    country = 'Украина'
} else{
    let whereYou = prompt('В какой стране находится твой город?')
    country = whereYou
}

if (sex == 'М' || sex == 'м') {
    alert(`Привет дорогой ${name}! Как тебе живется в городе ${city} (${country})? Тебе всего лишь ${age}, а ты уже такой умный!`)
} else if (sex == 'Ж' || sex == 'ж') {
    alert(`Привет дорогая ${name}! Как тебе живется в городе ${city} (${country})? Тебе всего лишь ${age}- вся жизнь впереди!`)
} else {
    alert(`Hello ${name}! Как тебе живется в городе ${city} (${country})? Тебе всего лишь ${age}- живи весело!`)
}


