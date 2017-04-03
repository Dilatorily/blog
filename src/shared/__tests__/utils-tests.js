import { getContentFromFirstTag } from '../utils';

describe('utils', () => {
  describe('getContentFromFirstTag', () => {
    it('should return null with no post parameter', () => {
      const results = getContentFromFirstTag();
      expect(results).toBe(null);
    });

    it('should return null with no tag parameter', () => {
      const results = getContentFromFirstTag('<h1>Y2K Bugs</h1>');
      expect(results).toBe(null);
    });

    it('should return the text content of the first tag in the post', () => {
      const results = getContentFromFirstTag('<h1>Y2K Bugs</h1><p>This is some text.</p><h1>Y2k Bugs part 2</h1>', 'h1');
      expect(results).toBe('Y2K Bugs');
    });
  });
});
