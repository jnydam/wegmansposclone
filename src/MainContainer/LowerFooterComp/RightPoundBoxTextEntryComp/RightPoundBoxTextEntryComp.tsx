import styles from './RightPoundBoxTextEntryComp.module.css';

interface RightPoundBoxTextEntryCompProps {
  leftText: string;
  rightText: string;
}

const RightPoundBoxTextEntryComp: React.FC<RightPoundBoxTextEntryCompProps> = (
  props
) => {
  const { leftText, rightText } = props;
  return (
    <div className={styles.rightPoundBoxTextEntryContainer}>
      <span
        style={{
          marginLeft: '0.3rem',
        }}
      >
        {leftText}
      </span>
      <span
        style={{
          marginLeft: '1rem',
        }}
      >
        {rightText}
      </span>
    </div>
  );
};

export default RightPoundBoxTextEntryComp;
