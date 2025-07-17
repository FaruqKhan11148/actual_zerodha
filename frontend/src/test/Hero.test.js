import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero.js';

// Test Suite --> multipl test cases can be written in this

describe('Hero Component', () => {
  test('render hero image', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText('heroImg');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src','media/images/homeHero.png');
  });

  test('render button', () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", {name:"Sign up for free"});
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass('btn-primary');
  });   
});

