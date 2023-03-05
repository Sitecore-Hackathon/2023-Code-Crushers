import {
  Text,
  RichText,
  Field,
  ImageField,
  Image as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type AlertBannerProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    copy: Field<string>;
    icon: ImageField;
  };
};

const AlertBanner = (props: AlertBannerProps): JSX.Element => {
  return (
    <div className="alert alert-danger alert-dismissible fade show alert-banner p-5" role="alert">
      <Text tag="h2" className="contentTitle" field={{ value: props.fields.heading.value }} />
      <RichText
        className="contentDescription"
        field={{
          value:
            '<strong>Holy guacamole!</strong> You should check in on some of those fields below.',
        }}
      />
      <button
        type="button"
        className="btn-close mx-5 my-2"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
      <JssImage field={{ value: { src: 'sc_logo.svg' } }} />
    </div>
  );
};

// export default withDatasourceCheck()<AlertBannerProps>(AlertBanner);
export default AlertBanner;
