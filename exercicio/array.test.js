import { expect } from "@jest/globals";
import { min, max } from "./array";

test('Teste qual índice é o menor', () => {
  //["10", "25", "72", "66", "7"]
  expect(min).toBe(7)
})

test('Teste qual índice é o maior', () => {
  //["10", "25", "72", "66", "7"]
  expect(max).toBe(72)
})