import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ModalAdd } from '../../components/ModalAdd';

describe('ModalAdd Component', () => {
    const handleClose = jest.fn();
    const handleAdd = jest.fn();
    const title = 'Add New Item';
    const isOpen = true;

    beforeEach(() => {
        render(
            <ModalAdd
                handleClose={handleClose}
                handleAdd={handleAdd}
                title={title}
                isOpen={isOpen}
                data={null} // or pass initial data if needed
            />
        );
    });

    it('renders the modal with the correct title', () => {
        expect(screen.getByText(title)).toBeInTheDocument();
    });

    it('closes the modal when handleClose is called', () => {
        const closeButton = screen.getByText('No, cancel');
        fireEvent.click(closeButton);
        expect(handleClose).toHaveBeenCalled();
    });
});