import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';
import { describe, it, expect } from '@jest/globals';

describe("page.tsx", () => {
  it ("should display page", () => {
    render(<Home />);
    expect(screen.getByText('Portfolio'));
  })
})
