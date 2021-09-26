/** @jsx jsx */
import { jsx, Box, Container, Image, Flex} from 'theme-ui';
import {motion} from 'framer-motion';
import SectionHeading from 'components/section-heading';
import customer from 'assets/images/customer.png';
import { useInView } from 'react-intersection-observer';

const MotionFlex = motion(Flex, {
    forwardMotionProps: true
})
const OurCustomer = () => {
  const [ref, inView] = useInView();

  const variants = {
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 0, x: '-10vw'},
  }

  return (
      <Box as="section" sx={styles.section}>
        <Container>
          <MotionFlex
            variants={variants}
            sx={styles.contentWrapper}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ type: "spring", stiffness: 100 }}>
            <Flex as="figure" sx={styles.illustration}>
              <Image loading="lazy" src={customer} alt="customer" />
            </Flex>

            <Box sx={styles.rightContent}>
              <SectionHeading
                sx={styles.heading}
                title="Undangan Digital"
                description="Undangan digital adalah undangan yang dapat di akses menggunakan smartphone, tablet bahkan desktop atau laptop melalui jaringan internet. Sehingga undangan digital mempermudah mu untuk berbagi undangan ke relasi mu"
              />
            </Box>
          </MotionFlex>
        </Container>
      </Box>
  );
};

export default OurCustomer;

const styles = {
  section: {
    pt: [60, 60, 60, 60, 80, 9],
    pb: [30, 30, 6],
  },
  contentWrapper: {
    display: ['flex'],
    alignItems: ['center'],
    flexDirection: [
      'column-reverse',
      'column-reverse',
      'column-reverse',
      'row',
    ],
  },
  illustration: {
    alignItems: ['flex-start'],
    maxWidth: ['none', 'none', 'none', 'none', 480, 530, 760],
    m: ['50px 0 0', '50px 0 0', '50px 0 0', 0, '0 20px 0 0', '0 48px 0 0'],
  },
  rightContent: {
    m: [0, 0, 0, 0, '0px 48px 0px 0px', '0px 95px 0px 0px'],
  },
  heading: {
    textAlign: ['center', 'center', 'center', 'left'],
    marginLeft: 0,
    maxWidth: 580,
    m: ['0 auto 27px', '0 auto 27px', '0 auto 27px', '0 0 30px'],
    h2: {
      fontSize: [22, 22, 22, 28, 30, 36, 46],
      lineHeight: [1.6, 1.6, 1.6, 1.41],
      fontWeight: [500, 500, 500, 400],
    },
    p: {
      fontSize: ['15px', '15px', '15px', '17px'],
      mt: [3, 3, 3, 20, 5],
    },
  },
  link: {
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
