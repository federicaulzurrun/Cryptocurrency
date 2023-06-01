import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CurrencyList from '../components/Home/Home';

describe('Test for the home page', () => {
  test('Renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <CurrencyList />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
