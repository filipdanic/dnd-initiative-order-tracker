import { randomId } from './utils';

export const initialState = [{
  id: randomId(),
  name: 'Player 1',
  initiative: 20,
  hitpoints: 10,
}, {
  id: randomId(),
  name: 'Player 2',
  initiative: 19,
  hitpoints: 16,
}, {
  id: randomId(),
  name: 'Player 3',
  initiative: 18,
  hitpoints: 20,
}, {
  id: randomId(),
  name: 'Player 4',
  initiative: 17,
  hitpoints: 32,
}];
