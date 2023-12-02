// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));
//=====================================================
//входные данные
// const character = [{
//   name: 'Лучник',
//   name: 'Лучник',//дубль свойство
//   type: 'Bowman',
//   health: 50,
//   level: 3,
//   attack: 40,
//   defence: 10,
//   special: [
//     {
//       id: 8,
//       name: 'Двойной выстрел',
//       icon: 'http://...',
//       description: 'Двойной выстрел наносит двойной урон'
//     },
//     {
//       id: 9,
//       name: 'Нокаутирующий удар',
//       icon: 'http://...'
//       // <- обратите внимание, описание "засекречено"
//     }
//   ]
// }];
// console.log(character)

export default class Team {                 //создаём класс
  constructor() {            //конструктор
    this.members = new Set();//присваеваем объект set
  }

  add(argument) {                                 //метод добавления карточки игрока
    if (this.members.has(argument)) {             //если карточка присутствует в переменной
      throw new Error('character already exists');//выводим ошибку
    } else {                                      //если отсутствует
      this.members.add(argument);                   //добовляем новую
    }
    // console.log(this.members)
  }

  addAll(...argument) {                    // метод добавления коллекции карточек
    this.members.add(...new Set(argument));//добавляем коллекцию без задвоений
    // console.log(this.members)
  }

  toArray(argument) {           //метод конвертации объекта character в массив
    let array = [];              //создаём новый массив
    for (let item of argument) {//методом перебора
      // console.log(item)
      array = Object.entries(item)//присваеваем массив собственных перечисляемых свойств
    }
    // console.log(array)
    return array;                 //возвращаем новый массив
  }
}

// const result = new Team();
// result.add(character);
// result.addAll(character);
// result.toArray(character)
