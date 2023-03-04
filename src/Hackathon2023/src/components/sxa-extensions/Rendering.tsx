import React, { useEffect, useState } from 'react';
import { componentFactory } from 'temp/componentFactory';
import { getDatasource } from './getDatasource';

type RenderingProps = {
  datasourceID?: string;
  componentName: string;
};

const Rendering = (props: RenderingProps): JSX.Element => {
  const [views, setViews] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!props.datasourceID) return;
    getStaticProps(props.datasourceID).then((p) => {
      const Comp = componentFactory(props.componentName);
      setViews([<Comp {...p} key="first" />]);
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
