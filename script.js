var inUse = 0;
var welcomeMessage = 0;
var clickOnMe = 0;
var phase = "welcome";
var CV;
function highlight() {
    document.getElementById("fakeDisclamer").classList.add("flash");
    window.setTimeout(nohighlight, 450);
}

function nohighlight() {
    document.getElementById("fakeDisclamer").classList.remove("flash");
}

//the AI functions I wrote so far:
/* 
 * WelcomeNewJob
 * ClickedOnMe
 * 
 * 
 function typeWriter(element, text, index = 0, callback = null)
*/

function welcomeNewJob() {
    if (inUse === 1) return false;
    inUse = 1;
    var p = document.getElementById("text");
    var text = "Welcome 'insert_title' 'insert_name' to my own interactive resume!\nI'm a fully functional copy of my owner and happy to help you find all the \ninformation you need about me, and hopefully impress you enough to give \nme a chance of an interview!\nNow here are the basics, type which option you want to know first:\n(a) Education.\n(b) Awards.\n(c) Projects.\n(d) Skills and Languages.\n(e) Social and other.\n";
    phase = "select";
    CV = "00000";
    typeWriter(p, text, 0, function () {
        var p = document.getElementById("text");
        var text = "Welcomewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww!";
        typeWriter(p, text);
    });
}

function clickedOnMe() {
    if (inUse === 1) return false;
    inUse = 1;
    var text;
    switch (clickOnMe) {
        case 0: text = "Don't click on me again, that's rude!\n"; break;
        case 1: text = "I told you to leave me alone!\n"; break;
        case 2: alert("do you like it when poeople just poke you without permission!!"); text = ":|\n";
    }
    clickOnMe++;
    typeWriter(document.getElementById("text"), text);
}

function typeText() {
    if (inUse === 1) return false;
    inUse = 1;
    var p = document.getElementById("text");
    var mystr = "This is the text to be written\n";
    //    p.innerHTML = 'bo';
    typeWriter(p, mystr);
}

function typeWriter(element, text, index = 0, callback = null) {
    var wait = 20;
    if (text.length == index) {
        //    element.parentElement.scrollBy(0, 100);
        if (callback != null)
            callback();
        element.parentElement.scrollBy(0, 1000);
        inUse = 0;
        return;
    }
    if (' ' == text[index])
        element.innerHTML = element.innerHTML + "&nbsp;";
    else if ('\n' == text[index])
        element.innerHTML = element.innerHTML + "<br />";
    else
        element.innerHTML = element.innerHTML + text[index];
    if (index === 0)
        element.parentElement.scrollBy(0, 1000);
    else if (text[index - 1] == "\n")
        element.parentElement.scrollBy(0, 1000);
    if (text[index] == "\n")
        wait = 500;
    window.setTimeout(typeWriter.bind(null, element, text, index + 1), wait);
}

function process() {
    if (inUse === 1) {
        alert("don't talk while I'm talking, please.");
        return false;
    }
    inUse = 1;
    var answer;
    var text = document.getElementById("input").value;
    switch (phase) {
        case "welcome": break;
        case "select": switch (text[0]) {
            case "a":
            case "A":
                if (CV[0] == "0") {
                    document.getElementById("button1").classList.remove("invisable");
                }
                CV = setCharAt(CV, 0, '1');
                answer = "\nEDUCATION:\n\nStudying in University Duisburg Essen since 2015 with a GPA of 2,1, what I'm proud of:\n1- Full marks (1.0) in: Mathematics2, Physics, Discrete Mathematics, Probability and 'Automata Theory, Languages, and Computation'.\n2- Almost full marks (<=2.0) in: Mechanics, Programming, Economics, Databases and Security.\n3- Two projects that I worked on during the fourth semester (check (c)).\n4- Taking an Artificial Intelligence elective, I had to wait 5 semesters to have time for it.\n5- Meeting new friends and having a good time :)\n";
                break;
            case "b":
            case "B":
                if (CV[1] == "0") {
                    document.getElementById("button2").classList.remove("invisable");
                }
                CV = setCharAt(CV, 1, '1');
                answer = "\nAWARDS:\n\n1- [2015] DAAD scholarship that allowed me to study in germany.\n2- [2014] My android application recieved the 'Second Best Service Application'\nin the first syrian application contest, I was 19 and over 200 people were competing for the prize, it got me the computer I'm using right now.\n3- [2012-2014] Participated in the Syrian Collegiate Programming Contest\nthree times and was able to get to the Arabic one two times with my team.\n4- [2007-2012] I was 14 when I participated in my first programming contest\nand got the bronze medal for my age group in the Syrian Oylempiad in\nInformatic, and got the golden one the year after, my mom still have the medals back at home.\n"; break;
            case "c":
            case "c":
                if (CV[2] == "0") {
                    document.getElementById("button3").classList.remove("invisable");
                }
                CV = setCharAt(CV, 2, '1');
                answer = "\nPROJECTS:\n\n1- Tala't: my biggest project so far, an android application with a website\n(front and backend) to support it, the application is a social network to get people to meet up and go out with friends and buy tickets for events.\n2- Babble: a twitter knock-off that I did with two friends for the database\ncourse in the university, with all the basic functions (post, follow, like, retweet, block...)\n3- Movie-Database: a whole project (planning, documenting, team work, coding..)\nthat I had to work on in a group for the 'Software Engineering' course in the university.\n";
                break;
            case "d":
            case "D":
                if (CV[3] == "0") {
                    document.getElementById("button4").classList.remove("invisable");
                }
                CV = setCharAt(CV, 3, '1');
                answer = "\nSKILLS:\n\n1- Programming languages: C, C++, Java.\n2- Web development: HTML, JS, PHP, NodeJS, Relational Databases (MySQL, DB2).\n3- Android Development: I have used android studio to make spme applications\nand one of them won an award.\n4- Other: Problem solving, solo projects, group projects, innovation and finding new ideas.\n5- Languages: Arabic, English, German and just some basic French.\n"; break;
            case "e":
            case "E":
                if (CV[4] == "0") {
                    document.getElementById("button5").classList.remove("invisable");
                }
                CV = setCharAt(CV, 4, '1');
                answer = "\nSOCIAL&OTHER:\n\n1-[2016-] co-organisor of the 'Ruhrgebiet English Book Club'.\n2-[2012-2015] Participated in various workshops in the “Syrian Computer Society”\n(SCS) from advanced Math to Algorithms for competitive programming.\n3-[2009-2012] Participated in some of the Syrian Trust activities in my city\nsuch as the debate team, Montage courses and won the Best Short Video award for a video encouraging the people in our city to be the best version of themselves.\n4- Learned to play the Violin (2004 - 2009) then the Guitar (2009 - 2011)\nand participated in a concert in the city's cultural center in 2011.\n"
                break;
            default:
                answer = "I already gave you all the possible options, and that was not one of them.\n";
        }
    }
    if (CV[0] == "1" && CV[1] == "1" && CV[2] == "1" && CV[3] == "1" && CV[4] == "1")
        document.getElementById("CV").classList.remove("invisable");
    typeWriter(document.getElementById("text"), answer);
    document.getElementById("input").value = "";
}

function showInfo() {
    document.getElementById("float").classList.remove("invisable");
}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function contorlingAI() {

}