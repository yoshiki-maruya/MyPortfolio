import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Snackbar from '@/components/atoms/Snackbar';
import { describe, it, expect, jest } from '@jest/globals';

const baseProps = {
  open: true,
  text: 'Test message',
  autoHideDuration: jest.fn(),
  handleClose: jest.fn(),
  variant: 'success',
};

describe('Snackbar', () => {
  describe('when open is true', () => {
    it('should render the message text', () => {
      const { getByText } = render(<Snackbar {...baseProps} />);
      expect(getByText('Test message')).toBeInTheDocument();
    });

    it('should render a close button', () => {
      const { container } = render(<Snackbar {...baseProps} />);
      expect(container.querySelector('button')).toBeInTheDocument();
    });

    it.each([
      ['success', 'bg-green-500'],
      ['error', 'bg-red-500'],
      ['warning', 'bg-yellow-500'],
      ['info', 'bg-blue-500'],
    ])('should apply %s variant color class', (variant, expectedClass) => {
      const { container } = render(<Snackbar {...baseProps} variant={variant} />);
      expect(container.firstChild).toHaveClass(expectedClass);
    });
  });

  describe('when open is false', () => {
    it('should render nothing', () => {
      const { container } = render(<Snackbar {...baseProps} open={false} />);
      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('when close button is clicked', () => {
    it('should call handleClose', () => {
      const handleClose = jest.fn();
      const { container } = render(<Snackbar {...baseProps} handleClose={handleClose} />);
      fireEvent.click(container.querySelector('button')!);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('when icon is provided', () => {
    it('should render the icon inside the close button', () => {
      const { getByText } = render(
        <Snackbar {...baseProps} icon={<span>X</span>} />
      );
      expect(getByText('X')).toBeInTheDocument();
    });
  });
});
