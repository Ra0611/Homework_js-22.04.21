// const surname = prompt('Введите фамилию')
// const name = prompt('Введите Имя')
// const city = prompt('Введите Город')
// const activeYear = 2021
// let date = prompt('Введите дату')
// // DD-MM-YYYY
// date = Number(date.substr(6, 4))

// const age = activeYear - date
// console.log(age)
const now = new Date()
const nowDay = now.getDate()
const nowMonth = now.getMonth() + 1
const nowYear = now.getFullYear()

const date = prompt('Введите дату')

const day = Number(date.substr(0, 2))
const month = Number(date.substr(3, 2))
const year = Number(date.substr(6, 4))
let age = null

age = nowYear - year
if (month == nowMonth) {
	if (day > nowDay) {
		age = age - 1
	}
} else if (month > nowMonth) {
	age = age - 1
} 
console.log(age)

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
