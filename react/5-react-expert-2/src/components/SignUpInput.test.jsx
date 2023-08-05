/**
 * @jest-environment jsdom
*/
/* eslint linebreak-style: ["error", "windows"] */

// TEST SCENARIOS

// SIGN UP INPUT COMPONENT

// should handle name typing correctly
// should handle email typing correctly
// should handle password typing correctly
// should call submitFormHandler function when sign up button is clicked

import React from 'react';

// TESTS
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// COMPONENTS
import SignUnInput from './SignUpInput';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    // ARRANGE
    render(<SignUnInput submitFormHandler={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Write your name here');

    // ACTION
    await userEvent.type(nameInput, 'test name');

    // ASSERT
    expect(nameInput).toHaveValue('test name');
  });

  it('should handle email typing correctly', async () => {
    // ARRANGE
    render(<SignUnInput submitFormHandler={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Write your email address here');

    // ACTION
    await userEvent.type(emailInput, 'test@gmail.com');

    // ASSERT
    expect(emailInput).toHaveValue('test@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // ARRANGE
    render(<SignUnInput submitFormHandler={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Type your password here');

    // ACTION
    await userEvent.type(passwordInput, 'passwordtest');

    // ASSERT
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call submitFormHandler function when sign up button is clicked', async () => {
    // ARRANGE
    const mockSignIn = vi.fn();

    render(<SignUnInput submitFormHandler={mockSignIn} />);

    const nameInput = await screen.getByPlaceholderText('Write your name here');
    await userEvent.type(nameInput, 'test name');
    const emailInput = await screen.getByPlaceholderText('Write your email address here');
    await userEvent.type(emailInput, 'test@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Type your password here');
    await userEvent.type(passwordInput, 'passwordtest');
    const signInButton = await screen.getByRole('button', { name: 'Sign Up' });

    // ACTION
    await userEvent.click(signInButton);

    // ASSERT
    expect(mockSignIn).toBeCalledWith({
      name: 'test name',
      email: 'test@gmail.com',
      password: 'passwordtest',
    });
  });
});
