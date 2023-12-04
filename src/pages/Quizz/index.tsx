import { data } from '../../data/data';
import Home from './components/Home';
import { Container } from './styles';

export default function Quizz() {
  return <Container>{<Home data={data} />}</Container>;
}
