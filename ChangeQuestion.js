function QuestionforGroup(GroupName) {
    Title.innerHTML = "Question for group " + GroupName + ": ";
}
function RealQuestion(Text) {
    document.getElementById("Question").innerHTML = Text;
}
document.getElementById("select-group").addEventListener('change', function () {
    let GroupNum = document.getElementById("select-group").value;
    let GroupName = document.getElementById(GroupNum).innerHTML;
    let Title = document.getElementById("Title");
    switch (GroupNum) {
        case "0":
            Title.innerHTML = "There is no question here";
            RealQuestion("I'm just too lazy to delete this choice");
            break;
        case "1":
            QuestionforGroup(GroupName);
            RealQuestion("Phatpong is live near Rangsit. He want to meet his friend at Sala Daeng. How much it take to go there if he want to Si Kritha first");
            break;
        case "2":
            QuestionforGroup(GroupName);
            RealQuestion("");
            break;
        case "3":
            QuestionforGroup(GroupName);
            RealQuestion();
            break;
        case "4":
            QuestionforGroup(GroupName);
            RealQuestion();
            break;
        case "5":
            QuestionforGroup(GroupName);
            RealQuestion();
            break;
        case "6":
            QuestionforGroup(GroupName);
            RealQuestion();
            break;
        case "7":
            QuestionforGroup(GroupName);
            RealQuestion();
            break;
        case "8":
            QuestionforGroup(GroupName);
            RealQuestion();
            break;
        case "9":
            QuestionforGroup(GroupName);
            RealQuestion();
            break;
        case "10":
            QuestionforGroup(GroupName);
            RealQuestion();
            break;
        case "11":
            QuestionforGroup(GroupName);
            RealQuestion();
            break;
    }
});
