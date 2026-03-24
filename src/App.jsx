import { useState } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://img.sbs.co.kr/newimg/news/20240414/201920010_500.jpg',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://m.bibon.co.kr/web/product/big/202101/833fa88eae073a583699cc737f0b8a91.jpg',
  },
  paper: {
    name: 'Paper',
    img: 'https://cdn.newscape.co.kr/news/photo/202202/79545_68951_3417.jpg',
  },
};

function App() {
  const [userSelect, setUserSelect] = useState({
    name: '',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XOcbFrjbboV6eqTy3sqOQbYELoPoGuxtwg&s',
  });

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  /*
1. 박스 2개 (타이틀, 사진, 결과)
2. 가위 바위 보 버튼이 있음
3. 버튼을 클릭하면 클릭한 값이 박스에 보임
4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
5. 3,4의 결과를 가지고 누가 이겼는지 승패를 가른다
6. 승 -> 초록, 패 -> 빨강, 비김 -> 노랑
*/
  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} />
        {/* <Box title="Computer" item={userSelect} /> */}
      </div>
      <div className="main">
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </>
  );
}

export default App;
