import {useState} from "react";
import './App.css';
import On from "./on";
import Off from "./off";

function rand() { // min and max included
    return Math.floor(Math.random() * 2)
}

const arrayColumn = (arr, n) => arr.every(x => x[n] === 1);

function App() {
  const [matrix, setMatrix] = useState([
      [rand(), rand(), rand(), rand()],
      [rand(), rand(), rand(), rand()],
      [rand(), rand(), rand(), rand()],
      [rand(), rand(), rand(), rand()],
  ]);

  const handleClick = (i, j) => {
      let newMatrix = [...matrix];
      newMatrix = newMatrix.map((arr, iIdx) => {
          return arr.map((item, jIdx) => {
              if (jIdx === j) {
                  return item === 0 ? 1 : 0
              }
              return item;
          });
      });
      newMatrix[i] = newMatrix[i].map((item, jIdx) => {
          return newMatrix[i][jIdx] === 0 ? 1 : 0;
      });
      newMatrix[i][j] = newMatrix[i][j] === 0 ? 1 : 0
      setMatrix(newMatrix);
  };

  return (
    <div className="container">
        <div className="locker" style={{ width: matrix[0].length * 68 }}>
            <div className="signal">
                {matrix.map((_, index) => (
                    <div className="signal-wrap">
                        {arrayColumn(matrix, index) ? <div className="green" /> : <div className="red" />}
                    </div>
                ))}
            </div>
            {matrix.map((arr, i) => (
                <tr key={i} className="row">
                    {arr.map((item, j) => (
                        <td key={j} className="column"><button className="button" onClick={() => handleClick(i, j)}>{item === 1 ? <On /> : <Off />}</button></td>
                    ))}
                </tr>
            ))}
        </div>
    </div>
  );
}

export default App;
