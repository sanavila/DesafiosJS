import { expect } from '@jest/globals'
import resultMdc from './calcule'

test('Deve caluclar o valor do mdc 70, 67 ', () => {
  expect(resultMdc).toBe(1)
})
