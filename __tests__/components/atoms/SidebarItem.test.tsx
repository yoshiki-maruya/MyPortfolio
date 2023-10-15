import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import SidebarItem from '../../../src/components/atoms/SidebarItem';
import { describe, it, expect } from '@jest/globals';

describe('SidebarItem', () => {
  describe('when text is undefined', () => {
    it('should not show text', () => {
      const { container } = render(<SidebarItem href='aaa' />);
      expect(container).not.toHaveTextContent('text');
    })
  })
})
