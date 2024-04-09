const searchInput = document.getElementById("search");
const todoList = document.getElementById("p1");
const doneList = document.getElementById("p2");

// 입력 필드에 이벤트 리스너 추가
searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// 할 일 추가 함수
function addTask() {
    const taskText = searchInput.value.trim();
    if (taskText === "") return; // 빈 입력 방지

    // 새로운 리스트 아이템 생성
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // 완료 버튼 추가
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "완료";
    completeBtn.addEventListener("click", function() {
        moveTask(listItem);
    });

    listItem.appendChild(completeBtn); // 완료 버튼을 리스트 아이템에 추가
    todoList.appendChild(listItem); // 할 일 목록에 리스트 아이템 추가
    searchInput.value = ""; // 입력 필드 초기화
}

// 할 일 완료 함수
function moveTask(taskItem) {
    // 완료된 할 일을 해낸 일 목록으로 이동
    doneList.appendChild(taskItem);

    // 완료 버튼 삭제
    taskItem.querySelector("button").remove();

    // 삭제 버튼 추가
    addDeleteButton(taskItem);
}

// 삭제 버튼 추가 함수
function addDeleteButton(taskItem) {
    // 삭제 버튼 생성
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.addEventListener("click", function() {
        taskItem.remove(); // 해당 항목 삭제
    });

    taskItem.appendChild(deleteBtn); // 삭제 버튼을 리스트 아이템에 추가
}

// 해낸 일 목록에 있는 각 항목에 삭제 버튼 추가
const doneItems = doneList.querySelectorAll("li");
doneItems.forEach(function(item) {
    addDeleteButton(item);
});