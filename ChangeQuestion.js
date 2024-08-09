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
            QuestionforGroup(GroupName,"Phatpong is live near Rangsit. He want to meet his friend at Sala Daeng. How much it take to go there if he want to go to Nonthaburi civic center first? Tell me the cheapest way and the most expensive way.");
            break;
        case "2":
            QuestionforGroup(GroupName,"Phatpong is live near Rangsit. He want to meet his friend at Huai Khwang. How much time it take to go there if he want to go to Phra Ram 9 and Phetchaburi first? Tell me the fastest way and the longest way.**You can't use regular train**");
            break;
        case "3":
            QuestionforGroup(GroupName,"Ohm just arrive at Rangsit. He want to travel around the city by railway. How much time and money it take to travel around the city if he just want to know cityside? Tell me the cheapest way and the most expensive way.");
            break;
        case "4":
            QuestionforGroup(GroupName,"Ohm just arrive at Rangsit. He want to travel around the city by railway. How much time and money it take to travel around the city if he just want to know all the railway station? Tell me the cheapest way and the most expensive way.");
            break;
        case "5":
            QuestionforGroup(GroupName,"Sathu is at Wat Phra Si Mahathat.**Need to add more after this**");
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
            QuestionforGroup(GroupName,);
            break;
        case "10":
            QuestionforGroup(GroupName);
            break;
        case "11":
            QuestionforGroup(GroupName);
            break;
    }
});
