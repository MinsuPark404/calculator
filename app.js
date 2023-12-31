const answer = document.querySelector(".answer");
const formula = document.querySelector(".formula");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "×", "/", "-", "+", "=", "√", "^"];
let output = "";

// 클릭한 버튼을 기준으로 계산할 함수 정의
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        // 출력에 '%'가 있으면 평가하기 전에 '/100'으로 바꿉니다.
        output = eval(output.replace("%", "/100").replaceAll("×", "*"));
    } else if (btnValue === "AC") {
        output = 0;
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else if (btnValue === "√" && output !== "") {
        output = Math.sqrt(parseFloat(output));
    } else if (btnValue === "^" && output !== "") {
        output = Math.pow(output,2);
    } else {
        if (output === "" && specialChars.includes(btnValue)){
            return;
        }else{
            output += btnValue;
        }
    }
    answer.innerText = output;
    console.log(output);
};

// 버튼을 클릭했을 때의 이벤트 핸들러를 추가하고 클릭 시 연산자 함수()를 호출.
buttons.forEach((button) => {
    // e.target은 클릭된 요소를 참조합니다. dataset.value는 data-value 속성에 있는 값을 가져옵니다.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
