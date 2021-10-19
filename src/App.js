import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './app.scss';

function App() {
  const [buttonCancelStyles, setButtonCancelStyles] = useState({});

  const router = useHistory();

  const hanleCancel = () => {
    setButtonCancelStyles({
      position: 'absolute',
      top: Math.floor(Math.random() * (812 - 60)),
      left: Math.floor(Math.random() * (375 - 180)),
    });
  };

  return (
    <div className="app" style={{ position: 'relative' }}>
      <h1 className="text-center">
        Em có yêu anh không? ^^ I love U<i class="fas fa-heart icon-heart"></i>
        <i class="fas fa-heart icon-heart"></i>
        <i class="fas fa-heart icon-heart"></i>
      </h1>
      <h3 className="text-center">
        Nếu em mà thoát ra và không trả lời thì có nghĩa là em yêu anh nhiều nhiều lắm
      </h3>
      <div className="inline space-between m-top" style={{ overflow: 'hidden' }}>
        <button className="accept" onClick={() => router.push('/accept')}>
          Có, em yêu anh nhiều<i class="far fa-kiss-wink-heart icon-love"></i>
        </button>
        <button className="cancel" style={buttonCancelStyles} onClick={hanleCancel}>
          Không! Còn lâu nhé<i class="far fa-tired icon-cry"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
