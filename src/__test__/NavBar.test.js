import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('NavBar', () => {
  test('Renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('renders logo and text', () => {
    render(
      <Router>
        <NavBar />
      </Router>,
    );
    const logo = screen.getByAltText('NebulaCoinnect Logo');
    expect(logo).toBeInTheDocument();
  });
});
