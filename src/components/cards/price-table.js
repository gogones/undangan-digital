/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Button } from 'theme-ui';
import { IoMdCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { rgba } from 'polished';
import {contactPerson} from "../../config/contactPerson";
import {templatePesan} from "../../config/templatePesan";

const FeatureIcon = ({ value, number }) => {

  if (number) {
    return <div>{value}</div>
  }
  return value ? (
    <IoMdCheckmarkCircle size="23px" color="#3CC68A" />
  ) : (
    <IoIosCloseCircle size="23px" color="#CED7E1" />
  );
};

const PriceTable = ({ data }) => {
  return (
    <div sx={styles.card} className={data.isRecommended ? 'recommended' : ''}>
      {data.isRecommended && <span sx={styles.recommended}>Recommended</span>}
      <div
        sx={styles.priceTable}
        className={data.isRecommended ? 'recommended' : ''}
      >
        <span sx={styles.title}>{data.title}</span>
        <span sx={styles.amount}>
          {data.harga}K
        </span>
        <Box as="ul" variant="styles.unStyled" sx={styles.features}>
          <li>
            <span>Alamat Website</span>
            <FeatureIcon value={data.website} />
          </li>
          <li>
            <span>Quotes & Musik</span>
            <FeatureIcon value={data.music} />
          </li>
          <li>
            <span>Detail Acara</span>
            <FeatureIcon value={data.detail} />
          </li>
          <li>
            <span>Maps</span>
            <FeatureIcon value={data.maps} />
          </li>
          <li>
            <span>Amplop Digital</span>
            <FeatureIcon value={data.amplop} />
          </li>
          <li>
            <span>Gallery</span>
            <FeatureIcon number={data.gallery} value={data.gallery} />
          </li>
          <li>
            <span>Countdown Acara</span>
            <FeatureIcon value={data.countdown} />
          </li>
          <li>
            <span>Love Story/ Share Moment</span>
            <FeatureIcon value={data.story} />
          </li>
          <li>
            <span>Kehadiran Tamu</span>
            <FeatureIcon value={data.spv} />
          </li>
          <li>
            <span>Do'a & Harapan</span>
            <FeatureIcon value={data.doa} />
          </li>
          <li>
            <span>Special Invite Link</span>
            <FeatureIcon number={data.inviteLink} value={data.inviteLink} />
          </li>
          <li>
            <span>Checkin QR Code</span>
            <FeatureIcon number={data.qr} value={data.qr} />
          </li>
        </Box>
        <a href={`https://wa.me/${contactPerson.nomor}?text=${templatePesan(data.id).tema}`}>
          <Button
            sx={styles.button}
            variant="primaryOutline"
            className={data.isRecommended ? 'recommended' : ''}
          >
            Pilih Paket
          </Button>
        </a>
      </div>
    </div>
  );
};

export default PriceTable;

const styles = {
  card: {
    position: 'relative',
    textAlign: 'center',
    '&.recommended': {
      borderColor: [null, null, null, null, 'white'],
      borderRadius: '0px 0px 10px 10px',
      boxShadow: [
        null,
        null,
        null,
        null,
        '0px 15px 50px rgba(91, 132, 193, 0.1)',
      ],
      priceTable: {
        borderRadius: '0 0 10px 10px',
      },
    },
    mx: [null, null, null, 3, 0],
  },
  priceTable: {
    border: (t) => `1px solid ${t.colors.border_color}`,
    borderRadius: 10,
    paddingTop: [4, null, null, null, 6],
    paddingBottom: [4, null, null, null, 6, 14],
    '&.recommended': {
      borderColor: [null, null, null, null, 'white'],
      borderRadius: '0 0 10px 10px',
    },
  },
  recommended: {
    backgroundColor: '#52ACFF',
    borderRadius: '8px 8px 0px 0px',
    color: 'white',
    fontSize: 1,
    fontWeight: 700,
    lineHeight: 1.29,
    position: 'absolute',
    width: '100%',
    minHeight: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: ['-30px', null, null, null, '-31px'],
    textTransform: 'uppercase',
  },
  title: {
    color: rgba('#0F2137', 0.5),
    display: 'block',
    fontWeight: 500,
    fontSize: [1, null, null, 2],
    lineHeight: 1.31,
    mb: [3, null, null, 5, 2, 5],
  },
  amount: {
    color: 'heading',
    display: 'block',
    fontWeight: 'bold',
    fontSize: [4, null, null, 7, 4, 6],
    lineHeight: [1.3, null, null, 1.71],
    letterSpacing: 'heading',
    small: {
      fontSize: [2, null, null, 4, 2, 4],
      fontWeight: 400,
    },
  },
  features: {
    my: [4, null, null, 8, 2, 4],
    li: {
      alignItems: 'center',
      borderTop: (t) => `1px solid ${t.colors.border_color}`,
      display: 'flex',
      color: ['heading', null, null, null, '#343D48'],
      fontSize: [1, null, null, null, 2],
      fontWeight: [500, null, null, null, 400],
      justifyContent: ['space-between', null, null, null, 'center'],
      px: [6, null, null, null, 0],
      minHeight: [null, null, null, null, 50, 59],
      pt: [3, null, null, null, 0],
      pb: [3, null, null, null, 0],

      '+ li': {
        position: 'relative',
        ':before': {
          content: `""`,
          backgroundColor: 'borderColor',
          height: '1px',
          width: '15px',
          position: 'absolute',
          top: '-1px',
          left: '-13px',
        },
      },

      ':first-of-type': {
        borderTop: 0,
        pt: 0,
      },
      ':last-of-type': {
        pb: 0,
      },
      span: {
        display: [null, null, null, null, 'none'],
      },
      svg: {
        height: 20,
        width: 20,
      },
    },
  },
  button: {
    minHeight: [30, null, null, 45, 40, 50],
    padding: ['0 20px', null, null, '0 40px', '0 20px', '0 40px'],
    fontSize: [1, null, null, 2, 1, 2],
    '.recommended': {
      backgroundColor: 'secondary',
      color: 'white',
      ':hover': {
        backgroundColor: 'dark',
      },
    },
  },
  trial: {
    display: 'block',
    color: rgba('#0F2137', 0.5),
    fontSize: ['13px', null, null, '15px'],
    lineHeight: 1.33,
    mt: [3, null, null, 5],
  },
};
