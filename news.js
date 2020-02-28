function goodNews(){
  document.body.style.backgroundColor = "#fff";
  document.getElementById("title").innerHTML = "Multi-millionaire Landowner's SHOCKING Proposal";
  document.documentElement.style.setProperty("--text-color", "black");
  document.documentElement.style.setProperty("--bg-color", "white");
  document.documentElement.style.setProperty("--nav", "white");

  //first article - proposal
  document.getElementById("first-img").src="images/proposal.png";
  document.getElementById("date").innerHTML = "28 January 1813";
  document.getElementById("desc").innerHTML = "No one saw the heir to Pemberley Estate, Fitzwilliam Darcy's proposal to Elizabeth Bennett coming - not even Elizabeth herself! Last Spring, an unnamed source reported that the two had parted on bad terms. Now their wedding is set to happen in the Summer of this year.";
  document.getElementById("location").innerHTML = "Hertfordshire";

  //first article - Explorer
  document.getElementById("title2").innerHTML = "Explorer Found Alive After Shipwreck - Discovers Island";
  document.getElementById("date2").innerHTML = "28 October 1726";
  document.getElementById("desc2").innerHTML = "Nautical Explorer, Lemuel Gulliver, was presumed deceased after his ship was discovered wrecked on the East Coast three years ago. He returned last Thursday with news of an undiscovered island, Lilliput, populated by a civilisation of 'little people'.";
  document.getElementById("location2").innerHTML = "UK-wide";
  document.getElementById("second-img").src="images/island.png";

  //third article - Gatsby
  document.getElementById("title3").innerHTML = "The Best Dressed At Gatsby's Summer Gala '25";
  document.getElementById("date3").innerHTML = "10 April 1925";
  document.getElementById("desc3").innerHTML = "Gatsby's Summer Gala was the best yet, guests say. Louisville Socialite Daisy Buchanan became the talk of the evening, wearing a beaded evening dress designed by Coco Chanel and T-strap heels. Rumour has it, she has caught the eye of Gatsby himself.";
  document.getElementById("location3").innerHTML = "Long Island, US";
  document.getElementById("third-img").src="images/gatsby.png";
}

function badNews(){
  document.body.style.backgroundColor = "black";
  document.documentElement.style.setProperty("--bg-color", "grey");
  document.documentElement.style.setProperty("--nav", "black");
  document.documentElement.style.setProperty("--text-color", "white");


  //first article - vampire
  document.getElementById("title").innerHTML = "Another Victim Claimed By Mysterious Neck Biter";
  document.getElementById("date").innerHTML = "26 May 1897";
  document.getElementById("desc").innerHTML = "Bride-to-be, Lucy Westenra, is the latest in a chain of homocide investigations where the victims died from loss of blood resulting from a deep wound on their necks. Vampire expert, Van Helsing, calls for a curfew to put be in place and urges citizens to stay within the safety of their own homes after sunset.";
  document.getElementById("location").innerHTML = "Whitby";
  document.getElementById("first-img").src="images/vampire.png";

  //second article - raven
  document.getElementById("title2").innerHTML = "Man Kept Awake At Night By Malignant Spirit Is Hospitalized";
  document.getElementById("date2").innerHTML = "26 January 1845";
  document.getElementById("desc2").innerHTML = "A man has been institutionalized after reportedly being kept awake for over 30 days and 30 nights by a raven visiting his home. He believes it to be a malignant spirit taking the form of a bird. Psychiatrists say it is delusion brough about due to the trauma of losing his partner.";
  document.getElementById("location2").innerHTML = "Philadelphia, US";
  document.getElementById("second-img").src="images/raven.png";

  //third article - sherlock
  document.getElementById("title3").innerHTML = "World-class Detective Sherlock Holmes Found Dead";
  document.getElementById("date3").innerHTML = "19 December 1893";
  document.getElementById("desc3").innerHTML = "In what is being described his 'final problem', Detective Holmes was discovered deceased in the early hours of this morning by his colleage, Doctor John Watson. A homocide investigation is yet to be announced, but witness testimonies point towards foul play from Holmes' arch nemisis, James Moriarty.";
  document.getElementById("location3").innerHTML = "London";
  document.getElementById("third-img").src="images/sherlock.png";
}
