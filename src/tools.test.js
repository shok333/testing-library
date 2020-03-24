import { waitFor } from '@testing-library/react';
import {asyncFuncWithCallback} from './tools';

test ('check async function with callback', async function (done) {
  const testValue = 10;

  asyncFuncWithCallback(testValue, (answer) => {
    expect(answer).toBe(1000);
    done()
  })
})