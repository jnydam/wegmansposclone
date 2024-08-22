import styles from './BlackBackdrop.module.css';
import GenericModalComp from './Modals/GenericModalComp/GenericModalComp';
import { MobileOptionButtonType } from './Modals/GenericModalComp/OptionsButtonComp/OptionsButtonComp';

export type ModalType =
  | 'accessibility'
  | 'useownbag'
  | 'requesthelp'
  | 'itemlookup'
  | 'moreoptions'
  | '';

interface BlackBackdropProps {
  modalOpenToggle: ModalType;
  onMobileOptionClick: (modalArg: MobileOptionButtonType) => void;
  onCloseAction: () => void;
}

const BlackBackdrop: React.FC<BlackBackdropProps> = (props) => {
  const { modalOpenToggle, onCloseAction, onMobileOptionClick } = props;
  return (
    <div className={styles.blackBackdropContainer}>
      <GenericModalComp
        onMobileOptionClick={onMobileOptionClick}
        onCloseAction={onCloseAction}
        modalType={modalOpenToggle}
      ></GenericModalComp>
    </div>
  );
};

export default BlackBackdrop;
