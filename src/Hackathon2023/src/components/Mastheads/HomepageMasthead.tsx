import { Text, RichText, Field, ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
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
    <div className="homepage-masthead">
      <div>
        <Text tag="h1" className="title" field={fields?.heading} />
        <RichText className="description" field={fields?.subheading} />
      </div>
      <div className="image">
        <Image field={{ value: { src: fields.image.value?.src } }} />
      </div>
    </div>
  );
};

export default withDatasourceRendering()<HomepageMastheadProps>(HomepageMasthead);
