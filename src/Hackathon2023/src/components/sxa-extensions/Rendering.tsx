import React from 'react';

type RenderingProps = {
  guid: string;
};

const Rendering = (props: RenderingProps): JSX.Element => React.createElement('AlertBanner', props);

export default Rendering;
