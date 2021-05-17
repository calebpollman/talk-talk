import { useMemo } from 'react';

import Box from 'ui/Box';
import SVGPath from 'ui/SVGPath';
import SVGContainer from 'ui/SVGContainer';
import { data } from 'data/sample';

import 'assets/style/base.css';

// this is derived from the current sample data
const TEMP_VIEW_BOX = '0 0 462.6 248.3';

function App() {
  const svgPaths = useMemo(() => data.map(SVGPath), []);

  return (
    <Box variant="app">
      <SVGContainer viewBox={TEMP_VIEW_BOX}>{svgPaths}</SVGContainer>
    </Box>
  );
}

export default App;
