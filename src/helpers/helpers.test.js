import { getRandomNumber } from ".";

describe("getRandomNumber", () => {
  test("default values", () => {
    for (let i = 0; i < 100; i++) {
      expect(getRandomNumber()).toBeLessThan(16);
      expect(getRandomNumber()).toBeGreaterThan(0);
    }
  });

  test("custom values", () => {
    for (let i = 0; i < 100; i++) {
      expect(getRandomNumber(199, 21)).toBeLessThan(200);
      expect(getRandomNumber(199, 21)).toBeGreaterThan(20);
    }
  });
});
