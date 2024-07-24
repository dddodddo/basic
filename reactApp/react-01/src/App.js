import "./App.css";
import Box from "./components/Box";

function App() {
  //주석달기
  // {/* 주석달기 */}

  //react는 최대한 반복하는 것을 줄여야 함.
  //<Box /> --> components 컴포넌트
  const name = "제목입니다.";
  const list = ["홍길동", "강감찬", "이순신"];
  return (
    <div className="first" style={{ color: "orange" }}>
      <h2>{name}</h2>
      <ul>
        {/* {list.map((item)=>{ //map을 사용시 return은 필수
          return (<li>{item}</li>) //()안에 ""을 넣을 수 없음
        })} 🔽더 줄인 모습*/}
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <Box
        name="놀부"
        num={1}
        image="https://cdn.pixabay.com/photo/2015/11/10/20/10/dog-1037702_1280.jpg"
      />
      <Box
        name="흥부"
        num={2}
        image="https://cdn.pixabay.com/photo/2018/03/20/16/16/dog-3243734_1280.jpg"
      />
      <Box
        name="제비"
        num={3}
        image="https://cdn.pixabay.com/photo/2017/10/06/12/30/dog-2822939_1280.jpg"
      />
    </div>
  );
}

export default App;

// npm이란 --> 외부 라이브러리를 쉽게 설치하고 버전을 관리할 수 있게 해 준다.
// =>  package.json을 만들게 된다.
// npm은 Node.js를 설치하면 자동으로 함께 설치됨
// npx는 npm이 설치될 때 함께 설치된다.

// npx는 라이브러리를 개별적으로 실행하고 할 때 사용한다.

// yarn은 npm을 대체해서 사용(facebook에서 만듦)
// npm은 실행하는 외부 라이브러리가 많아질 수록 실행 속도가 떨어진다.
// yarn은 라이브러리를 병렬적으로 실행하여 설치한다. npm보다 빠르고 보완도 뛰어나다.

// JSX 문법
// 컴퍼넌트의 return()에서는 하나의 태그로 싸여있어야 한다.
// 태그를 사용하지 않을 때는 <></> --> Fragment(프레그먼트)를 사용해야한다.

// style={{}} --> 인라인 스타일 사용하기 ==> 밖에 있는 {}는 자바스크립트를 사용한다는 의미이고,
// 안에 있는 {}는 object(객체)를 사용한다는 의미
