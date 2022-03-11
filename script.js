let secretNumber = Math.trunc(Math.random() * 100) + 1;
console.log(secretNumber);
let number_try = document.getElementById('number_try');
let check_new = document.getElementById('check_new');
let myMess = document.getElementById('myMess');
let number = document.querySelector('.number');
let score_win = document.getElementById('score_win');
let pass_high = document.getElementById('pass_high');
let again_new = document.getElementById('again_new');

//
let cunt = 0;
check_new.onclick = function () {
  if (number_try.value != '' && number_try != secretNumber) {
    cunt += 1;
    score_win.innerHTML = 100 - cunt;
    // console.log(cunt);
  }
};

check_new.addEventListener('click', () => {
  // alert('hello');
  if (number_try.value == secretNumber) {
    // alert('hello');
    document.body.style.background = '#f1a816';
    myMess.innerHTML = 'You are the best 👌🎉';
    number.innerHTML = secretNumber;

    // guess function
  }
  if (
    number_try.value == secretNumber &&
    pass_high.innerHTML <= score_win.innerHTML
  ) {
    pass_high.innerHTML = score_win.innerHTML;
  }
  if (!number_try.value) {
    myMess.innerHTML = '🤔🤩 Enter a number';

    // To low function
  } else if (number_try.value < secretNumber) {
    myMess.innerHTML = 'To low😢🤔';

    // To high function
  } else if (number_try.value > secretNumber) {
    myMess.innerHTML = 'To high 👌🤐';
  }
});

// Again
again_new.addEventListener('click', function () {
  myMess.innerHTML = 'Start guessing...';
  document.body.style.background = '#222';
  number.innerHTML = '?';
  score_win.innerHTML = 100;
  let secretNumber = Math.trunc(Math.random() * 100) + 1;
  // console.log(secretNumber);
});
