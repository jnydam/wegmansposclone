import { ModalType } from '../BlackBackdrop/BlackBackdrop';
import LeftReceiptColumnComp from './LeftReceiptColumnComp/LeftReceiptColumnComp';
import styles from './MiddleDashboardComp.module.css';
import RightReceiptColumnComp from './RightReceiptColumnComp/RightReceiptColumnComp';
import { useState } from 'react';

export type POSPageSelections = 'first' | 'second' | 'third';

interface MiddleDashboardCompProps {
  isMobile: boolean;
  onItemLookupClick: (modalArg: ModalType) => void;
}

const MiddleDashboardComp: React.FC<MiddleDashboardCompProps> = (props) => {
  const { isMobile, onItemLookupClick } = props;

  const [currentPOSPage, setCurrentPOSPage] =
    useState<POSPageSelections>('first');

  const handlePageSwitch = (pageArg: POSPageSelections) => {
    setCurrentPOSPage(pageArg);
  };

  const renderMobileArrangement = () => {
    return (
      <>
        <RightReceiptColumnComp
          onItemLookupClick={onItemLookupClick}
          onPageSwitch={handlePageSwitch}
          currentPOSPage={currentPOSPage}
          isMobile={isMobile}
        ></RightReceiptColumnComp>
        <LeftReceiptColumnComp
          currentPOSPage={currentPOSPage}
          isMobile={isMobile}
        ></LeftReceiptColumnComp>
      </>
    );
  };

  const renderDesktopArrangement = () => {
    return (
      <>
        <LeftReceiptColumnComp
          currentPOSPage={currentPOSPage}
          isMobile={isMobile}
        ></LeftReceiptColumnComp>
        <RightReceiptColumnComp
          onItemLookupClick={onItemLookupClick}
          onPageSwitch={handlePageSwitch}
          currentPOSPage={currentPOSPage}
          isMobile={isMobile}
        ></RightReceiptColumnComp>
      </>
    );
  };

  return (
    <div
      style={{
        flexDirection: isMobile ? 'column' : 'row',
      }}
      className={styles.middleDashboardStyle}
    >
      {isMobile ? renderMobileArrangement() : renderDesktopArrangement()}
    </div>
  );
};

export default MiddleDashboardComp;
