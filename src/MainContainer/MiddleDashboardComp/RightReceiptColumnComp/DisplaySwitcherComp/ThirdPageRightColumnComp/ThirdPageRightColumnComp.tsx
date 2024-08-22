import styles from './ThirdPageRightColumnComp.module.css';
import doubleBagWegmanGroupPic from '../../../../../assets/DoubleBagWegmanGroup.svg';
import blueEllispeGraphic from '../../../../../assets/blueEllipse.svg';
import BlueBagButtonComp from './BlueBagButtonComp/BlueBagButtonComp';
import { POSPageSelections } from '../../../MiddleDashboardComp';

interface ThirdPageRightColumnCompProps {
  onPageSwitch: (pageArg: POSPageSelections) => void;
}

const ThirdPageRightColumnComp: React.FC<ThirdPageRightColumnCompProps> = (
  props
) => {
  const { onPageSwitch } = props;

  const handleNoBagsButtonClick = () => {
    onPageSwitch('first');
  };
  return (
    <div className={styles.thirdPageColumnCompContainer}>
      <div className={styles.upperPictureLabelContentContainer}>
        <span
          style={{
            marginTop: '1rem',
          }}
        >
          How many store paper bags did
        </span>
        <span>you use today?</span>
        <img
          style={{
            marginTop: '1.5rem',
          }}
          src={doubleBagWegmanGroupPic}
        ></img>
        <span
          style={{
            marginTop: '1rem',
          }}
        >
          There is a charge for each bag
        </span>
      </div>
      <div className={styles.lowerBagButtonSection}>
        <div
          onClick={handleNoBagsButtonClick}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '4.5rem',
            width: '14rem',
            // backgroundColor: 'orange',
          }}
        >
          <img
            style={{
              cursor: 'pointer',
              position: 'absolute',
              // transform: 'scale(1.5)',
              //   backgroundColor: 'green',
              height: '4.5rem',
            }}
            src={blueEllispeGraphic}
          ></img>
          <span
            style={{
              position: 'absolute',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1.7rem',
              fontWeight: 'normal',
            }}
          >
            No Bags
          </span>
        </div>
        <div
          style={{
            marginTop: '0.5rem',
          }}
          className={styles.blueButtonBagRowContainer}
        >
          <BlueBagButtonComp
            onClick={() => onPageSwitch('first')}
            isFirst
            buttonText='1'
          ></BlueBagButtonComp>
          <BlueBagButtonComp
            onClick={() => onPageSwitch('first')}
            buttonText='2'
          ></BlueBagButtonComp>
        </div>
        <div
          style={{
            marginTop: '0.5rem',
          }}
          className={styles.blueButtonBagRowContainer}
        >
          <BlueBagButtonComp
            onClick={() => onPageSwitch('first')}
            isFirst
            buttonText='3'
          ></BlueBagButtonComp>
          <BlueBagButtonComp
            onClick={() => onPageSwitch('first')}
            buttonText='4'
          ></BlueBagButtonComp>
        </div>
        <div
          style={{
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
          }}
          className={styles.blueButtonBagRowContainer}
        >
          <BlueBagButtonComp
            onClick={() => onPageSwitch('first')}
            isFirst
            buttonText='5'
          ></BlueBagButtonComp>
          <BlueBagButtonComp
            onClick={() => onPageSwitch('first')}
            buttonText='More'
          ></BlueBagButtonComp>
        </div>
      </div>
    </div>
  );
};

export default ThirdPageRightColumnComp;
