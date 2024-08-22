import styles from './BlueBagButtonComp.module.css';

interface BlueBagButtonCompProps {
  buttonText: string;
  isFirst?: boolean;
  onClick: () => void;
}

const BlueBagButtonComp: React.FC<BlueBagButtonCompProps> = (props) => {
  const { buttonText, isFirst, onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{
        marginRight: isFirst ? '0.5rem' : '0rem',
      }}
      className={styles.blueBagButtonContainer}
    >
      <span>{buttonText}</span>
    </button>
  );
};

export default BlueBagButtonComp;
