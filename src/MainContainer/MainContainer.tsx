import BlackBackdrop, { ModalType } from './BlackBackdrop/BlackBackdrop';
import { MobileOptionButtonType } from './BlackBackdrop/Modals/GenericModalComp/OptionsButtonComp/OptionsButtonComp';
import LowerFooterComp from './LowerFooterComp/LowerFooterComp';
import styles from './MainContainer.module.css';
import MiddleDashboardComp from './MiddleDashboardComp/MiddleDashboardComp';
import UpperHeaderComp from './UpperHeaderComp/UpperHeaderComp';
import { useEffect, useState } from 'react';

const MainContainer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [modalOpenToggle, setModalOpenToggle] = useState<ModalType>('');

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 850px)');

    if (window.innerWidth <= 850) {
      setIsMobile(true);
    }

    const mediaQueryChangeHandler = () => {
      if (mobileMediaQuery.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    mobileMediaQuery.addEventListener('change', mediaQueryChangeHandler);

    return () => {
      mobileMediaQuery.removeEventListener('change', mediaQueryChangeHandler);
    };
  }, []);

  const handleModalButtonClick = (modalArg: ModalType) => {
    setModalOpenToggle(modalArg);
  };

  const handleModalClose = () => {
    setModalOpenToggle('');
  };

  const handleModalChange = (modalArg: MobileOptionButtonType) => {
    setModalOpenToggle(modalArg as ModalType);
  };
  return (
    <div className={styles.mainContainerStyle}>
      <UpperHeaderComp isMobile={isMobile}></UpperHeaderComp>
      <MiddleDashboardComp
        onItemLookupClick={handleModalButtonClick}
        isMobile={isMobile}
      ></MiddleDashboardComp>
      <LowerFooterComp
        onButtonClick={handleModalButtonClick}
        isMobile={isMobile}
      ></LowerFooterComp>
      {modalOpenToggle && (
        <BlackBackdrop
          onMobileOptionClick={handleModalChange}
          onCloseAction={handleModalClose}
          modalOpenToggle={modalOpenToggle}
        ></BlackBackdrop>
      )}
    </div>
  );
};

export default MainContainer;
