import { render } from '@testing-library/react';

import Box, { BoxProps } from '..';

function TestChildren() {
  return null;
}

describe('Box', () => {
  it.each(['app', 'container'] as BoxProps['variant'][])('renders %s variant as expected', (variant) => {
    const { baseElement } = render(
      <Box variant={variant}>
        <TestChildren />
      </Box>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it.todo('renders the container variant as the default');
});
