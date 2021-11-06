/** @jsxRuntime classic */
/** @jsx jsx */
import Slider from 'react-slick';
import { jsx, Box, Container } from 'theme-ui';
import { useMediaQuery } from 'react-responsive';
import PriceTable from 'components/cards/price-table';
import SectionHeading from 'components/section-heading';
import {pricingList} from "../config/pricingList";

const settings = {
  // slidesToShow: 3,
  // slidesToScroll: 1,
  arrows: false,
  dots: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        // fade: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        fade: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Pricing = () => {
  const isTablet = useMediaQuery({
    query: '(min-width: 1024px)',
  });
  return (
    <section id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 70] }}
          slogan="Paket"
          title="Pilih paket harga sesuai kebutuhan mu"
        />
        <Box sx={styles.grid}>
          {isTablet && (
            <ul as="ul" sx={styles.features}>
              <li>Alamat Website</li>
              <li>Quotes & Musik</li>
              <li>Detail Acara</li>
              <li>Maps</li>
              <li>Amplop Digital</li>
              <li>Gallery Foto & Video</li>
              <li>Countdown Acara</li>
              <li>Love Story</li>
              <li>Kehadiran Tamu</li>
              <li>Doa & Harapan</li>
              <li>Special Invite Link</li>
              <li>Checkin w/ QR COde</li>
            </ul>
          )}

          <Slider sx={styles.priceGroup} {...settings}>
            {pricingList.map((price) => (
              <PriceTable key={price.id} data={price} />
            ))}
          </Slider>
        </Box>
      </Container>
    </section>
  );
};

export default Pricing;

const styles = {
  section: {
    pt: [6, null, 0, null, 10, 14],
    pb: [8, null, null, null, 10, 100],
  },
  grid: {
    maxWidth: 1133,
    display: [null, null, null, null, 'grid'],
    alignItems: [null, null, null, null, 'center'],
    justifyContent: [null, null, null, null, 'center'],
    gridTemplateColumns: [null, null, null, null, '183px 1fr'],
    mx: 'auto',
    '.slick-list': {
      paddingTop: ['31px', null, null, null, 0],
    },
    '.slick-dots': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex !important',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
      li: {
        display: 'flex',
      },
      button: {
        backgroundColor: '#CED7E1',
        border: 0,
        outline: 0,
        padding: 0,
        margin: '0 3.5px',
        width: 10,
        height: 10,
        borderRadius: '50%',
        overflow: 'hidden',
        textIndent: '-9999rem',
        transition: 'all 0.3s ease-in-out 0s',
      },
      '.slick-active button': {
        backgroundColor: 'heading',
        width: 13,
        height: 13,
      },
    },
  },
  priceGroup: {
    gap: 2,
    alignItems: 'flex-end',
    display: [null, null, null, null, 'grid'],
    gridTemplateColumns: [null, null, null, null, 'repeat(5, 1fr)'],
  },
  features: {
    pl: 0,
    transform: [
      null,
      null,
      null,
      null,
      'translateY(15px)',
      'translateY(59px)',
    ],
    li: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 500,
      minHeight: [null, null, null, null, 50, 59],
      '+ li': {
        borderTop: (t) => `1px solid ${t.colors.border_color}`,
      },
    },
  },
};
