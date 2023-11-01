// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputUsername = document.querySelector('#username')
console.log(elInputUsername);

let elFailureMessage = document.querySelector('.failure-message')
console.log(elFailureMessage);

let elSuccessMessage = document.querySelector('.success-message')



let elpassword1 = document.querySelector('#password');
let elpassword2 = document.querySelector('#password-retype');
let elMissMatchMessage = document.querySelector('.mismatch-message');

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4;
}


elInputUsername.onkeyup = function () {

  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove('hide')
    // console.log('4글자보다 크다.')
    elFailureMessage.classList.add('hide')
  }
  else {
    elSuccessMessage.classList.add('hide')
    elFailureMessage.classList.remove('hide')
    // console.log('4글자보다 짧다.');
  }
}

elpassword2.onkeyup = function () {
  if (isMatch(elpassword1.value, elpassword2.value)) {
    elMissMatchMessage.classList.add('hide')
  } else {
    elMissMatchMessage.classList.remove('hide')
  }


}


function isMatch(password1, password2) {

  return password1 === password2
  // if(isMatch(elpassword1.value,elpassword2.value)){
  //   //만약 1,2가 일치하지ㅣ 않으면

  //   // 리무버로 메시지가 보이게 해야하고
  // } else {

  //   //아니라면 더하기로 메시지가 안 보이게 해야함
  // }

  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
}