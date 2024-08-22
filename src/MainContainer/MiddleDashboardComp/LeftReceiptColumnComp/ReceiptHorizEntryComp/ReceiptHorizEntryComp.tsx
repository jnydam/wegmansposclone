import styles from './ReceiptHorizEntryComp.module.css';

interface ReceiptHorizEntryCompProps {
  id: string;
  productName: string;
  price: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const ReceiptHorizEntryComp: React.FC<ReceiptHorizEntryCompProps> = (props) => {
  const { id, price, productName, isFirst, isLast } = props;
  return (
    <div
      style={{
        borderTop: isFirst ? '1px solid lightgray' : 'none',
        borderBottom: isLast ? '1px solid lightgray' : 'none',
      }}
      className={styles.receiptHorizEntryComp}
    >
      <div className={styles.innerTextContent}>
        <span>{id}</span>
        <div className={styles.productNameContainer}>
          <span>{productName}</span>
        </div>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default ReceiptHorizEntryComp;
