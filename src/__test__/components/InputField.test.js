import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputField } from "../../components/InputField";

describe('InputField component', () => {
    const mockInputRef = React.createRef();

    it('renders with label and placeholder', () => {
        render(
            <InputField
                name="testInput"
                label="Test Input"
                placeholder="Enter something"
                ref={mockInputRef}
            />
        );

        const labelElement = screen.getByLabelText(/Test Input/i);
        const inputElement = screen.getByPlaceholderText(/Enter something/i);

        expect(labelElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
    });

    it('applies disabled attribute when isDisabled prop is true', () => {
        render(
            <InputField
                name="testInput"
                label="Test Input"
                isDisabled={true}
                ref={mockInputRef}
            />
        );

        const inputElement = screen.getByLabelText(/Test Input/i);
        expect(inputElement).toBeDisabled();
    });

    it('renders without crashing', () => {
        const { container } = render(
            <InputField name="testInput" label="Test Input" ref={mockInputRef} />
        );
        expect(container).toBeInTheDocument();
    });
});