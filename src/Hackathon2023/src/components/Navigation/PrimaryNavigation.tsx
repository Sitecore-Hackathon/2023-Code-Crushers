import { Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
type PrimaryNavProps = {
  logo: ImageField;
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const PrimaryNavigation = (props: PrimaryNavProps): JSX.Element => (
  <div className="contentBlock">
    <Image className="contentDescription" src={props.logo.value?.src} />
  </div>
);

export default PrimaryNavigation;
