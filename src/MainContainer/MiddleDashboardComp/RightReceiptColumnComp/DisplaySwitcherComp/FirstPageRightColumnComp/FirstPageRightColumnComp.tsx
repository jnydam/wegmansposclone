import styles from './FirstPageRightColumnComp.module.css';
import barCodeImageGraphic from '../../../../../assets/BarCodeBagArrowComponent.svg';
import searchIcon from '../../../../../assets/searchicon.svg';
import jointPayNowLogoIcon from '../../../../../assets/JointPayNowLogoComponent.svg';
import { POSPageSelections } from '../../../MiddleDashboardComp';
import { ModalType } from '../../../../BlackBackdrop/BlackBackdrop';

interface FirstPageRightColumnCompProps {
  onItemLookupClick: (modalArg: ModalType) => void;
  onPageSwitch: (pageArg: POSPageSelections) => void;
}

const FirstPageRightColumnComp: React.FC<FirstPageRightColumnCompProps> = (
  props
) => {
  const { onPageSwitch, onItemLookupClick } = props;

  const handlePayNowButtonClick = () => {
    onPageSwitch('second');
  };
  return (
    <div className={styles.firstPageRightColumnContainer}>
      <img
        style={{
          height: '9rem',
          marginTop: '2rem',
        }}
        src={barCodeImageGraphic}
      ></img>
      <div className={styles.lowerButtonContainer}>
        <button
          onClick={() => onItemLookupClick('itemlookup')}
          className={styles.searchButtonStyle}
        >
          <img
            style={{
              height: '2.5rem',
            }}
            src={searchIcon}
          ></img>
          <span
            style={{
              marginLeft: '0.5rem',
              fontSize: '1.4rem',
            }}
            className={styles.buttonCommonText}
          >
            Item Lookup
          </span>
        </button>
        <button
          onClick={handlePayNowButtonClick}
          className={styles.payNowButtonStyle}
        >
          <img
            style={{
              height: '2.5rem',
            }}
            src={jointPayNowLogoIcon}
          ></img>
          <span
            style={{
              marginLeft: '1rem',
              fontSize: '1.4rem',
            }}
            className={styles.buttonCommonText}
          >
            Pay Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default FirstPageRightColumnComp;
