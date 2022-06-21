import './styles/App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Search from './Search';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Search />
      </div>
    </RecoilRoot>
  );
}

export default App;
