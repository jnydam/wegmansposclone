import styles from './RightReceiptColumnComp.module.css';
import DisplaySwitcherComp from './DisplaySwitcherComp/DisplaySwitcherComp';
import { POSPageSelections } from '../MiddleDashboardComp';
import { ModalType } from '../../BlackBackdrop/BlackBackdrop';

interface RightReceiptColumnCompProps {
  isMobile: boolean;
  currentPOSPage: POSPageSelections;
  onItemLookupClick: (modalArg: ModalType) => void;
  onPageSwitch: (pageArg: POSPageSelections) => void;
}

const RightReceiptColumnComp: React.FC<RightReceiptColumnCompProps> = (
  props
) => {
  const { isMobile, currentPOSPage, onPageSwitch, onItemLookupClick } = props;

  const handlePageSwitch = (pageArg: POSPageSelections) => {
    onPageSwitch(pageArg);
  };

  const determineMinHeightValue = () => {
    if (currentPOSPage === 'first' && isMobile) {
      return '30rem';
    } else if (currentPOSPage === 'first' && !isMobile) {
      return '32rem';
    } else {
      return '39rem';
    }
  };

  return (
    <div
      style={{
        // minHeight: isMobile ? '30rem' : '40rem',
        minHeight: determineMinHeightValue(),
        width: isMobile ? '100%' : '50%',
        borderRadius: isMobile ? '0.3rem' : '0rem',
      }}
      className={styles.rightReceiptColumnContainer}
    >
      <DisplaySwitcherComp
        onItemLookupClick={onItemLookupClick}
        currentPOSPage={currentPOSPage}
        onPageSwitch={handlePageSwitch}
      ></DisplaySwitcherComp>
    </div>
  );
};

export default RightReceiptColumnComp;
