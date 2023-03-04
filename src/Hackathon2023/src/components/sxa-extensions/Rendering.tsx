import React, { useEffect, useState } from 'react';
import { componentFactory } from 'temp/componentFactory';
import { getDatasource } from './getDatasource';

type RenderingProps = {
  guid: string;
  componentName: string;
};

const Rendering = (props: RenderingProps): JSX.Element => {
  const [views, setViews] = useState([]);

  useEffect(() => {
    getStaticProps(props.guid).then((p) => {
      const Comp = componentFactory(props.componentName);
      setViews([<Comp {...p} />]);
    });
  }, []);

  return <>{<React.Suspense>{views}</React.Suspense>}</>;
};

const getStaticProps = async (guid: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, prefer-const
  let datasourceProps: any = await getDatasource(guid);
  return { fields: datasourceProps };
};

export default Rendering;
