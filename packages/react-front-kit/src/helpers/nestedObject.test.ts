import { flatten } from './nestedObject';

describe('nestedObject', () => {
  describe('flatten', () => {
    it('should flatten a nested object and add index, parentId, depth and path property to nested object', () => {
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
        { depth: 0, id: '1', index: 0, parentId: null, path: ['1'] },
        {
          children: [
            {
              id: '21',
            },
          ],
          depth: 0,
          id: '2',
          index: 1,
          parentId: null,
          path: ['2'],
        },
        { depth: 1, id: '21', index: 0, parentId: '2', path: ['2', '21'] },
        {
          children: [
            {
              children: [
                {
                  id: '311',
                },
                {
                  id: '312',
                },
              ],
              id: '31',
            },
          ],
          depth: 0,
          id: '3',
          index: 2,
          parentId: null,
          path: ['3'],
        },
        {
          children: [
            {
              id: '311',
            },
            {
              id: '312',
            },
          ],
          depth: 1,
          id: '31',
          index: 0,
          parentId: '3',
          path: ['3', '31'],
        },
        {
          depth: 2,
          id: '311',
          index: 0,
          parentId: '31',
          path: ['3', '31', '311'],
        },
        {
          depth: 2,
          id: '312',
          index: 1,
          parentId: '31',
          path: ['3', '31', '312'],
        },
      ]);
    });
  });
});
