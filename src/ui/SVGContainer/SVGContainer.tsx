import { ReactNode, SVGAttributes } from 'react';

interface SVGContainerProps extends Omit<SVGAttributes<SVGElement>, 'children' | 'height' | 'width'> {
  children: ReactNode;
}

const CONTAINER_DIMENSION = '96%';

function SVGContainer({ children, ...rest }: SVGContainerProps) {
  return (
    <svg {...rest} width={CONTAINER_DIMENSION} height={CONTAINER_DIMENSION}>
      {children}
    </svg>
  );
}

export default SVGContainer;
