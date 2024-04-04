const form = document.getElementById("form");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const ageInput = document.getElementById("ageInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    let isValid = true;
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const ageValue = ageInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    
    if (nameValue === "") {
        setError(nameInput, "필수 입력항목입니다!");
        isValid = false;
    } else if (typeof nameValue !== "string") {
        setError(nameInput, "올바른 이름을 입력해주세요.");
        isValid = false;
  } else {
      setSuccess(nameInput, "멋진 이름이네요!");
    }
    
    if (emailValue === "") {
        setError(emailInput, "올바른 이메일 형식이 아닙니다!");
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, "유효한 이메일 주소를 입력해주세요.");
        isValid = false;
    } else {
        setSuccess(emailInput, "올바른 이메일 형식입니다.");
  }

  if (ageValue === "") {
      setError(ageInput, "나이를 입력해주세요!");
    } else if (isNaN(ageValue)) {
        setError(ageInput, "나이는 숫자형식이어야 합니다!");
        isValid = false;
    } else if (ageValue.includes(".")) {
        setError(ageInput, "나이는 소수가 될 수 없습니다!");
        isValid = false;
    } else if (ageValue < 0) {
        setError(ageInput, "나이는 음수가 될 수 없습니다!");
        isValid = false;
    } else if (ageValue < 19) {
        setError(ageInput, "미성년자는 가입할 수 없습니다!");
        isValid = false;
    } else {
        setSuccess(ageInput, "올바른 나이 형식입니다!");
    }
    
    if (passwordValue === "") {
        setError(passwordInput, "비밀번호를 입력해주세요.");
        isValid = false;
    } else if (passwordValue.length <= 4) {
        setError(passwordInput, "비밀번호는 최소 4자리 이상이어야 합니다.");
        isValid = false;
    } else if (passwordValue.length >= 12) {
        setError(passwordInput, "비밀번호는 최대 12자리까지 가능합니다.");
        isValid = false;
    } else if (
        !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/.test(
            passwordValue
            )
            ) {
                setError(
                    passwordInput,
                    "영어, 숫자, 특수문자를 모두 포함하여 비밀번호를 작성해주세요."
                    );
                    isValid = false;
                } else {
                    setSuccess(passwordInput, "올바른 비밀번호입니다!");
                }
                if (confirmPasswordValue === "") {
    setError(confirmPasswordInput, "비밀번호가 일치하지 않습니다.");
    isValid = false;
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPasswordInput, "비밀번호가 일치하지 않습니다.");
    isValid = false;
} else {
    setSuccess(confirmPasswordInput, "비밀번호가 일치합니다!");
}

if (isValid) {
  alert("가입 성공!");
} else {
    alert("올바르게 입력하세요!");
    }
}

function setError(input, message) {
    const parentElement = input.parentElement;
    const errorElement = parentElement.querySelector(".error-message");
    
    if (!errorElement) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "error-message";
        errorDiv.textContent = message;
        parentElement.appendChild(errorDiv);
        input.classList.add("error");
    } else {
        errorElement.textContent = message;
  }
}

function setSuccess(input, message) {
  const parentElement = input.parentElement;
  const errorElement = parentElement.querySelector(".error-message");
  const successElement = parentElement.querySelector(".success-message");
  if (errorElement) {
    errorElement.remove();
    input.classList.remove("error");
  }
  if (successElement) {
    successElement.remove();
  }

  if (message) {
    const successDiv = document.createElement("div");
    successDiv.className = "success-message";
    successDiv.textContent = message;
    parentElement.appendChild(successDiv);
  }
}
function isValidEmail(email) {
  return true;
}

function isValidAge(age) {
  return !isNaN(age);
}
