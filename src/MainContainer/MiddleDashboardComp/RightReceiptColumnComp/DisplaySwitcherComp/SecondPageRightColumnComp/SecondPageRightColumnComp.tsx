import { POSPageSelections } from '../../../MiddleDashboardComp';
import GreenButtonComp from './GreenButtonComp/GreenButtonComp';
import styles from './SecondPageRightColumnComp.module.css';
import whiteArrowGraphic from '../../../../../assets/whitearrowextract.svg';
import creditDebitGraphic from '../../../../../assets/JointCardGroupSVG.svg';
import giftCardGraphic from '../../../../../assets/GiftCardComponent.svg';
import couponDollarGraphic from '../../../../../assets/CouponDollarComponent.svg';
import redArrowGraphic from '../../../../../assets/RedArrowExtract.svg';

interface SecondPageRightColumnCompProps {
  onPageSwitch: (pageArg: POSPageSelections) => void;
}

const SecondPageRightColumnComp: React.FC<SecondPageRightColumnCompProps> = (
  props
) => {
  const { onPageSwitch } = props;

  const handleContinueScanningClick = () => {
    onPageSwitch('first');
  };
  return (
    <div className={styles.secondPageRightColumnContainer}>
      <div className={styles.paymentOptionsBoxContainer}>
        <span
          style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
          }}
        >
          Payment
        </span>
        <span
          style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
          }}
        >
          Options
        </span>
        <img
          style={{
            marginTop: '1rem',
            marginBottom: '1.5rem',
          }}
          src={redArrowGraphic}
        ></img>
      </div>
      <div className={styles.lowerButtonOptionsContainer}>
        <div className={styles.buttonRowContainer}>
          <GreenButtonComp
            onPageSwitch={() => onPageSwitch('third')}
            imageHeight='3.5rem'
            textInput={'Credit/Debit'}
            imageInput={creditDebitGraphic}
            isFirst
          ></GreenButtonComp>
          <GreenButtonComp
            onPageSwitch={() => onPageSwitch('third')}
            imageHeight='3.5rem'
            imageInput={giftCardGraphic}
            textInput={'Gift Card'}
          ></GreenButtonComp>
        </div>
        <div
          style={{
            marginTop: '0.3rem',
          }}
          className={styles.buttonRowContainer}
        >
          <GreenButtonComp
            onPageSwitch={() => onPageSwitch('third')}
            imageHeight='3.5rem'
            imageInput={couponDollarGraphic}
            textInput={'Coupons'}
            isFirst
          ></GreenButtonComp>
          <GreenButtonComp
            onPageSwitch={() => onPageSwitch('third')}
            imageHeight='1.7rem'
            hasArrow
            textInput='Other Payment'
            imageInput={whiteArrowGraphic}
          ></GreenButtonComp>
        </div>
        <button
          onClick={handleContinueScanningClick}
          className={styles.continueScanningButtonStyle}
        >
          <img
            style={{
              height: '1.2rem',
              marginRight: '0.2rem',
              transform: 'rotate(90deg)',
            }}
            src={whiteArrowGraphic}
          ></img>
          <span
            style={{
              fontWeight: 'bold',
            }}
          >
            Continue Scanning
          </span>
        </button>
      </div>
    </div>
  );
};

export default SecondPageRightColumnComp;
