/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { rgba } from 'polished';
import {contactPerson} from "../config/contactPerson";
import {templatePesan} from "../config/templatePesan";

const Subscription = () => {
  return (
    <Box as="section" id="contact" sx={styles.section}>
      <Container>
        <Box sx={styles.content}>
          <SectionHeading
            sx={styles.heading}
            title="Ingin membuat undangan mu atau ada yang ingin ditanyakan, jangan ragu untuk hubungi kami"
            description=""
          />

          <a href={`https://wa.me/${contactPerson.nomor}?text=${templatePesan().unknown}`} style={{textDecoration: 'none'}}>
            <Button variant="white">Hubungi kami</Button>
          </a>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscription;

const styles = {
  section: {
    backgroundColor: '#FF8099',
    pt: '60px',
    pb: '70px',
  },
  heading: {
    color: '#fff',
    mb: [30, 30, 50],
    h2: {
      fontSize: [22, 28, '36px'],
      lineHeight: 1.4,
      letterSpacing: 'heading',
    },
    p: {
      lineHeight: [2, 3.12],
      mt: [20, 0],
      letterSpacing: 'heading',
      color: rgba('#fff', 0.6),
    },
  },
  content: {
    maxWidth: '555px',
    margin: '0 auto',
    textAlign: 'center',
  },
  form: {
    alignItems: 'center',
    display: ['block', 'flex'],
    input: {
      backgroundColor: rgba('#fff', 0.08),
      borderRadius: '5px',
      borderColor: 'transparent',
      color: rgba('#fff', 0.8),
      flexGrow: 1,
      fontFamily: 'body',
      height: 'auto',
      px: '30px',
      py: '0',
      minHeight: [50, 50, 60],
      width: ['100%', 'auto'],
      '::placeholder': {
        color: rgba('#fff', 0.8),
      },
    },
    button: {
      backgroundColor: '#fff',
      color: '#FF8099',
      minHeight: [50, 50, 60],
      fontSize: [14, 16],
      padding: '0 30px',
      whiteSpace: 'nowrap',
      width: ['100%', 'auto'],
      ml: [0, 3],
      mt: [4, 0],
      ':hover': {
        backgroundColor: '#fff',
        color: '#FF8099',
      },
    },
  },
};
