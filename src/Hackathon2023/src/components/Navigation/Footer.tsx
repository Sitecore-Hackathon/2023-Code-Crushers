import { Text, Field, ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';

type FooterProps = {
  copyright: Field<string>;
  logo: ImageField;
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Footer = (props: FooterProps): JSX.Element => (
  <div className="contentBlock">
    <Text tag="h2" className="contentTitle" field={props.copyright} />

    <Image className="contentDescription" src={props.logo.value?.src} />
  </div>
);

export default Footer;
