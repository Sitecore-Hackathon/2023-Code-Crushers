import { Field, ImageField, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
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
  <div
    className="alert-banner alert-dismissible fade show alert alert-primary d-flex gap-3 align-items-center p-5"
    role="alert"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
      viewBox="0 0 16 16"
      role="img"
      aria-label="Warning:"
    >
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
    <div>
      <Text tag="h2" className="title" field={props.fields.heading} />
      <RichText field={props.fields.copy} />
    </div>
    <button
      type="button"
      className="btn-close mx-5 my-2"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
);

export default AlertBanner;
