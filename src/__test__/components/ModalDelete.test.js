import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ModalDelete } from '../../components/ModalDelete';

describe('ModalDelete Component', () => {
    const handleClose = jest.fn();
    const handleDelete = jest.fn();
    const title = 'Are you sure you want to delete this item?';
    const isOpen = true;

    beforeEach(() => {
        render(
            <ModalDelete
                handleClose={handleClose}
                handleDelete={handleDelete}
                title={title}
                isOpen={isOpen}
            />
        );
    });

    it('renders the modal with the correct title', () => {
        expect(screen.getByText(title)).toBeInTheDocument();
    });

    it('calls handleClose when the close button is clicked', () => {
        const closeButton = screen.getByRole('button', { name: /close modal/i });
        fireEvent.click(closeButton);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls handleDelete when the "Yes, I\'m sure" button is clicked', () => {
        const deleteButton = screen.getByRole('button', { name: /yes, i'm sure/i });
        fireEvent.click(deleteButton);
        expect(handleDelete).toHaveBeenCalledTimes(1);
    });
});