import buildAssets from './assets';
import buildHome from './home';
import buildRoutes from './routes';
import buildDocsFolder from '.';

jest.mock('./assets', () => ({ __esModule: true, default: jest.fn() }));
jest.mock('./home', () => ({ __esModule: true, default: jest.fn() }));
jest.mock('./routes', () => ({ __esModule: true, default: jest.fn() }));

describe('buildDocsFolder', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls buildAssets', () => {
    buildDocsFolder();

    expect(buildAssets).toHaveBeenCalled();
  });

  it('calls buildHome', () => {
    buildDocsFolder();

    expect(buildHome).toHaveBeenCalled();
  });

  it('calls buildRoutes', () => {
    buildDocsFolder();

    expect(buildRoutes).toHaveBeenCalled();
  });
});
