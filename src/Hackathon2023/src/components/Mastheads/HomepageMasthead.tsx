import {
  Text,
  RichText,
  Field,
  ImageField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

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
const HomepageMasthead = (): JSX.Element => {
  const ctx = useSitecoreContext();
  const contextFields = ctx.sitecoreContext.route?.fields as HomepageMastheadProps;

  return (
    <div className="contentBlock">
      <Text tag="h2" className="contentTitle" field={contextFields?.heading} />

      <RichText className="contentDescription" field={contextFields?.subheading} />
    </div>
  );
};

export default HomepageMasthead;
