import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});
//===================================================
import Team from '../app';// импорт функции
//входные данные
const character = [{
  name: 'Лучник',
/* eslint-disable */name: 'Лучник',//дубль свойство
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
}];

const character1 = [{
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
}];

const team = new Team();// присваеваем конструктор

test('add()добавляет персонажа в команду', () => {
  team.add(character);
  expect(team.members.size).toBe(1);
  // expect([...team.members]).toContain(character);
});

test('add() должен выдать ошибку, если член уже существует', () => {
  team.add(character);
  expect(() => team.add(character)).toThrow('character already exists');
});

test('addAll() следует добавить в команду несколько участников без дубликатов', () => {
  team.addAll(character);
  expect([...team.members]).toBe(character1);
});

test('toArray() должен преобразовать членов команды в массив записей', () => {

  const result = team.toArray(character);

  const arr = [
    ['name', 'Лучник'],
    ['type', 'Bowman'],
    ['health', 50],
    ['level', 3],
    ['attack', 40],
    ['defence', 10],
    ['special', [[Object], [Object]]]
  ];

  expect(result).toEqual(arr);
});
//===================================finish