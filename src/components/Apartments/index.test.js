import { render, screen } from '@testing-library/react';
import ApartmentsList from '../ApartmentsList';

test('renders learn react link', () => {
    render(<ApartmentsList />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
