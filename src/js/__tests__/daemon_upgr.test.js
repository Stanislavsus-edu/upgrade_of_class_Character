import Daemon from '../Daemon';

test('Daemon attack standart', () => {
  const character = new Daemon('Harry');
  character.attack = 100;
  expect(character.attack).toBe(100);
});

test('Daemon attack distance 3', () => {
  const character = new Daemon('Harry');
  character.attack = 100;
  character.distance = 3;
  expect(character.attack).toBe(80);
});

test('Daemon attack distance stoned', () => {
  const character = new Daemon('Harry');
  character.attack = 100;
  character.distance = 3;
  character.stoned = true;
  expect(character.attack).toBe(72);
});

test('Daemon attack < 0', () => {
  const character = new Daemon('Harry');
  character.attack = 1;
  character.distance = 5;
  character.stoned = true;
  expect(character.attack).toBe(0);
});

test('Daemon stoned', () => {
  const character = new Daemon('Harry');
  character.stoned = true;
  expect(character.stoned).toBe(true);
});