import { render, fireEvent } from '@testing-library/react';
import CustomLink from '@/components/atoms/CustomLink';
import { describe, it, expect, jest } from '@jest/globals';

describe('CustomLink', () => {
  it('should render children', () => {
    const { getByText } = render(<CustomLink href="/about">About</CustomLink>);
    expect(getByText('About')).toBeInTheDocument();
  });

  it('should render an anchor with the correct href', () => {
    const { container } = render(<CustomLink href="/works">Works</CustomLink>);
    expect(container.querySelector('a')).toHaveAttribute('href', '/works');
  });

  describe('when className is provided', () => {
    it('should apply className to the wrapper div', () => {
      const { container } = render(
        <CustomLink href="/about" className="custom-class">About</CustomLink>
      );
      expect(container.firstChild).toHaveClass('custom-class');
    });
  });

  describe('when className is not provided', () => {
    it('should render wrapper div without class attribute', () => {
      const { container } = render(<CustomLink href="/about">About</CustomLink>);
      expect(container.firstChild).not.toHaveClass();
    });
  });

  describe('when onClick is provided', () => {
    it('should call onClick when the link is clicked', () => {
      const handleClick = jest.fn();
      const { getByText } = render(
        <CustomLink href="/about" onClick={handleClick}>Click me</CustomLink>
      );
      fireEvent.click(getByText('Click me'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('when onClick is not provided', () => {
    it('should not throw when clicked', () => {
      const { getByText } = render(<CustomLink href="/about">Click me</CustomLink>);
      expect(() => fireEvent.click(getByText('Click me'))).not.toThrow();
    });
  });
});
