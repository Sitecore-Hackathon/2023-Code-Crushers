import { Text, RichText, Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

type SCurveProps = {
  heading: Field<string>;
  copy: Field<string>;
  image: ImageField;
  cta: LinkField;
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const SCurve = (props: SCurveProps): JSX.Element => (
  <div className="contentBlock">
    <Text tag="h2" className="contentTitle" field={props.heading} />

    <RichText className="contentDescription" field={props.copy} />
  </div>
);

export default SCurve;
