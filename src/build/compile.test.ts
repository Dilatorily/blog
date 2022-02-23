import linaria from '@linaria/esbuild';
import { build } from 'esbuild';
import noop from 'lodash/noop';
import compile from './compile';

jest.mock('@linaria/esbuild', () => ({
  ...jest.requireActual('@linaria/esbuild'),
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('esbuild', () => ({
  ...jest.requireActual('esbuild'),
  build: jest.fn(),
}));

describe('compile', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('builds using esbuild', () => {
    compile();

    expect(build).toHaveBeenCalled();
  });

  it('builds with linaria', () => {
    compile();

    expect(linaria).toHaveBeenCalled();
  });

  it("ends the build process with an error code if there's an error", async () => {
    jest.spyOn(process, 'exit').mockImplementationOnce(noop as typeof process.exit);
    jest.mocked(build).mockRejectedValueOnce({});

    await compile();

    expect(process.exit).toHaveBeenCalledWith(1);
  });
});
