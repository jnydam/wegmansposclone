import { ModalType } from '../../BlackBackdrop';
import styles from './GenericModalComp.module.css';
import closeIcon from '../../../../assets/closeicon.svg';
import OptionsButtonComp, {
  MobileOptionButtonType,
} from './OptionsButtonComp/OptionsButtonComp';

interface GenericModalCompProps {
  modalType: ModalType;
  onCloseAction: () => void;
  onMobileOptionClick: (modalArg: MobileOptionButtonType) => void;
}

const GenericModalComp: React.FC<GenericModalCompProps> = (props) => {
  const { modalType, onCloseAction, onMobileOptionClick } = props;

  const determineModalText = () => {
    if (modalType === 'accessibility') {
      return 'Accessibility';
    } else if (modalType === 'useownbag') {
      return 'Use My Own Bag';
    } else if (modalType === 'itemlookup') {
      return 'Item Lookup';
    } else if (modalType === 'requesthelp') {
      return 'Request Help';
    }
  };

  return (
    <div
      style={{
        height: modalType === 'moreoptions' ? '20rem' : '16rem',
      }}
      className={styles.genericModalContainer}
    >
      <div className={styles.headerContainer}>
        <img
          onClick={onCloseAction}
          style={{
            height: '2rem',
            marginRight: '0.5rem',
            cursor: 'pointer',
          }}
          src={closeIcon}
        ></img>
      </div>
      {modalType === 'moreoptions' ? (
        <div className={styles.moreOptionsContainer}>
          <span
            style={{
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            More Options
          </span>
          <OptionsButtonComp
            onMobileOptionClick={onMobileOptionClick}
            buttonType='accessibility'
          ></OptionsButtonComp>
          <OptionsButtonComp
            onMobileOptionClick={onMobileOptionClick}
            buttonType='useownbag'
          ></OptionsButtonComp>
          <OptionsButtonComp
            onMobileOptionClick={onMobileOptionClick}
            buttonType='requesthelp'
          ></OptionsButtonComp>
        </div>
      ) : (
        <span className={styles.modalTextStyle}>
          You clicked the {determineModalText()} icon!
        </span>
      )}
    </div>
  );
};

export default GenericModalComp;
