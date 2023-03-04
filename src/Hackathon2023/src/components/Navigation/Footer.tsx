import { Text, Field, ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FooterProps = ComponentProps & {
  fields: {
    copyright: Field<string>;
    logo: ImageField;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Footer = ({ fields }: FooterProps): JSX.Element => (
  <div className="contentBlock">
    <Text tag="h2" className="contentTitle" field={fields.copyright} />

    <Image className="contentDescription" src={fields.logo?.value?.src} />
  </div>
);

export default Footer;
