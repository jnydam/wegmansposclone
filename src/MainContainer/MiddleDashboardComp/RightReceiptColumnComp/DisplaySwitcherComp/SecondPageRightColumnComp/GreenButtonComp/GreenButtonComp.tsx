import styles from './GreenButtonComp.module.css';

interface GreenButtonCompProps {
  imageInput: string;
  isFirst?: boolean;
  hasArrow?: boolean;
  textInput: string;
  imageHeight: string;
  onPageSwitch: () => void;
}

const GreenButtonComp: React.FC<GreenButtonCompProps> = (props) => {
  const {
    imageInput,
    textInput,
    isFirst,
    imageHeight,
    hasArrow,
    onPageSwitch,
  } = props;
  return (
    <button
      onClick={onPageSwitch}
      style={{
        marginRight: isFirst ? '0.3rem' : '0rem',
      }}
      className={styles.greenButtonContainer}
    >
      <img
        style={{
          transform: hasArrow ? 'rotate(270deg)' : 'none',
          height: imageHeight,
        }}
        src={imageInput}
      ></img>
      <span
        style={{
          marginTop: '1.2rem',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.1rem',
        }}
      >
        {textInput}
      </span>
    </button>
  );
};

export default GreenButtonComp;
