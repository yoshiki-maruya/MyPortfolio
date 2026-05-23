import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Footer from '@/components/Footer';
import { describe, it, expect } from '@jest/globals';

describe('Footer', () => {
  it('should show copyright text', () => {
    const { container } = render(<Footer />);
    expect(container).toHaveTextContent('maruyaki');
  });

  it('should show privacy policy link', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('プライバシーポリシー')).toBeInTheDocument();
  });

  it('should link privacy policy to correct path', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('プライバシーポリシー').closest('a')).toHaveAttribute(
      'href',
      '/privacy-policy'
    );
  });

  it('should have a GitHub link', () => {
    const { container } = render(<Footer />);
    const links = Array.from(container.querySelectorAll('a'));
    const githubLink = links.find((a) => a.getAttribute('href')?.includes('github.com'));
    expect(githubLink).toBeInTheDocument();
  });

  it('should have a LinkedIn link', () => {
    const { container } = render(<Footer />);
    const links = Array.from(container.querySelectorAll('a'));
    const linkedinLink = links.find((a) => a.getAttribute('href')?.includes('linkedin.com'));
    expect(linkedinLink).toBeInTheDocument();
  });
});
