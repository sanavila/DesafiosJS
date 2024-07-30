import { expect } from '@jest/globals'
import result from './soma-multiplos'

test('O resultado da soma do multiplos deve ser 0', () => {
  expect(result).toBe(0)
});