import './App.css';
import randu from '@stdlib/random-base-randu';
import discreteUniform from '@stdlib/random-base-discrete-uniform';

const TEXTS = ['Hello', '@stdlib'];
const NUM_ITEMS = 50;

function getRandomInt(min, max) {
  return discreteUniform(min, max); // stdlib version
}

function getRandomFloat() {
  return randu(); // stdlib version
}

function FallingText({ index }) {
  const left = getRandomInt(0, 100);
  const delay = getRandomInt(0, 5000);
  const duration = getRandomInt(3000, 7000);
  const size = getRandomInt(14, 28);
  const word = TEXTS[getRandomInt(0, TEXTS.length - 1)];

  return (
    <div
      className="falling-text"
      style={{
        left: `${left}%`,
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        fontSize: `${size}px`,
      }}
    >
      {word}
    </div>
  );
}

function App() {
  const textItems = Array.from({ length: NUM_ITEMS }, (_, i) => (
    <FallingText key={i} index={i} />
  ));

  return <div className="rain-container">{textItems}</div>;
}

export default App;
