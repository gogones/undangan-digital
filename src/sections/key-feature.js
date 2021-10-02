/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/images/key-feature/performance.svg';
import Partnership from 'assets/images/key-feature/partnership.svg';
import Subscription from 'assets/images/key-feature/subscription.svg';
import Support from 'assets/images/key-feature/support.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Jangan khawatir undangan digital mu memiliki performa yang lambat',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Simple',
    title: 'Simple',
    text:
      'Simple, mudah dan tidak ribet',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Safe',
    title: 'Safe',
    text:
      'Data mu aman bersama kami',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Ada customer support yang siap membantu mu',
  },
];

const sectionVariants = {
  hidden: {opacity: 0, y: '50vh'},
  visible: {opacity: 1, y: 0},
}

export default function KeyFeature() {
  const [ref, inView] = useInView({threshold: 0.1});

  return (
    <motion.section
      id="feature"
      ref={ref}
      sx={{ variant: 'section.keyFeature' }}
      variants={sectionVariants}
      animate={inView ? "visible" : "hidden"}
      initial="hidden"
      transition={{ type: "spring", stiffness: 100 }}>
      <Container>
        <SectionHeader
          slogan="Mengapa memilih kami"
          title="Alasan memilih kami"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </motion.section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
