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

// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import '@testing-library/jest-dom/extend-expect';
// import NavBar from '../components/Navbar/NavBar';

// describe('NavBar', () => {
//   test('renders logo', () => {
//     render(
//       <BrowserRouter>
//         <NavBar />
//       </BrowserRouter>,
//     );

//     const logoElement = screen.getByAltText('NebulaCoinnect Logo');
//     expect(logoElement).toBeInTheDocument();
//   });

//   test('navigates to home on back arrow click', () => {
//     const mockNavigate = jest.fn();
//     jest.mock('react-router-dom', () => ({
//       ...jest.requireActual('react-router-dom'),
//       useNavigate: () => mockNavigate,
//     }));

//     render(
//       <BrowserRouter>
//         <NavBar />
//       </BrowserRouter>,
//     );

//     const backButton = screen.getByTestId('back-button');
//     fireEvent.click(backButton);

//     expect(mockNavigate).toHaveBeenCalledWith('/');
//   });
// });
