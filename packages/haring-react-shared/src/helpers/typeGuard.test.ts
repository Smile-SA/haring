import { typeGuard, typeGuardInterface } from './typeGuard';

interface ITest {
  id: number;
}

describe('typeGuard', () => {
  describe('typeGuard', () => {
    it('should test if value is correct Primitive or Constructor', () => {
      // primitives
      expect(typeGuard('string', 'number')).toEqual(false);
      expect(typeGuard('string', 'boolean')).toEqual(false);
      expect(typeGuard('string', 'string')).toEqual(true);
      expect(typeGuard(42, 'number')).toEqual(true);
      expect(typeGuard(42, 'boolean')).toEqual(false);
      expect(typeGuard(42, 'number')).toEqual(true);
      expect(typeGuard(true, 'number')).toEqual(false);
      expect(typeGuard(true, 'string')).toEqual(false);
      expect(typeGuard(true, 'boolean')).toEqual(true);
      expect(typeGuard(false, 'number')).toEqual(false);
      expect(typeGuard(false, 'string')).toEqual(false);
      expect(typeGuard(false, 'boolean')).toEqual(true);
      expect(typeGuard(null, 'number')).toEqual(false);
      expect(typeGuard(null, 'string')).toEqual(false);
      expect(typeGuard(null, 'boolean')).toEqual(false);
      expect(typeGuard(undefined, 'number')).toEqual(false);
      expect(typeGuard(undefined, 'string')).toEqual(false);
      expect(typeGuard(undefined, 'boolean')).toEqual(false);
      // constructor
      expect(typeGuard(new Date(), 'number')).toEqual(false);
      expect(typeGuard(new Date(), 'boolean')).toEqual(false);
      expect(typeGuard(new Date(), 'string')).toEqual(false);
      expect(typeGuard('string', Date)).toEqual(false);
      expect(typeGuard(42, Date)).toEqual(false);
      expect(typeGuard(true, Date)).toEqual(false);
      expect(typeGuard(false, Date)).toEqual(false);
      expect(typeGuard(null, Date)).toEqual(false);
      expect(typeGuard(undefined, Date)).toEqual(false);
      expect(typeGuard(new Date(), Date)).toEqual(true);
    });
  });
  describe('typeGuardInterface', () => {
    it('should test if value is validated as given interface', () => {
      expect(typeGuardInterface<ITest>({}, 'id')).toEqual(false);
      expect(typeGuardInterface<ITest>({ id: 1 }, 'label')).toEqual(false);
      expect(typeGuardInterface<ITest>({ id: 1 }, 'id')).toEqual(true);
      expect(typeGuardInterface<ITest>({ id: 1 }, 'id', 'string')).toEqual(
        false,
      );
      expect(typeGuardInterface<ITest>({ id: 1 }, 'id', 'number')).toEqual(
        true,
      );
    });
  });
});
