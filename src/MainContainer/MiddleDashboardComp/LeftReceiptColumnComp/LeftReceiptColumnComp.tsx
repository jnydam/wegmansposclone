import { useState } from 'react';
import { sampleReceiptData, ReceiptData } from './ReceiptData';
import styles from './LeftReceiptColumnComp.module.css';
import ReceiptHorizEntryComp from './ReceiptHorizEntryComp/ReceiptHorizEntryComp';
import TaxTotalBottomComp from './TaxTotalBottomComp/TaxTotalBottomComp';

interface LeftReceiptColumnCompProps {
  isMobile: boolean;
  currentPOSPage: string;
}

const LeftReceiptColumnComp: React.FC<LeftReceiptColumnCompProps> = (props) => {
  const { isMobile, currentPOSPage } = props;

  const [mouseOverArea, setMouseOverArea] = useState(false);
  const [listIterator, setListIterator] = useState(0);
  const [totalValue, setTotalValue] = useState(3.176875);
  const [subTotalValue, setSubTotalValue] = useState(2.99);
  const [taxValue, setTaxValue] = useState(0.186875);

  const [receiptDataList, setReceiptDataList] = useState<ReceiptData[]>([
    {
      id: 'FC',
      price: '2.99 F',
      productName: 'SLATE MOCHA LATTE',
    },
  ]);

  const handleMouseOverTopArea = () => {
    setMouseOverArea(true);
  };
  const handleMouseLeaveTopArea = () => {
    setMouseOverArea(false);
  };

  const handleAddButtonClick = () => {
    const newIteration = listIterator + 1;
    const currentListState = receiptDataList;
    const newReceiptEntry = sampleReceiptData[newIteration];

    const newSubtotal: number =
      subTotalValue + parseFloat(newReceiptEntry.price.split(' ')[0]);

    const newTax = newSubtotal * 0.0625;

    const newTotal = newSubtotal + newTax;

    if (sampleReceiptData.length - 1 >= newIteration) {
      setReceiptDataList([...currentListState, newReceiptEntry]);
      setTotalValue(newTotal);
      setTaxValue(newTax);
      setSubTotalValue(newSubtotal);
      setListIterator(newIteration);
    }
  };

  const handleRemoveButtonClick = () => {
    const currentIteration = listIterator;
    const currentListState = receiptDataList;
    const newReceiptEntry = sampleReceiptData[currentIteration];

    const newSubtotal: number =
      subTotalValue - parseFloat(newReceiptEntry.price.split(' ')[0]);

    const newTax = newSubtotal * 0.0625;

    const newTotal = newSubtotal + newTax;

    const newIteration = currentIteration - 1;

    if (sampleReceiptData.length - 1 >= newIteration && newIteration >= 0) {
      currentListState.pop();
      setReceiptDataList([...currentListState]);
      setTotalValue(newTotal);
      setTaxValue(newTax);
      setSubTotalValue(newSubtotal);
      setListIterator(newIteration);
    }
  };

  const determineMinHeightValue = () => {
    if (isMobile) {
      return '30rem';
    } else if (!isMobile && currentPOSPage === 'first') {
      return '32rem';
    } else {
      return '39rem';
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Roboto Mono',
        minHeight: determineMinHeightValue(),
        width: isMobile ? '100%' : '50%',
      }}
      className={styles.leftReceiptColumnContainer}
    >
      <div className={styles.upperRowContainerContent}>
        {(mouseOverArea || isMobile) && (
          <div
            onMouseLeave={handleMouseLeaveTopArea}
            className={styles.buttonAddRemoveContainer}
          >
            <button
              onClick={handleAddButtonClick}
              className={styles.addRemoveButtonStyle}
            >
              <span>Add</span>
            </button>
            <button
              onClick={handleRemoveButtonClick}
              style={{
                marginLeft: '1rem',
              }}
              className={styles.addRemoveButtonStyle}
            >
              <span>Remove</span>
            </button>
          </div>
        )}
        {!mouseOverArea && !isMobile && (
          <div
            onMouseOver={handleMouseOverTopArea}
            onMouseLeave={handleMouseLeaveTopArea}
            className={styles.topAreaHoverContentContainer}
          >
            <span className={styles.hoverTextPlaceholder}>
              Hover Over to Add
            </span>
            <span className={styles.hoverTextPlaceholder}>
              Or Remove Products
            </span>
          </div>
        )}
      </div>
      <div className={styles.lowerWhiteReceiptPaper}>
        <div className={styles.upperReceiptDisplayContent}>
          <span
            style={{
              marginTop: '1rem',
            }}
          >
            53 THIRD AVE
          </span>
          <span>BURLINGTON, MA 01803</span>
          <span>(781) 418-0700</span>
        </div>
        <div className={styles.lowerReceiptDisplayContent}>
          {receiptDataList &&
            receiptDataList.map((receiptEntryData, index) => (
              <ReceiptHorizEntryComp
                isFirst={index === 0}
                isLast={index === receiptDataList.length - 1}
                {...receiptEntryData}
                key={index}
              ></ReceiptHorizEntryComp>
            ))}
          <TaxTotalBottomComp
            currentTaxValue={taxValue}
            currentTotalValue={totalValue}
          ></TaxTotalBottomComp>
        </div>
      </div>
    </div>
  );
};

export default LeftReceiptColumnComp;
