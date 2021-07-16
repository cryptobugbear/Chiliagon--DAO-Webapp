import classes from './Footer.module.css';
import Section from '../Section';
import Noun from '../Shared/Noun';
import heartNoun from '../../assets/heart-noun.png';

const Footer = () => {
  const twitterURL = 'https://twitter.com/nounsdao';

  return (
    <Section bgColor="white" fullWidth={false}>
      <footer className={classes.footerSignature}>
        <a href={twitterURL} target="_blank">
          made with
          <img src={heartNoun} alt="heart noun" />
          by the nounders
        </a>
      </footer>
    </Section>
  );
};
export default Footer;
