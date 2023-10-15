import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../../src/app/page';
import { describe, it, expect } from '@jest/globals';

describe("page.tsx", () => {
  it ("should display page", () => {
    render(<Home />);
    expect(screen.getByText("I'm Software Developer"));
  })
})
