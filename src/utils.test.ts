import { Tag, TestId } from './constants';
import { compareDate, getContentFromFirstTag, testId } from './utils';

describe('utils', () => {
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

  describe('testId', () => {
    let backupNodeEnv: string | undefined;

    beforeAll(() => {
      backupNodeEnv = process.env.NODE_ENV;
    });

    afterAll(() => {
      Object.defineProperty(process.env, 'NODE_ENV', { value: backupNodeEnv });
    });

    it.each`
      nodeEnv          | id                           | expected
      ${'development'} | ${TestId.HomeArticlePreview} | ${TestId.HomeArticlePreview}
      ${'test'}        | ${TestId.HomeArticlePreview} | ${TestId.HomeArticlePreview}
      ${'production'}  | ${TestId.HomeArticlePreview} | ${undefined}
    `(
      'returns $expected when it is called with $id in the $nodeEnv NODE_ENV environment',
      ({ expected, id, nodeEnv }) => {
        Object.defineProperty(process.env, 'NODE_ENV', { value: nodeEnv });

        const results = testId(id);

        expect(results).toBe(expected);
      },
    );
  });
});
