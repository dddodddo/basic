import "./App.css";
import Box from "./components/Box";

function App() {
  return (
    <>
      <Box name="놀부" num={1} />
      <Box name="흥부" num={2} />
      <Box name="제비" num={3} />
    </>
  );
  //무조건 태그 하나안에 만들어야 함. --> 태그 명 없이 <></> 으로도 사용 가능
}

export default App;
