import { render,waitFor, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
//import AddSeller from './AddSeller';
import Navbar from './Navbar'



test('Navbar Test', () => {
  render(
    <MemoryRouter>
  <Navbar/>
  </MemoryRouter>
);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("AddSeller");
});



test('Navbar Test2', () => {
  render(
    <MemoryRouter>
  <Navbar/>
  </MemoryRouter>
);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("ViewSeller");
});
test('Navbar Test2', () => {
  render(
    <MemoryRouter>
  <Navbar/>
  </MemoryRouter>
);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("ashion");
});
test('Navbar Test2', () => {
  render(
    <MemoryRouter>
  <Navbar/>
  </MemoryRouter>
);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("F");
});


