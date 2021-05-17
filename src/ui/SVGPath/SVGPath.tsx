import { SVGAttributes } from 'react';

interface SVGPathProps extends Omit<SVGAttributes<SVGPathElement>, 'children'> {}

function SVGPath(props: SVGPathProps) {
  return <path {...props} />;
}

export default SVGPath;
