import Daemon from '../Daemon';

test('create Daemon ok', () => {
  const character = new Daemon('Harry', 'Daemon');
  const result = {
    name: 'Harry',
    type: 'Daemon',
    health: 100,
    level: 1,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});