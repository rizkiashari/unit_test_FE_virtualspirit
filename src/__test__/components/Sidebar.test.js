import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { menus } from '../../constans/menus';

jest.mock('../../constans/menus', () => ({
    menus: [
        { path: '/test1', title: 'Test Menu 1', icon: <span>Icon1</span> },
        { path: '/test2', title: 'Test Menu 2', icon: <span>Icon2</span> },
    ],
}));

describe('Sidebar Component', () => {
    beforeEach(() => {
        render(
            <Router>
                <Sidebar />
            </Router>
        );
    });

    it('renders the Sidebar with the correct title', () => {
        const titleElement = screen.getByText(/Virtual Spirit/i);
        expect(titleElement).toBeInTheDocument();
    });

    it('renders the correct number of menu items', () => {
        const menuItems = screen.getAllByRole('link'); // All links are rendered as <a>
        expect(menuItems.length).toBe(menus.length + 1); // Plus one for the title link
    });

    it('renders the menu items with correct titles and paths', () => {
        menus.forEach((item) => {
            const linkElement = screen.getByText(item.title);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement.closest('a')).toHaveAttribute('href', item.path);
        });
    });
});