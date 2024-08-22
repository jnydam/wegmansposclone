import styles from './OptionsButtonComp.module.css';
import accessibilityIcon from '../../../../../assets/handicapsymbol.svg';
import useOwnBagIcon from '../../../../../assets/WhiteBagReusable.svg';
import requestHelpIcon from '../../../../../assets/ExclamationSymbol.svg';

export type MobileOptionButtonType =
  | 'accessibility'
  | 'useownbag'
  | 'requesthelp'
  | 'moreoptions'
  | '';

interface OptionsButtonCompProps {
  onMobileOptionClick: (modalArg: MobileOptionButtonType) => void;
  buttonType: MobileOptionButtonType;
}

const OptionsButtonComp: React.FC<OptionsButtonCompProps> = (props) => {
  const { buttonType, onMobileOptionClick } = props;

  const determineButtonAttributes: () => {
    name: string;
    image: string;
    color: string;
  } = () => {
    if (buttonType === 'accessibility') {
      return {
        name: 'Accessibility',
        image: accessibilityIcon,
        color: '#62b0d2',
      };
    } else if (buttonType === 'useownbag') {
      return {
        name: 'Use My Own Bag',
        image: useOwnBagIcon,
        color: '#c5842a',
      };
    } else if (buttonType === 'requesthelp') {
      return {
        name: 'Request Help',
        image: requestHelpIcon,
        color: '#c89e26',
      };
    }
    return {
      name: '',
      image: '',
      color: '',
    };
  };

  const handleOptionButtonClick = () => {
    if (buttonType === 'accessibility') {
      onMobileOptionClick('accessibility');
    } else if (buttonType === 'requesthelp') {
      onMobileOptionClick('requesthelp');
    } else if (buttonType === 'useownbag') {
      onMobileOptionClick('useownbag');
    }
  };

  const { color, image, name } = determineButtonAttributes();

  return (
    <button
      onClick={handleOptionButtonClick}
      style={{
        marginTop: '1rem',
        backgroundColor: color,
      }}
      className={styles.optionsButtonContainer}
    >
      <img
        style={{
          marginRight: '0.7rem',
          height: '2rem',
        }}
        src={image}
      ></img>
      <span>{name}</span>
    </button>
  );
};

export default OptionsButtonComp;
