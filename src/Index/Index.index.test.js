import React from 'react';
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Index from './index';
import store from '../store';

test('check name form', () => {
  const { getByText, container } = render(
    <Provider store={store}>
      <Index />
    </Provider>
  );

  const addItemButton = getByText(/Add item/i);
  const input = container.querySelector('input');

  fireEvent.change(input, { target: { value: 'mocked input value' } })
  fireEvent.click(addItemButton);

  expect(input.value).toBe('');

  expect(container).toHaveTextContent('mocked input value');

  const removeButton = getByText(/remove/i);
  fireEvent.click(removeButton);

  expect(container).not.toHaveTextContent('mocked input value');

  const h1 = container.querySelector('h1');
  expect(h1).toHaveTextContent('Index');
});
