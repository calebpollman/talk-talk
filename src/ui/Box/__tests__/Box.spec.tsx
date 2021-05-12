import React from 'react';
import { render } from '@testing-library/react';

import Box, { BoxProps } from '..';

function TestChildren() {
  return null;
}

describe('Box', () => {
  it.each(['app', 'container'] as BoxProps['variant'][])('renders %s variant as expected', (variant) => {
    expect(
      render(
        <Box variant={variant}>
          <TestChildren />
        </Box>
      ).baseElement
    ).toMatchSnapshot();
  });
});
