import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from "../../components/Layout.jsx";
import { Sidebar } from "../../components/Sidebar";

jest.mock('../../components/Sidebar'); // Mock the Sidebar component

describe('Layout Component', () => {
    it('renders Sidebar and children components', () => {
        const childText = 'This is a child component';

        render(
            <Layout>
                <div>{childText}</div>
            </Layout>
        );

        expect(screen.getByText('This is a child component')).toBeInTheDocument();
    });
});