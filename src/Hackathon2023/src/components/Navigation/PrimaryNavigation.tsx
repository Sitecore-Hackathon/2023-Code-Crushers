import { Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type PrimaryNavProps = ComponentProps & {
  fields: {
    logo: ImageField;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const PrimaryNavigation = ({ fields }: PrimaryNavProps): JSX.Element => (
  <div className="contentBlock">
    <Image className="contentDescription" src={fields.logo.value?.src} />
  </div>
);

export default PrimaryNavigation;
