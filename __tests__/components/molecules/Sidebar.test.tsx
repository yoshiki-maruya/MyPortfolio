import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Sidebar from '@/components/Sidebar';
import { describe, it, expect } from '@jest/globals';

describe("Sidebar", () => {
  it("should show siteName", () => {
    const { container } = render(<Sidebar />);
    expect(container).toHaveTextContent("MyCanvas");
  })
})