import { Image, ImageField, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeaderProps = ComponentProps & {
  fields: {
    logo: ImageField;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Header = ({ fields, rendering }: HeaderProps): JSX.Element => (
  <div className="header">
    <a href="/">
      <Image className="logo" field={{ value: { src: fields.logo?.value?.src } }} />
    </a>

    <div className="primary-nav-container">
      <Placeholder name="primary-nav" rendering={rendering} />
    </div>
  </div>
);

export default Header;
