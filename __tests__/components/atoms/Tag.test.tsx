import { render } from '@testing-library/react';
import Tag from '@/components/atoms/Tag';
import { describe, it, expect } from '@jest/globals';

describe('Tag', () => {
  it('should render tag text with # prefix', () => {
    const { getByText } = render(<Tag tag="react" href="/categories/react" />);
    expect(getByText('#react')).toBeInTheDocument();
  });

  it('should render an anchor with the correct href', () => {
    const { container } = render(<Tag tag="nextjs" href="/categories/nextjs" />);
    expect(container.querySelector('a')).toHaveAttribute('href', '/categories/nextjs');
  });

  describe('when tag contains uppercase letters', () => {
    it('should render the tag as-is', () => {
      const { getByText } = render(<Tag tag="TypeScript" href="/categories/TypeScript" />);
      expect(getByText('#TypeScript')).toBeInTheDocument();
    });
  });
});
