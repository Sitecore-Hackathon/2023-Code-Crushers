import {
  Text,
  RichText,
  Field,
  ImageField,
  LinkField,
  Image,
  Link,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type CallToActionProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    copy: Field<string>;
    image: ImageField;
    cta: LinkField;
  };
  variationParams: {
    imageAlignment: string;
  };
};

const _CallToAction = ({ fields, variationParams }: CallToActionProps): JSX.Element => (
  <div className={`call-to-action call-to-action--image-${variationParams.imageAlignment}`}>
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

const _Default = (props: CallToActionProps): JSX.Element => (
  <_CallToAction {...props} variationParams={{ imageAlignment: 'left' }} />
);

const _WithImageOnRight = (props: CallToActionProps): JSX.Element => (
  <_CallToAction {...props} variationParams={{ imageAlignment: 'right' }} />
);

export const Default = withDatasourceCheck()<CallToActionProps>(_Default);
export const WithImageOnRight = withDatasourceCheck()<CallToActionProps>(_WithImageOnRight);
