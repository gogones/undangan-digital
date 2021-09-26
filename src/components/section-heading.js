/** @jsx jsx */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { jsx, Box, Heading, Text } from 'theme-ui';

const MotionBox = motion(Box, {
    forwardMotionProps: true
});

const variants = {
  hidden: {opacity: 0},
  visible: {opacity: 1}
}

const SectionHeading = ({ slogan, title, description, ...props }) => {
  const [ref, inView] = useInView();

  return (
    <MotionBox
      ref={ref}
      sx={styles.headingWrapper}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      {...props}>
      {slogan && (
        <Text sx={styles.slogan} as="p">
          {slogan}
        </Text>
      )}
      <Heading sx={styles.title}>{title}</Heading>
      {description && (
        <Text sx={styles.description} as="p">
          {description}
        </Text>
      )}
    </MotionBox>
  );
};

export default SectionHeading;

const styles = {
  headingWrapper: {
    maxWidth: 584,
    margin: '0 auto 60px',
    textAlign: 'center',
  },
  slogan: {
    color: (theme) => theme.colors.primary,
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 2.22,
    mb: ['12px'],
  },
  title: {
    fontSize: [21, , , 30],
    fontWeight: [500, 400],
    lineHeight: 1.68,
    letterSpacing: 'heading',
  },
  description: {
    fontSize: 17,
    lineHeight: 2.07,
    color: (theme) => theme.colors.text,
  },
};
