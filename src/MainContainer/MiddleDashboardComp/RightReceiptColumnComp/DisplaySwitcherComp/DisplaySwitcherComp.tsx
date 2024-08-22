import { ModalType } from '../../../BlackBackdrop/BlackBackdrop';
import { POSPageSelections } from '../../MiddleDashboardComp';
import FirstPageRightColumnComp from './FirstPageRightColumnComp/FirstPageRightColumnComp';
import SecondPageRightColumnComp from './SecondPageRightColumnComp/SecondPageRightColumnComp';
import ThirdPageRightColumnComp from './ThirdPageRightColumnComp/ThirdPageRightColumnComp';

interface DisplaySwitcherCompProps {
  currentPOSPage: POSPageSelections;
  onItemLookupClick: (modalArg: ModalType) => void;
  onPageSwitch: (pageArg: POSPageSelections) => void;
}

const DisplaySwitcherComp: React.FC<DisplaySwitcherCompProps> = (props) => {
  const { currentPOSPage, onPageSwitch, onItemLookupClick } = props;

  const handlePageSwitch = (pageArg: POSPageSelections) => {
    onPageSwitch(pageArg);
  };

  return (
    <>
      {currentPOSPage === 'first' && (
        <FirstPageRightColumnComp
          onItemLookupClick={onItemLookupClick}
          onPageSwitch={handlePageSwitch}
        ></FirstPageRightColumnComp>
      )}
      {currentPOSPage === 'second' && (
        <SecondPageRightColumnComp
          onPageSwitch={handlePageSwitch}
        ></SecondPageRightColumnComp>
      )}
      {currentPOSPage === 'third' && (
        <ThirdPageRightColumnComp
          onPageSwitch={handlePageSwitch}
        ></ThirdPageRightColumnComp>
      )}
    </>
  );
};

export default DisplaySwitcherComp;
