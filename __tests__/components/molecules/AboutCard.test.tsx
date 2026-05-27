import { render } from '@testing-library/react';
import AboutCard from '@/components/molecules/AboutCard';
import { describe, it, expect } from '@jest/globals';

describe('AboutCard', () => {
  it('should render the title', () => {
    const { getByText } = render(<AboutCard title="Profile">Content</AboutCard>);
    expect(getByText('Profile')).toBeInTheDocument();
  });

  it('should render children content', () => {
    const { getByText } = render(<AboutCard title="Profile">My description</AboutCard>);
    expect(getByText('My description')).toBeInTheDocument();
  });

  it('should render children as React nodes', () => {
    const { getByText } = render(
      <AboutCard title="Tech">
        <span>React</span>
      </AboutCard>
    );
    expect(getByText('React')).toBeInTheDocument();
  });
});
