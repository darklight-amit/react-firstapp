import "bootstrap/dist/css/bootstrap.min.css";
import HackerrankData from './component/fetchApiData';
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {
  return (
    <>
      <Container>
        <HackerrankData />
      </Container>
    </>
  );
}

export default App;
