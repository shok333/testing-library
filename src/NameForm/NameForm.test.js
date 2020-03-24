import React from 'react';
import { render, fireEvent, getNodeText } from '@testing-library/react';
import NameForm from '.';

test('check name form', () => {
  const { getByText, container } = render(<NameForm />);
  const addNameButton = getByText(/Сохранить имя/i);

  fireEvent.change(container.querySelector('input'), { target: { value: 'mocked input value' } })
  fireEvent.click(addNameButton);

  const nameTextNodeFirstChild = getByText(/Сохраненное имя:/i);

  expect(getNodeText(nameTextNodeFirstChild.querySelector('span'))).toBe('mocked input value');
});
