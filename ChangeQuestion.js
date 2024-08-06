function QuestionforGroup(GroupName) {
    Title.innerHTML = "Question for group " + GroupName + ": ";
}








document.addEventListener('click', function () {
    let GroupNum = document.getElementById("select-group").value;
    let GroupName = document.getElementById(GroupNum).innerHTML;
    let Title = document.getElementById("Title");
    if(GroupNum != 0) {
        document.getElementById("Base choice").delete;
    }
    switch (GroupNum) {
        case "1":
            QuestionforGroup(GroupName);
            break;
        case "2":
            QuestionforGroup(GroupName);
            break;
        case "3":
            QuestionforGroup(GroupName);
            break;
        case "4":
            QuestionforGroup(GroupName);
            break;
        case "5":
            QuestionforGroup(GroupName);
            break;
        case "6":
            QuestionforGroup(GroupName);
            break;
        case "7":
            QuestionforGroup(GroupName);
            break;
        case "8":
            QuestionforGroup(GroupName);
            break;
        case "9":
            QuestionforGroup(GroupName);
            break;
        case "10":
            QuestionforGroup(GroupName);
            break;
        case "11":
            QuestionforGroup(GroupName);
            break;
    }
});
