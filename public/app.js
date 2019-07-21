$(document).ready(function () {
    var associateName;
    var associateEmail;
    var associateNumber;
    var newAssociateName;

    $("button").on("click", function () {
        associateName = $("#firstName").val() + " " + $("#lastName").val();
        associateEmail = $("#email").val();
        associateNumber = $("#number").val();
        newAssociateName = $("#naName").val();
    });

    $("#button1").on("click", function () {
        $("#message").text("Hi " + newAssociateName + "!" + "\n" + "Congrats on joining our CTFO team.We offer a complete line of the highest quality CBD products sourced from 100 % organic Hemp manufactured right here in the US." + "\n" + "Here are instructions to help you get started depending on which one of the categories you fit into." + "\n" + "If you are mainly interested in learning about and perhaps trying some of our outstanding products, here is how to gain access to your back office and review our complete product line:" + "\n" + " Go to this link.You will see a “login” button in the upper right hand corner.Click it and enter your CTFO Username and Password to gain access.Once inside, you will see a button named “SHOP” that will take to our product page:" + "\n" + "https://www.myctfo.me" + "\n" + " For those of you that want to build a business and begin earning weekly checks, we have a developed a website that will show you the 4 Steps to build, manage, and grow your CTFO business." + "\n" + "This 4 step training is available to you 24 / 7 on our website.Here is the link.Watch the short video and it will guide you on how to use the system and exactly what to do:" + "\n" + " www.ctfoteamelite.com" + "\n" + " Once you have completed the first 2 Steps in the training please let me know, and we will set up a Strategy Session and get your business kicked off!" + "\n" + " Welcome to our Team!" + "\n" + associateName + "\n" +
            associateEmail + "\n" +
            associateNumber
        );
    });

    $("#button2").on("click", function () {
        $("#message").text("Hi " + newAssociateName + "\n" + "You signed up as a Free Associate with CTFO a few days ago." + "\n" + "CBD / Hemp is the hottest thing in wellness right now and we have the best products available." + "\n" + "With our turn key business you can be up and running and earning weekly checks in no time at all." + "\n" + "And we have one of the fastest growing groups in the company so we can show you exactly how to do it." + "\n" + "But you need to take a step forward or this incredible business is going to pass you by." + "\n" + "Are you still interested in our business or should I take you off my “hot list”." + "\n" + "Tks " + "\n" + associateName
        );
    });

    $("#button3").on("click", function () {
        $("#message").text("Hi " + newAssociateName + "\n" + "I want to congratulate you one more time for getting signed up with CTFO.We are changing lives every single day, and now it is your turn to take that step forward, and change your future." + "\n" + "You have 4 choices as a CTFO Associate.Please reply to this email and just let me know which category you fall into:" + "\n" + "1.  Not going to do anything right now.I would like to check things out, and maybe take some action or try the products down the road." + "\n" + "2.  Interested in learning more about the products, and perhaps trying one of the CBD’s.Please send me more information about CTFO’s products." + "\n" + "3.  Thinking about building a part - time income.I would like to learn more about what it takes to build this business and earn weekly checks." + "\n" + "4.  I want to Go Big.I am ready to build a Big Business and want to learn how to earn 6 or 7 Figures a year.Show me the way!!!" + "\n" + "        So there you go.CTFO has something for everyone.Let me know what you are thinking, or if you just have more questions I can answer those as well." + "\n" + "Look forward to speaking with you soon." + "\n" + "Regards, " + "\n" +

            associateName
        );
    });

    $("#button4").on("click", function () {
        $("#message").text("Jungle");
    });

});