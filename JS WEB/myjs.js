

function myPageOneFunction() {

    return "WELCOME TO MY <br> VERY SPECIAL PAGE";
}
  document.getElementById("Greetings").innerHTML = myPageOneFunction(); 


  
function myPageTwoFunction(){
  var txtWithImage = document.getElementById("txtWithImage");
  var p = document.createElement("p");
  p.innerText = williamShakespeare();
  p.style.display ="flex";
  p.style.textAlign ="justify";
  p.style.marginTop = "50px" 
  txtWithImage.appendChild(p);
  const img = document.createElement("img");
  img.src = "william.jpg";
  img.style.width = "35%";
  img.style.padding = "3%";
  p.appendChild(img);
}


function myPageThreeFunction(){
        firstName = document.getElementById("firstName").value;
        yearOfBirth = document.getElementById("yearOfBirth").value;
        document.getElementById("result").innerHTML = 2020 - yearOfBirth;
}

function myPageFourFunction(){

  var container = document.getElementById("colorChoice");
  var text = document.createElement("p");

    alert("Choose your own background color.")
    var choiceOfColor  = prompt("Rose Quartz or Serenity?");
  
  if (choiceOfColor.includes("Rose Quartz") ||choiceOfColor.includes("rose quartz") || choiceOfColor.includes("rose") ) {
    choiceOfColor = "#F7CAC9";
    var invertedColor = "#92A8D1";
  } else if (choiceOfColor.includes("Serenity") || choiceOfColor.includes("serenity")) {
    choiceOfColor = "#92A8D1";
    invertedColor = "#F7CAC9";
  }
      else choiceOfColor = false;

  if(!choiceOfColor){
    choiceOfColor = "#92A8D1";
    invertedColor = "#F7CAC9";
      alert("Color unindentified, color set to Serenity");
  }
  text.innerHTML = loremIpsum();
  text.style.color = "#000000";
  text.style.textAlign = "center";
  document.body.style.backgroundColor = choiceOfColor;
  container.appendChild(text);
}




function myPageFiveFunction(){

    alert("Hello! Good Day! \n\nI am Carl Rogers. \n\nYour personal Psychotherapist.");
    alert("So, for today lets have a little conversation about you. I am gonna ask you some questions. \n\n I hope you will answer them honestly");
    alert("But first I have to know your name");
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
         var answer = prompt("How are u doing today, "+ person + "?");
    }
    if(answer.includes("sad") || answer.includes("Sad") || answer.includes("feeling down")){
            var answer = prompt("Its okay "+person+" if you are "+answer+", what made you feel that way? Is it because of your studies?");

              if(answer.includes("Yes") || answer.includes("yes")){
                alert("You know "+person+" there will be bad days and good days in our life. What we must do is just to keep on living and be strong everyday.");
                alert("We all know that education is very important in our life. Also, education is the key to sucess but we are just humans. We get tired of all the things we do in life.");
                alert("Its okay to take a rest "+person+" but dont stop :).");
                alert("I will be cheering on you "+person+" dont give up on your studies. I know that you can achieve your dreams!!! BE STRONG!!!.");
              }

             else{
                var answer = prompt ("If not, then is it all about your family?");
                if(answer.includes("Yes") || answer.includes("yes")){
                  alert("What happened "+person+"?");
                  var answer = prompt("Are your parents fighting?");
                  if(answer.includes("yes")||answer.includes("Yes")){
                    alert("Dont worry "+person+", it is normal for our parents to fight, to argue, shouting to each other. Just remember that they are your parents and they wont leave you.");
                    alert("Dont think negative things like they will get divorce or something. Fighting is normal. Rest easy and keep on praying");
                  }
                  else {
                    alert("Family problems will be solve in no time. If your parents are still there then you are one lucky child. Just keep on praying because there are no problems given by the Lord that cant be solve.");
                  }
                }
                else{
                  alert("I cant help you with that if you are keep in answering No");
                  alert("I hope you will find peace in your life. Just remember that be strong because life will not go easy on you");
                }
              }
    }
    else{
      alert("Good to hear that you are not sad");
      var ans = prompt("What made you feel like that? Is it because of your crush?");

        if(ans.includes("yes")|| ans.includes("Yes")){
         var ans = prompt("Did you confessed to her?");
            if(ans.includes("Yes")|| ans.includes("yes")){
              var ans = prompt("Does she have feelings on you too?");
              if(ans.includes("yes")||ans.includes("Yes")){
                alert("Congrats "+person+", you've just won in life. I'm so happy that you are happy and the feelings are mutual.");
                alert("Just remember that take it easy and dont rush things.");
                alert("God bless and I hope that both of you will be happy always :)");
              }
              else {
                alert("It's ok that feelings are not mutual. There is still a lot of time for you to win her over");
                alert("MAN UP!!!! Just do things that can make her happy. Eventually, she will fall for you :))");
              }
            }
            else {
              alert("Then what so about with your crush?");
              alert("I hope you will be forever happy with your crush :)). God bless you both");
            }
        }
        
        else {
          alert("Then why are feeling like that?");
          var ans = prompt("Is it because of you've just won 5 games of DotA?");
          if(ans.includes("yes")||ans.includes("Yes")){
            alert("HAHAHAHAHAHAHAHAH, you know what "+person+" I can relate. I also play DotA like you during when I'm still studying");
            alert("But right now, I cant give time to DotA anymore becuase of my work");
            alert("Good thing that yoy are so happy because of DotA. Even though it is just a video game it still makes us happy");
            alert("Just remember that dont be consume in your DotA because it will make you an addict");
            alert("Enjoy life "+person+" and I hope that you will be doing good in life :))");
          }
          else{
            alert("If you are keep in answering 'NO' then I cant help you.");
            alert("Good thing that we've spent a little time together I hope you will do good things in life. God bless you");
          }
        }
    }

}

