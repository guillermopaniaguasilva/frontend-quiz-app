import { Btn } from './styles';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
  return <Btn onClick={onClick}>{children}</Btn>;
}
