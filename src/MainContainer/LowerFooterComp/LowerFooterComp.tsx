import styles from './LowerFooterComp.module.css';
import accessibilityLogo from '../../assets/handicapsymbol.svg';
import useOwnBagLogoIcon from '../../assets/WhiteBagReusable.svg';
import exclamationPointLogoIcon from '../../assets/ExclamationSymbol.svg';
import optionsVectorImage from '../../assets/optionsvector.svg';
import { ModalType } from '../BlackBackdrop/BlackBackdrop';
import RightPoundBoxTextEntryComp from './RightPoundBoxTextEntryComp/RightPoundBoxTextEntryComp';

interface LowerFooterCompProps {
  isMobile: boolean;
  onButtonClick: (modalArg: ModalType) => void;
}

const LowerFooterComp: React.FC<LowerFooterCompProps> = (props) => {
  const { isMobile, onButtonClick } = props;
  const handleUseOwnBagContainerClick = () => {
    onButtonClick('useownbag');
  };

  const handleAccessibilityButtonClick = () => {
    onButtonClick('accessibility');
  };

  const handleMoreOptionsClick = () => {
    onButtonClick('moreoptions');
  };

  const handleRequestHelpContainerClick = () => {
    onButtonClick('requesthelp');
  };
  return !isMobile ? (
    <div className={styles.lowerFooterStyle}>
      <div className={styles.leftBoxesContainer}>
        <div
          style={{
            marginLeft: '0.7rem',
          }}
          className={styles.poundBoxStyle}
        >
          <span>0.00</span>
        </div>
        <span
          style={{
            fontFamily: 'Helvetica',
            marginLeft: '0.7rem',
            marginRight: '0.7rem',
            fontSize: '1.5rem',
          }}
        >
          lb
        </span>
        <div className={styles.poundSchemaBoxStyle}>
          <RightPoundBoxTextEntryComp
            leftText='d = 0.01 lb'
            rightText='e = 0.01 lb'
          ></RightPoundBoxTextEntryComp>
          <RightPoundBoxTextEntryComp
            leftText='Max = 30 lb'
            rightText='Min = 0.2 lb'
          ></RightPoundBoxTextEntryComp>
          <RightPoundBoxTextEntryComp
            leftText='Nmax = 3000d'
            rightText='Class III'
          ></RightPoundBoxTextEntryComp>
          <RightPoundBoxTextEntryComp
            leftText='+10C to +40C'
            rightText='CC 03-104'
          ></RightPoundBoxTextEntryComp>
        </div>
      </div>
      <button
        onClick={handleAccessibilityButtonClick}
        className={styles.accessibilityButton}
      >
        <img
          style={{
            height: '2.5rem',
            marginBottom: '0.4rem',
          }}
          src={accessibilityLogo}
        ></img>
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          Accessibility
        </span>
      </button>
      <div className={styles.rightButtonsContainer}>
        <button
          onClick={handleUseOwnBagContainerClick}
          className={styles.useOwnBagButtonStyle}
        >
          <img
            style={{
              height: '1.7rem',
              marginBottom: '0.5rem',
            }}
            src={useOwnBagLogoIcon}
          ></img>
          <span
            style={{
              fontWeight: 'bold',
            }}
          >
            Use my own bag
          </span>
        </button>
        <button
          onClick={handleRequestHelpContainerClick}
          className={styles.requestHelpButtonStyle}
        >
          <img
            style={{
              height: '1.7rem',
              marginBottom: '0.5rem',
            }}
            src={exclamationPointLogoIcon}
          ></img>
          <span
            style={{
              fontWeight: 'bold',
            }}
          >
            Request Help
          </span>
        </button>
      </div>
    </div>
  ) : (
    <div className={styles.lowerFooterMobileStyle}>
      <div
        onClick={handleMoreOptionsClick}
        className={styles.moreOptionsClickContainer}
      >
        <img
          style={{
            height: '1.5rem',
            marginRight: '1rem',
          }}
          src={optionsVectorImage}
        ></img>
        <span
          style={{
            fontWeight: 'bold',
            fontSize: 'inherit',
          }}
        >
          More Options
        </span>
      </div>
    </div>
  );
};

export default LowerFooterComp;