function williamShakespeare(){
  return "William Shakespeare (bapt. 26 April 1564 – 23 April 1616) was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist.He is often called England's national poet and the.His extant works, including collaborations, consist of some 39 plays, 154 sonnets, two long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright.They also continue to be studied and reinterpreted. \n\nShakespeare was born and raised in Stratford-upon-Avon, Warwickshire. At the age of 18, he married Anne Hathaway, with whom he had three children: Susanna and twins Hamnet and Judith. Sometime between 1585 and 1592, he began a successful career in London as an actor, writer, and part-owner of a playing company called the Lord Chamberlain's Men, later known as the King's Men. At age 49 (around 1613), he appears to have retired to Stratford, where he died three years later. Few records of Shakespeare's private life survive; this has stimulated considerable speculation about such matters as his physical appearance, his sexuality, his religious beliefs, and whether the works attributed to him were written by others.\n\nShakespeare produced most of his known works between 1589 and 1613. His early plays were primarily comedies and histories and are regarded as some of the best work produced in these genres. He then wrote mainly tragedies until 1608, among them Hamlet, Romeo and Juliet, Othello, King Lear, and Macbeth, all considered to be among the finest works in the English language.In the last phase of his life, he wrote tragicomedies (also known as romances) and collaborated with other playwrights.\n\nMany of Shakespeare's plays were published in editions of varying quality and accuracy in his lifetime. However, in 1623, two fellow actors and friends of Shakespeare's, John Heminges and Henry Condell, published a more definitive text known as the First Folio, a posthumous collected edition of Shakespeare's dramatic works that included all but two of his plays.The volume was prefaced with a poem by Ben Jonson, in which Jonson presciently hailed Shakespeare in a now-famous quote as not of an age, but for all time.";
}

function loremIpsum(){
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum odio felis. Donec tempor vestibulum nulla quis faucibus. Cras in ex nisi. Etiam volutpat eleifend quam, non blandit mi facilisis ac. Mauris porta, orci vitae euismod finibus, nisi ligula posuere quam, ac tincidunt mauris erat id ipsum. Proin ac odio vulputate, congue dolor eget, congue erat. In hac habitasse platea dictumst. Sed eget magna a sapien facilisis placerat nec a tellus. Fusce eget dictum turpis. Ut elementum facilisis posuere. Duis nec lobortis quam. Vestibulum imperdiet risus sit amet justo consequat tempus. Nam auctor, dolor et varius cursus, mi ante dignissim odio, quis feugiat ipsum nunc quis dui. Mauris nulla eros, lobortis id felis quis, placerat iaculis orci. Proin nec lacus lacus. Donec aliquam volutpat nunc, sed tristique lorem gravida quis. Proin dictum vulputate ipsum, at semper turpis pharetra consectetur. In quis congue orci, at lacinia eros. Mauris at ligula id urna sagittis dictum accumsan sit amet felis. Donec lorem felis, facilisis ac lobortis a, vestibulum et ex. Integer ligula sem, finibus non tortor quis, posuere euismod sapien. Mauris hendrerit nulla sit amet accumsan posuere. Nam rutrum mi id tempor varius. Proin at posuere odio, ut sodales nunc.";
}
