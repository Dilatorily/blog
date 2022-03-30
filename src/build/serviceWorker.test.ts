describe('serviceWorker', () => {
  let backupAddEventListener: typeof window.addEventListener;
  let backupNavigator: typeof navigator;
  let backupServiceWorker: typeof navigator.serviceWorker;
  const addEventListener = jest.fn();
  const register = jest.fn();

  beforeAll(() => {
    backupAddEventListener = window.addEventListener;
    backupNavigator = window.navigator;
    backupServiceWorker = navigator.serviceWorker;
  });

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    Object.defineProperty(window, 'addEventListener', { value: addEventListener });
    Object.defineProperty(navigator, 'serviceWorker', { configurable: true, value: { register } });
  });

  afterAll(() => {
    Object.defineProperties(window, {
      addEventListener: { value: backupAddEventListener },
      navigator: { value: backupNavigator },
    });
    Object.defineProperty(navigator, 'serviceWorker', { value: backupServiceWorker });
  });

  it('listens to the load event', () => {
    jest.requireActual('./serviceWorker');

    expect(addEventListener).toHaveBeenCalledWith('load', expect.any(Function));
  });

  it('registers a service worker if it is supported', () => {
    jest.requireActual('./serviceWorker');
    const [[, onLoad]] = addEventListener.mock.calls;

    onLoad();

    expect(register).toHaveBeenCalledWith('/sw.js');
  });

  it('does not register a service worker if it is unsupported', () => {
    const { serviceWorker, ...navigator } = window.navigator;
    Object.defineProperty(window, 'navigator', { value: navigator });
    jest.requireActual('./serviceWorker');
    const [[, onLoad]] = addEventListener.mock.calls;

    onLoad();

    expect(register).not.toHaveBeenCalled();
  });
});
