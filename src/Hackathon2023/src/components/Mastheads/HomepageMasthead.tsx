import { Text, RichText, Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { withDatasourceRendering } from 'components/sxa-extensions/withDatasourceRendering';
import { ComponentProps } from 'lib/component-props';

type HomepageMastheadProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    copy: Field<string>;
    subheading: Field<string>;
    image: ImageField;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const HomepageMasthead = ({ fields }: HomepageMastheadProps): JSX.Element => {
  return (
    <div className="contentBlock">
      <Text tag="h2" className="contentTitle" field={fields?.heading} />

      <RichText className="contentDescription" field={fields?.subheading} />
    </div>
  );
};

export default withDatasourceRendering()<HomepageMastheadProps>(HomepageMasthead);
