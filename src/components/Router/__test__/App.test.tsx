import React from 'react';
import { render, screen } from '@testing-library/react';
import AppRouter from '../Router';

describe('AppRouter', () => {
  it('renderiza o componente Home quando acessado o caminho "/"', () => {
      render(<AppRouter />);
      expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it('renderiza o componente About quando acessado o caminho "/about"', () => {
      render(<AppRouter />);
      expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  it('renderiza o componente Contact quando acessado o caminho "/contact"', () => {
      render(<AppRouter />);
      expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});