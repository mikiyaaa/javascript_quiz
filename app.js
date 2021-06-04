const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次の内どれ？',
    answers: [
      'スーパーファミコン',
  'プレイステーション2', 
  '任天堂スイッチ', 
  '任天堂Ds'
    ],
    correct: '任天堂Ds'
  }, {
    question: '糸井和里が関わった、任天堂の看板ゲームと言えば？',
    answers: [
      'MOTHER2',
      'スーパーマリオブラザーズ',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーIVの主人公の名前は？',
    answers: [
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル'
    ],
    correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// ボタンのオブジェクトを定義
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題と選択肢を定義
const setupQuiz = () => {
  // 問題文の表示
  document.getElementById("js-question").textContent = quiz[quizIndex].question;

  // 選択肢の表示
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
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
    if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解!');
  }
  quizIndex++;
  
  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert(`終了！あなたの正解率は${score}/${quizLength}です。`);
  }
}