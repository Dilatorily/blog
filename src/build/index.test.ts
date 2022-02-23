import buildAssets from './assets';
import buildHome from './home';
import buildRoutes from './routes';
import buildPublicFolder from '.';

jest.mock('./assets', () => ({ __esModule: true, default: jest.fn() }));
jest.mock('./home', () => ({ __esModule: true, default: jest.fn() }));
jest.mock('./routes', () => ({ __esModule: true, default: jest.fn() }));

describe('buildPublicFolder', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls buildAssets', () => {
    buildPublicFolder();

    expect(buildAssets).toHaveBeenCalled();
  });

  it('calls buildHome', () => {
    buildPublicFolder();

    expect(buildHome).toHaveBeenCalled();
  });

  it('calls buildRoutes', () => {
    buildPublicFolder();

    expect(buildRoutes).toHaveBeenCalled();
  });
});
