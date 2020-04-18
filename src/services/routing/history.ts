import { createBrowserHistory, History } from 'history';

const history = createBrowserHistory();

// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
export default history as NonNullable<History>;

export const getRedirectHandler = (path: string) => () => {
  history.push(path);
};
