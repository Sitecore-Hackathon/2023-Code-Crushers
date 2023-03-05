import { Text, Field, ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FooterProps = ComponentProps & {
  fields: {
    copyright: Field<string>;
    logo: ImageField;
  };
};

const Footer = ({ fields }: FooterProps): JSX.Element => (
  <div className="footer">
    <div className="content">
      <Image className="logo" field={{ value: { src: fields.logo?.value?.src } }} />
      <Text tag="p" className="copyright" field={fields.copyright} />
    </div>
  </div>
);

export default Footer;
