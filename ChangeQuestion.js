function QuestionforGroup(GroupName,Text) {
    Title.innerHTML = "Question for group " + GroupName + ": " + Text;
}
function RealQuestion(Text) {
    document.getElementById("Question").innerHTML = Text;
}
document.getElementById("select-group").addEventListener('change', function () {
    let GroupNum = document.getElementById("select-group").value;
    let GroupName = document.getElementById(GroupNum).innerHTML;
    let Title = document.getElementById("Title");
    document.getElementById("Question").innerHTML = "";
    switch (GroupNum) {
        case "0":
            Title.innerHTML = "There is no question here";
            RealQuestion("I'm just too lazy to delete this choice");
            break;
        case "1":
            QuestionforGroup(GroupName,"Phatpong is live near Rangsit. He want to meet his friend at Sala Daeng. How much it take to go there if he want to go to Nonthaburi civic center first? Tell me the fastest way and the longest");
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
