import { useState } from 'react';
import Box from './component/Box';
import './App.css';

/*
1. 박스 2개 (타이틀, 사진, 결과) V
2. 가위 바위 보 버튼이 있음 V
3. 버튼을 클릭하면 클릭한 값이 박스에 보임 V
4. 컴퓨터는 랜덤하게 아이템 선택이 된다.V 5강
5. 3,4의 결과를 가지고 누가 이겼는지 승패를 가른다
6. 승 -> 초록, 패 -> 빨강, 비김 -> 노랑
*/

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
  // 유저의 선택
  const [userSelect, setUserSelect] = useState({
    name: '',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XOcbFrjbboV6eqTy3sqOQbYELoPoGuxtwg&s',
  });
  // 컴퓨터의 선택
  const [computerSelect, setComputerSelect] = useState({
    name: '',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XOcbFrjbboV6eqTy3sqOQbYELoPoGuxtwg&s',
  });
  // 승패를 보여주는 state
  const [result, setResult] = useState('');
  // 버튼클릭 시 동작하는 함수
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log('user', user, 'computer', computer);

    /*
    user === computer 비김
    user === rock, com === scissors -> user win
    user === rock, com === paper -> user lose
    user === scissors, com === paper -> user win
    user === scissors, com === rock -> user lose
    user === paper, com === rock -> user win
    user === paper, com === scissors -> user lose
    */
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock')
      return computer.name === 'Scissors' ? 'win' : 'lose';
    else if (user.name === 'Scissors')
      return computer.name === 'Paper' ? 'win' : 'lose';
    else if (user.name === 'Paper')
      return computer.name === 'Rock' ? 'win' : 'lose';
  };

  const randomChoice = () => {
    // 객체의 배열화
    // Object.keys: 객체의 key 값만 뽑아서 배열로 만들어 주는 함수
    let itemArray = Object.keys(choice);
    console.log('item array', itemArray);
    // Math.random: 랜덤한 숫자값을 받아옴
    // Math.floor: 소수점 뒷자리는 버리는 함수
    let randomItem = Math.floor(
      Math.random() * itemArray.length, // 배열의 길이만큼만 랜덤한 값이 생성
    );
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <>
      <div className="main">
        <Box title="나" item={userSelect} result={result} />
        <Box
          title="상대"
          item={computerSelect}
          result={result}
        />
      </div>
      <div className="button-wrap">
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </>
  );
}

export default App;
