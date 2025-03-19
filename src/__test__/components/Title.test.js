import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Title } from '../../components/Title';

describe('Title Component', () => {
    const mockAction = jest.fn();

    it('renders correctly with the provided title', () => {
        const titleText = 'Test Title';

        render(<Title title={titleText} action={mockAction} />);

        expect(screen.getByText(titleText)).toBeInTheDocument();
    });

    it('calls action function when the button is clicked', () => {
        const titleText = 'Test Title';

        render(<Title title={titleText} action={mockAction} />);

        const button = screen.getByRole('button', { name: `Add ${titleText}` });
        fireEvent.click(button);

        expect(mockAction).toHaveBeenCalledTimes(1);
    });

    it('renders button with correct text', () => {
        const titleText = 'Test Title';

        render(<Title title={titleText} action={mockAction} />);

        const button = screen.getByRole('button', { name: `Add ${titleText}` });
        expect(button).toBeInTheDocument();
    });
});