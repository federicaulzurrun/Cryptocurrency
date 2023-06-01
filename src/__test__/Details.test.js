import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Details from '../components/Details/Details';

describe('CurrencyDetail Component', () => {
  test('renders correctly when currency details are available', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
