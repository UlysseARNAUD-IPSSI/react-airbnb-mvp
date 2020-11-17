import { render, screen } from '@testing-library/react';
import Apartments from '../Apartments';

test('renders learn react link', () => {
    render(<Apartments />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
