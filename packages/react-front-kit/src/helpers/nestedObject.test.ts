import { addPath, flatten } from './nestedObject';

describe('nestedObject', () => {
  describe('flattenNestedObjects', () => {
    it('should flatten a nested object', () => {
      expect(
        flatten([
          { id: '1' },
          { children: [{ id: '21' }], id: '2' },
          {
            children: [{ children: [{ id: '311' }, { id: '312' }], id: '31' }],
            id: '3',
          },
        ]),
      ).toEqual([
        { id: '1' },
        { children: [{ id: '21' }], id: '2' },
        {
          children: [{ children: [{ id: '311' }, { id: '312' }], id: '31' }],
          id: '3',
        },
        { id: '21' },
        { children: [{ id: '311' }, { id: '312' }], id: '31' },
        { id: '311' },
        { id: '312' },
      ]);
    });
  });

  describe('addPathAndDepth', () => {
    it('should add path and deep property to nested object', () => {
      expect(
        addPath([
          { id: '1' },
          { children: [{ id: '21' }], id: '2' },
          {
            children: [{ children: [{ id: '311' }, { id: '312' }], id: '31' }],
            id: '3',
          },
        ]),
      ).toEqual([
        { children: [], depth: 0, id: '1', path: ['1'] },
        {
          children: [{ children: [], depth: 1, id: '21', path: ['2', '21'] }],
          depth: 0,
          id: '2',
          path: ['2'],
        },
        {
          children: [
            {
              children: [
                { children: [], depth: 2, id: '311', path: ['3', '31', '311'] },
                { children: [], depth: 2, id: '312', path: ['3', '31', '312'] },
              ],
              depth: 1,
              id: '31',
              path: ['3', '31'],
            },
          ],
          depth: 0,
          id: '3',
          path: ['3'],
        },
      ]);
    });
  });
});
