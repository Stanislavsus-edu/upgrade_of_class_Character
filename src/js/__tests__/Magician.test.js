import Magician from '../Magician';

test('create Magician ok', () => {
  const character = new Magician('Harry', 'Magician');
  const result = {
    name: 'Harry',
    type: 'Magician',
    health: 100,
    level: 1,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});