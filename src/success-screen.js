import './success.scss';
import { Howl, Howler } from 'howler';
import mashupMusic from './assets/mashup.mp3';
import { useEffect } from 'react';

const SuccessScreen = () => {
  const soundPlay = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  useEffect(() => {
    Howler.volume(1.0);
  }, []);

  return (
    <div className="success-screen">
      <div className="play-audio">
        <button onClick={() => soundPlay(mashupMusic)}>Nghe cho vui đời nha</button>
      </div>
    </div>
  );
};

export default SuccessScreen;
