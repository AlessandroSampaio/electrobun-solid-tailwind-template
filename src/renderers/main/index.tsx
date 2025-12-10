import { render } from 'solid-js/web';
import App from './App';

const appElement = document.querySelector('#app');

// todo (yoav): we should only render the app when we have the state
// and have a state type that doesn't have all the nulls and such to avoid
// a ton of type checking issues
if (appElement) {
  render(App, appElement);
} else {
  console.error('no #app element to render into');
}
