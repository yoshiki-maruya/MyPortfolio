import { render, fireEvent } from '@testing-library/react';
import SidebarItem from '../../../src/components/atoms/SidebarItem';
import { describe, it, expect, jest } from '@jest/globals';

describe('SidebarItem', () => {
  describe('when text is undefined', () => {
    it('should not show text', () => {
      const { container } = render(<SidebarItem href='/test' />);
      expect(container).not.toHaveTextContent('text');
    });
  });

  describe('when text is provided', () => {
    it('should render the text', () => {
      const { getByText } = render(<SidebarItem href='/about' text='ABOUT' />);
      expect(getByText('ABOUT')).toBeInTheDocument();
    });
  });

  describe('when href is provided', () => {
    it('should render an anchor with the correct href', () => {
      const { container } = render(<SidebarItem href='/works' text='WORKS' />);
      expect(container.querySelector('a')).toHaveAttribute('href', '/works');
    });
  });

  describe('when active matches index', () => {
    it('should apply active gradient styles', () => {
      const { container } = render(
        <SidebarItem href='/about' text='ABOUT' active={0} index={0} />
      );
      expect(container.querySelector('a')?.className).toContain('from-indigo-200');
    });
  });

  describe('when active does not match index', () => {
    it('should apply inactive text styles', () => {
      const { container } = render(
        <SidebarItem href='/about' text='ABOUT' active={1} index={0} />
      );
      expect(container.querySelector('a')?.className).toContain('text-gray-600');
    });
  });

  describe('when onClick is provided', () => {
    it('should call onClick when link is clicked', () => {
      const handleClick = jest.fn();
      const { container } = render(
        <SidebarItem href='/about' text='ABOUT' onClick={handleClick} />
      );
      fireEvent.click(container.querySelector('a')!);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('when onClick is not provided', () => {
    it('should not throw when clicked', () => {
      const { container } = render(<SidebarItem href='/about' text='ABOUT' />);
      expect(() => fireEvent.click(container.querySelector('a')!)).not.toThrow();
    });
  });
});
