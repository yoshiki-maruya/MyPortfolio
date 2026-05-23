import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Sidebar from '@/components/Sidebar';
import { describe, it, expect, beforeEach } from '@jest/globals';

let mockPathname = '/about';
jest.mock('next/navigation', () => ({
  usePathname: () => mockPathname,
}));

describe('Sidebar', () => {
  beforeEach(() => {
    mockPathname = '/about';
  });

  it('should show site name', () => {
    const { getByText } = render(<Sidebar />);
    expect(getByText('MyCanvas')).toBeInTheDocument();
  });

  it('should render all navigation items', () => {
    const { getByText } = render(<Sidebar />);
    expect(getByText('ABOUT')).toBeInTheDocument();
    expect(getByText('WORKS')).toBeInTheDocument();
    expect(getByText('BLOG')).toBeInTheDocument();
    expect(getByText('CONTACT')).toBeInTheDocument();
  });

  it('should render nav links with correct hrefs', () => {
    const { container } = render(<Sidebar />);
    const links = Array.from(container.querySelectorAll('a'));
    const hrefs = links.map((a) => a.getAttribute('href'));
    expect(hrefs).toContain('/about');
    expect(hrefs).toContain('/works');
    expect(hrefs).toContain('/blog');
    expect(hrefs).toContain('/contact');
  });

  it('should link site name to home page', () => {
    const { getByText } = render(<Sidebar />);
    expect(getByText('MyCanvas').closest('a')).toHaveAttribute('href', '/');
  });

  it('should mark an item active when it is clicked', () => {
    const { getByText } = render(<Sidebar />);
    const aboutLink = getByText('ABOUT').closest('a')!;
    expect(aboutLink.className).toContain('text-gray-600');
    fireEvent.click(aboutLink);
    expect(aboutLink.className).toContain('from-indigo-200');
  });

  it('should have no active item on the home page', () => {
    mockPathname = '/';
    const { container } = render(<Sidebar />);
    const links = Array.from(container.querySelectorAll('nav a'));
    links.forEach((link) => {
      expect(link.className).not.toContain('from-indigo-200');
    });
  });
});