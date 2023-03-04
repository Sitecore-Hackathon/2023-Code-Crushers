import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type AlertBannerProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    copy: Field<string>;
    icon: ImageField;
  };
  test: string;
};
const AlertBanner = (props: AlertBannerProps): JSX.Element => (
  <div className="contentBlock">{props.fields.heading?.value}</div>
);

export default AlertBanner;
