import { isCallback, isNotNullNorEmpty } from './utilities';

describe('utilities', () => {
  describe('isCallback', () => {
    it('should test if input is a function', () => {
      expect(isCallback(null)).toEqual(false);
      expect(isCallback(undefined)).toEqual(false);
      expect(isCallback(false)).toEqual(false);
      expect(isCallback(42)).toEqual(false);
      expect(isCallback('42')).toEqual(false);
      expect(isCallback({})).toEqual(false);
      expect(
        isCallback(function () {
          return 42;
        }),
      ).toEqual(true);
      expect(isCallback(() => 42)).toEqual(true);
    });
  });

  describe('isNotNullNorEmpty', () => {
    it('should test if input is not null', () => {
      expect(isNotNullNorEmpty(null)).toEqual(false);
      expect(isNotNullNorEmpty(undefined)).toEqual(false);
      expect(isNotNullNorEmpty(false)).toEqual(true);
      expect(isNotNullNorEmpty(42)).toEqual(true);
      expect(isNotNullNorEmpty('42')).toEqual(true);
      expect(
        isNotNullNorEmpty(function () {
          return 42;
        }),
      ).toEqual(true);
      expect(isNotNullNorEmpty(() => 42)).toEqual(true);
    });

    it('should test if input is not empty object', () => {
      expect(isNotNullNorEmpty({})).toEqual(false);
      expect(isNotNullNorEmpty([])).toEqual(false);
      expect(isNotNullNorEmpty({ foo: 'bar' })).toEqual(true);
      expect(isNotNullNorEmpty(['foo'])).toEqual(true);
    });
  });
});
