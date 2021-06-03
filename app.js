const question = 'ゲーム市場、最も売れたゲーム機は次の内どれ？';
const answers = [
  'スーパーファミコン',
  'プレイステーション2', 
  '任天堂スイッチ', 
  '任天堂Ds'];
const correct = '任天堂Ds';

// ボタンのオブジェクトを定義
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題と選択肢を定義
const setupQuiz = () => {
  // 問題文の表示
  document.getElementById("js-question").textContent = question;

  // 選択肢の表示
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

// ボタンをクリックしたときの処理呼び出し
let = handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

// 正解判定
const clickHandler = (e) => {
    if(correct === e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解!');
  }
}