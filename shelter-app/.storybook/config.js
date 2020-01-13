import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react'; // <- or your view layer
import { withTests } from '@storybook/addon-jest';

// import results from '../jest-test-results.json';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addDecorator(
  withTests({
    // results
  })
);
