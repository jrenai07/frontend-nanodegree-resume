var bio = {
    "name" : "Jennell Renai Lewis",
    "role": "Web Developer",
    "contacts": {
        "mobile": "409-782-8816",
        "email": "jennellrenai@gmail.com",
        "github": "jrenai07",
        "twitter": "@JennellRenai",
        "location": "Austin, TX",
    },
    "welcomeMessage": "Aloha and Mahalos for considering my Resume!",
    "skills": [
    "Ruby", "Ruby on Rails", "HTML/CSS","Javascript" 
    ],
    "bioPic": "images/me.jpg",
}

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
}

var work = {
    "jobs": [
    {
        "employer": "Charles Schwab",
        "title": "Stock Broker",
        "location": "Austin, TX",
        "dates": "2011-2013",
        "description" : "Series 7 & 63 licensed broker. I worked on the active trader team, helping clients place trades and understand our active trading tools"
    },
    {
        "employer": "Dance Austin Studio",
        "title": "Dance Instructor",
        "location": "Austin, TX",
        "dates": "2011-Present",
        "description" : "I teach adult dance classes including, Hip Hop, Technique 101, Jazz, Limber & Lengthen, and Video Vixen."
    }
  ]
}
for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(
        formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(
        formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(
        formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(
        formattedDescription);
}
    