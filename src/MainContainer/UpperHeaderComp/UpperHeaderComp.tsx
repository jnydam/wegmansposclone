import styles from './UpperHeaderComp.module.css';

interface UpperHeaderCompProps {
  isMobile: boolean;
}

const UpperHeaderComp: React.FC<UpperHeaderCompProps> = (props) => {
  const { isMobile } = props;
  return (
    <div
      style={{
        position: 'relative',
      }}
      className={styles.upperHeaderCompStyle}
    >
      <input
        style={{
          width: isMobile ? '20rem' : '30rem',
          minHeight: isMobile ? '45%' : '60%',
          height: isMobile ? '45%' : '60%',
        }}
        placeholder='Scan Item and Place In Bag'
        className={styles.topInputContainer}
      ></input>
      <div className={styles.transparentInputBlocker}></div>
    </div>
  );
};

export default UpperHeaderComp;
