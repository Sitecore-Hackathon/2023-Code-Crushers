import { Text, RichText, Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

type HomepageMastheadProps = {
  heading: Field<string>;
  copy: Field<string>;
  subheading: Field<string>;
  image: ImageField;
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const HomepageMasthead = (props: HomepageMastheadProps): JSX.Element => (
  <div className="contentBlock">
    <Text tag="h2" className="contentTitle" field={props.heading} />

    <RichText className="contentDescription" field={props.copy} />
  </div>
);

export default HomepageMasthead;
