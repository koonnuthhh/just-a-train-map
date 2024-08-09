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
            QuestionforGroup(GroupName,"Ohm just arrive at Rangsit(RN10) by helicoptor. He want to travel around the city by railway. How much time and money it take to travel around the city if he just want to know cityside? Tell me the cheapest way/the fasted way..");
            break;
        case "2":
            QuestionforGroup(GroupName,"Sathu is sale fish near Rangsit(RN10). He want to buy some food at Huai Khwang(BL18). How much time it take to go there if he want to go to Phra Ram 9(BL20) and Phetchaburi(BL21) first? Tell me the fastest way/ the longest way if you can't repeat the same route.");
            break;
        case "3":
            QuestionforGroup(GroupName,"Vear is a lover boy who sleep at Bang Khun Non(BL04). He going to get on a bus at Khu Khot(N24) to date with pretty girl but he need to buy a perfume at Bearing(E14) and get a new cloth at Bang Son(PP15). Give me the cheapest way if BL09 to BL15 is unavailable cause of changing lightbulb.");
            break;
        case "4":
            QuestionforGroup(GroupName,"Ohm the second just arrive at Rangsit(RN10). He want to travel around the city by railway. How much time and money it take to travel around the city if he just want to know all the railway station? Give me the cheapest way.");
            break;
        case "5":
            QuestionforGroup(GroupName,"Tui is at Yeak Pak Kret(PK06) He need to go to Ramkhanhaeng(A5) and Lak Song(BL38)(He can go anyplace first between these two). Give me the cheapest and fasted way to go if you can't use regular train.");
            break;
        case "6":
            QuestionforGroup(GroupName,"Phat live near Wutthakat(S11). He want to meet his father at Don mueang(RN8)  But he have to go to Lat Krabang(A2) to get his mother food and give it to her at Pu chao(E16). Give me the fasted and cheapest way to travel.");
            break;
        case "7":
            QuestionforGroup(GroupName,"Win's car is broken at EKkamai(E7).So he decide to use bts to go to work at Don mueang(RN8)  But he have to go to Lat Krabang(A2) to buy some part and give it to mechanic at Bang chak(E10). Tell me the longest and cheapest way to travel.");
            break;
        case "8":
            QuestionforGroup(GroupName,"Tan is at Kheha(E23). He want to go to study at Rajabhat Phranakhon(PK15) But he want to use Purple line at least one time and need to meet up with gf at Krung Thon Buri(S7). Tell me the cheapest way");
            break;
        case "9":
            QuestionforGroup(GroupName,"Andrew was running from america to Rangsit(RN10). He want to meet his friend at Sala Daeng(S2). How much it take to go there if he want to go to Nonthaburi civic center(PK01,PP11) first? Give me the cheapest and fasted way.");
            break;
        case "10":
            QuestionforGroup(GroupName,"Bene is finishing his pokemon go session at Talad Bang Yai(PP02). He has to go to his house at Wongwian Yai(S8) but he want to see airplane at Suvannabhumi(A1) first. Give me the best way to travel if he want to use Yellow line(YL) at least once.");
            break;
        case "11":
            QuestionforGroup(GroupName,"Best is at Royal Thai Naval Academy. He want to fix his shoes at Lak Hok(RN9) but he need to find something to eat at Talat Phlu(S10) by using Dark purple Line(A) at least once and can't  use regular train. Tell me the longest and most expensive path.");
            break;
    }
});
