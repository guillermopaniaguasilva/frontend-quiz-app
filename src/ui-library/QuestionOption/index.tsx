import iconCorrect from 'assets/icon-correct.svg';
import iconError from 'assets/icon-error.svg';
import theme from 'theme/index';
import { SlotProps } from 'ui-library/Slot';
import { StyledSlot } from './styles';

type QuestionOptionProps = {
  isSelected?: boolean;
  isCorrect?: boolean;
  isWrong?: boolean;
};

export default function QuestionOption({
  isSelected,
  isCorrect,
  isWrong,
  iconText,
  text,
  value,
  onSelection,
  showCorrectAnswer,
  correctOption,
}: QuestionOptionProps & SlotProps) {
  const iconSrc = isCorrect ? iconCorrect : isWrong ? iconError : undefined;
  const icon = <img src={iconSrc} alt={'test'} width={32} height={32} />;

  const backgroundColor = isCorrect
    ? theme.colors.green
    : isWrong
    ? theme.colors.red
    : isSelected
    ? theme.colors.purple
    : theme.colors.lightGrey;

  return (
    <StyledSlot
      className="mb-2"
      text={text}
      backgroundColor={backgroundColor}
      value={value}
      onSelection={onSelection}
      borderColor={backgroundColor}
      iconText={iconText}
      icon={iconSrc && icon}
      isSelected={isSelected}
      isCorrect={isCorrect}
      isWrong={isWrong}
      showCorrectAnswer={showCorrectAnswer}
      correctOption={correctOption}
    />
  );
}
