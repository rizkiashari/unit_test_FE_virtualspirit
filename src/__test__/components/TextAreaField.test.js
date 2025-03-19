import React from 'react';
import { render, screen } from '@testing-library/react';
import { TextAreaField } from '../../components/TextAreaField';

describe('TextAreaField Component', () => {
    const mockRef = React.createRef();

    it('renders correctly with label and placeholder', () => {
        render(
            <TextAreaField
                label="Description"
                name="description"
                placeholder="Enter description"
                ref={mockRef}
            />
        );

        expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Enter description/i)).toBeInTheDocument();
    });

    it('applies disabled attribute when isDisabled prop is true', () => {
        render(
            <TextAreaField
                label="Description"
                name="description"
                isDisabled={true}
                ref={mockRef}
            />
        );

        const textareaElement = screen.getByLabelText(/Description/i);
        expect(textareaElement).toBeDisabled();
    });

    it('renders without crashing', () => {
        const { container } = render(
            <TextAreaField label="Description" name="description" ref={mockRef} />
        );
        expect(container).toBeInTheDocument();
    });
});