import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {Button} from './Button';

describe('<Button />', () => {
  it('renders and matches the text', () => {
    const text = 'Click me!';
    const { getByText } = render(<Button>{text}</Button>);

    const linkElement = getByText(text);
    expect(linkElement).toBeInTheDocument();
  });

  it('handles clicks', () => {
    const onClickMock = jest.fn();
    const text = 'Click me!';
    const { getByText } = render(<Button onClick={onClickMock}>{text}</Button>);

    fireEvent.click(getByText(text));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
