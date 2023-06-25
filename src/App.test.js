import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByLabelText('Imię:')).toBeInTheDocument();
    expect(screen.getByLabelText('Nazwisko:')).toBeInTheDocument();
    expect(screen.getByLabelText('Adres e-mail:')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Zarejestruj się' })
    ).toBeInTheDocument();
  });

  test('updates input values on change', () => {
    render(<App />);
    const firstNameInput = screen.getByLabelText('Imię:');
    const lastNameInput = screen.getByLabelText('Nazwisko:');
    const emailInput = screen.getByLabelText('Adres e-mail:');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    expect(firstNameInput.value).toBe('John');
    expect(lastNameInput.value).toBe('Doe');
    expect(emailInput.value).toBe('john.doe@example.com');
  });

  test('logs form data on submit', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<App />);
    const firstNameInput = screen.getByLabelText('Imię:');
    const lastNameInput = screen.getByLabelText('Nazwisko:');
    const emailInput = screen.getByLabelText('Adres e-mail:');
    const submitButton = screen.getByRole('button', {
      name: 'Zarejestruj się',
    });

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    fireEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Imię: John, Nazwisko: Doe, Adres e-mail: john.doe@example.com'
    );

    consoleSpy.mockRestore();
  });
});
