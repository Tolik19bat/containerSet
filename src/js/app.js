// TODO: write your code here
// import sum from './basic';
//
// console.log('worked');
//
// console.log(sum([1, 2]));
//=====================================================

const character = [{
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]
},
   {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]
  }]
// console.log(character)


class Team {
  constructor() {
      this.members = new Set();
  }
  add(argument) {
    if(this.members) {
      throw new Error('character already exists');
    }
    this.members.add(argument);
  }
  addAll(...rest) {//как реализовать проверку массива и удалить дубль объект
  this.members.add(rest);
    console.log(this.members)
  }
  toArray() {

  }
}
const result = new Team();
result.addAll(character);
result.add(character);
console.log(result);
