/**
 * @jest-environment jsdom
*/
/* eslint linebreak-style: ["error", "windows"] */

// TEST SCENARIOS

// SIGN IN INPUT COMPONENT

// should handle email typing correctly
// should handle password typing correctly
// should call submitFormHandler function when sign in button is clicked

import React from 'react';

// TESTS
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// COMPONENTS
import SignInInput from './SignInInput';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // ARRANGE
    render(<SignInInput submitFormHandler={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Enter your email address here');

    // ACTION
    await userEvent.type(emailInput, 'test@gmail.com');

    // ASSERT
    expect(emailInput).toHaveValue('test@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // ARRANGE
    render(<SignInInput submitFormHandler={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Enter your password here');

    // ACTION
    await userEvent.type(passwordInput, 'passwordtest');

    // ASSERT
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call submitFormHandler function when sign in button is clicked', async () => {
    // ARRANGE
    const mockSignIn = vi.fn();

    render(<SignInInput submitFormHandler={mockSignIn} />);

    const emailInput = await screen.getByPlaceholderText('Enter your email address here');
    await userEvent.type(emailInput, 'test@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Enter your password here');
    await userEvent.type(passwordInput, 'passwordtest');
    const signInButton = await screen.getByRole('button', { name: 'Sign In' });

    // ACTION
    await userEvent.click(signInButton);

    // ASSERT
    expect(mockSignIn).toBeCalledWith({
      email: 'test@gmail.com',
      password: 'passwordtest',
    });
  });
});
