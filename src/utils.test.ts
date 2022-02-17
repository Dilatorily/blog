import { Tag } from './constants';
import { compareDate, getContentFromFirstTag } from './utils';

describe('utils', () => {
  describe('getContentFromFirstTag', () => {
    it.each`
      post                                                                    | expected
      ${''}                                                                   | ${''}
      ${'<p>This is some text.</p>'}                                          | ${''}
      ${'<h1>Y2K Bugs</h1>'}                                                  | ${'Y2K Bugs'}
      ${'<h1>Y2K Bugs</h1><p>This is some text.</p><h1>Y2k Bugs part 2</h1>'} | ${'Y2K Bugs'}
    `('returns $expected when the `post` parameter is $post', ({ expected, post }) => {
      const results = getContentFromFirstTag(post, Tag.Heading1);
      expect(results).toBe(expected);
    });
  });

  describe('compareDate', () => {
    it.each`
      date1           | date2           | expected
      ${'2000-01-01'} | ${'2000-01-02'} | ${1}
      ${'2000-01-01'} | ${'1999-12-31'} | ${-1}
      ${'2000-01-01'} | ${'2000-01-01'} | ${0}
      ${'2000-01-01'} | ${'2000-02-01'} | ${1}
      ${'2000-01-01'} | ${'2022-01-01'} | ${1}
    `('returns $expected when comparing $date1 with $date2', ({ date1, date2, expected }) => {
      const results = compareDate(date1, date2);
      expect(results).toBe(expected);
    });
  });
});
