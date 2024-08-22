import styles from './TaxTotalBottomComp.module.css';

interface TaxTotalBottomCompProps {
  currentTaxValue: number;
  currentTotalValue: number;
}

const TaxTotalBottomComp: React.FC<TaxTotalBottomCompProps> = (props) => {
  const { currentTaxValue, currentTotalValue } = props;
  return (
    <div className={styles.taxTotalBottomContainerStyle}>
      <div className={styles.taxContainerRowComp}>
        <div className={styles.taxTotalLabelBox}>
          <span
            style={{
              fontWeight: 'bold',
            }}
          >
            Tax:
          </span>
        </div>
        <div className={styles.numberTaxBoxStyle}>
          <span>{`$${currentTaxValue.toFixed(2)}`}</span>
        </div>
      </div>
      <div className={styles.totalContainerRowComp}>
        <div className={styles.taxTotalLabelBox}>
          <span
            style={{
              fontWeight: 'bold',
            }}
          >
            Total:
          </span>
        </div>
        <div className={styles.numberTotalBoxStyle}>
          <span>{`$${currentTotalValue.toFixed(2)}`}</span>
        </div>
      </div>
    </div>
  );
};

export default TaxTotalBottomComp;
