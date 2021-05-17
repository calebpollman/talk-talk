import { render } from '@testing-library/react';

import SVGContainer from '..';

function TestChildren() {
  return null;
}

describe('SVGContainer', () => {
  it('renders as expected', () => {
    const { baseElement } = render(
      <SVGContainer>
        <TestChildren />
      </SVGContainer>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
