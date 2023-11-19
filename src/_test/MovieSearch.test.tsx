import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import mockdata from './mock/data.json';

import MovieSearch from '../pages/MovieSearch';

describe('Test movie search', () => {
  test('The application initially displays should be no movies', () => {
    const { container } = render(<MovieSearch />);
    const moviecard = container.querySelector('.movie-container');
    expect(moviecard).not.toBeInTheDocument()
  });

  test('Movies can be searched by title', async () => {
    const MOCK_DATA = mockdata

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })) as jest.Mock;

    render(<MovieSearch />);
    const searchbutton = screen.getByRole('button');
    fireEvent.click(searchbutton);
    const item = await screen.findByText('Girl, Interrupted');
    expect(item).toBeInTheDocument();
  });
});
