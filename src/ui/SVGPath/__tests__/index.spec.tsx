import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import SVGPath from '..';

const mockProps = {
  fill: '#fff',
  d: 'M462.6,193.8c-1.1,1.1-2.2,2.3-4.1,2.1c-2.3-0.1-4.5-0.7-6.1-2.2z',
};

// jest expects the svg path element to be wrapped in an svg
const TestWrapper = ({ children }: { children: ReactNode }) => <svg>{children}</svg>;

describe('SVGPath', () => {
  it('renders as expected', () => {
    const { baseElement } = render(
      <TestWrapper>
        <SVGPath {...mockProps} />
      </TestWrapper>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
