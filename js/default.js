var number = Math.floor(Math.random()*100);
var answer;

var message;

for(var i = 1; i > 0; i++){
  
  answer = parseInt(window.prompt('数当てゲーム。0～99の数字を入力！'));

  if(answer ===number){
    message = 'あたり！';
    break;
  }else if(answer < number){
    message = '残念！もっと大きいです';
  }else if(number < answer){
    message = '残念！もっと小さいです！';
  }else{
    message = '0~99の数字を入力してください';
  }

  document.getElementById('choice').textContent = message;
}

document.getElementById('choice').textContent = message;
