import {
  Text,
  RichText,
  Field,
  ImageField,
  LinkField,
  Image,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type SCurveProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    copy: Field<string>;
    image: ImageField;
    cta: LinkField;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const SCurve = ({ fields }: SCurveProps): JSX.Element => (
  <div className="s-curve">
    <div className="content">
      <Text tag="h2" className="title" field={fields.heading} />
      <RichText className="description" field={fields.copy} />
      {fields.cta.value.href && <Link className="cta" field={fields.cta} />}
    </div>
    <div className="image-container">
      <Image field={fields.image} />
    </div>
  </div>
);

export default SCurve;
