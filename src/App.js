import logo from "./logo.svg";
import "./App.css";

function App() {
  var 인사법 = "안녕하세요?";
  var 이름 = "유재석";
  // var 자기소개 = 인사법 + "제 이름은\n" + " " + "입니다.";

  // 템플릿 문자열 사용 방법
  // 1. `${인사법} ${이름}`
  var 자기소개 = `${인사법} 제 이름은 
  ${이름}입니다.`;
  console.log(자기소개);
}

export default App;
