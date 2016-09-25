var bio = {
    "name": "Jennell Lewis",
    "role": "Web Developer",
    "contacts": {
        "mobile": "409-782-8816",
        "email": "jennellrenai@gmail.com",
        "github": "jrenai07",
        "twitter": "@JennellRenai",
        "location": "Austin, TX",
    },
    "welcomeMessage": "Aloha and Mahalos for considering my Resume!",
    "skills": ["HTML/CSS", "Javascript", "Python",
        "JQuery | Node.Js | Angular.Js"
    ],
    "bioPic": "images/me.jpg",
};
bio.display = function() {
    var name = bio.name;
    var formattedName = HTMLheaderName.replace("%data%", name);
    var role = bio.role;
    var formattedRole = HTMLheaderRole.replace("%data%", role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var mobile = bio.contacts.mobile;
    var formattedMobile = HTMLmobile.replace("%data%", mobile);
    $("#topContacts").append(formattedMobile);
    var email = bio.contacts.email;
    var formattedEmail = HTMLemail.replace("%data%", email);
    $("#topContacts").append(formattedEmail);
    var github = bio.contacts.github;
    var formattedGithub = HTMLgithub.replace("%data%", github);
    $("#topContacts").append(formattedGithub);
    var twitter = bio.contacts.twitter;
    var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
    $("#topContacts").append(formattedTwitter);
    var _location = bio.contacts.location;
    var formattedLocation = HTMLlocation.replace("%data%", _location);
    $("#topContacts").append(formattedLocation);
    var bioPic = bio.bioPic;
    var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
    $("#header").append(formattedBioPic);
    var welcomeMessage = bio.welcomeMessage;
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",
        welcomeMessage);
    $("#header").append(formattedWelcomeMessage);
    if (bio.skills.length > 0) {
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
};
bio.display();
var work = {
    "jobs": [{
        "employer": "Charles Schwab",
        "title": "Stock Broker",
        "location": "Austin, TX",
        "dates": "2012-2014",
        "description": "Series 7 & 63 licensed broker. I worked on the active trader team, helping clients place trades and understand our active trading tools"
    }, {
        "employer": "Dance Austin Studio",
        "title": "Dance Instructor",
        "location": "Austin, TX",
        "dates": "2012-Present",
        "description": "I teach adult dance classes including, Hip Hop, Technique 101, Jazz, Limber & Lengthen, and Video Vixen."
    }]
};
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[
            i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[
            i].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%",
            work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();
var education = {
    "schools": [{
        "name": "Hawaii Pacific University",
        "location": "Honolulu, Hawaii",
        "degree": "B.A.",
        "majors": ["Internation Relations", "Spanish"],
        "dates": "2007-2011",
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }, {
        "title": "Full Stack Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }]
};
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%",
            education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",
            education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",
            education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",
            education.schools[i].location);
        var formattedSchoolMajors = HTMLschoolMajor.replace("%data%",
            education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolName +
            formattedSchoolDegree, formattedSchoolDates,
            formattedSchoolLocation, formattedSchoolMajors);
    }
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedCourseSchool = HTMLonlineSchool.replace("%data%",
            education.onlineCourses[i].school);
        var formattedCourseTitle = HTMLonlineTitle.replace("%data%",
            education.onlineCourses[i].title);
        var formattedCourseDates = HTMLonlineDates.replace("%data%",
            education.onlineCourses[i].dates);
        var formattedCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[
            i].url);
        $(".education-entry:last").append(formattedCourseTitle +
            formattedCourseSchool, formattedCourseDates,
            formattedCourseUrl);
    }
};
education.display();
var projects = {
    "projects": [{
        "title": "Jrenai.com",
        "dates": "2014-Present",
        "description": "Personal blog about my journey to achieve my life goals and live the life I truly want to live.",
        "images": [
            "http://jrenai.com/wp-content/uploads/2016/01/PASSIONS-FINALS-JPEG.jpg",
            "http://jrenai.com/wp-content/uploads/2016/01/GOALS-JPEG.jpg"
        ]
    }, {
        "title": "GoBorderless.com",
        "dates": "2014-Present",
        "description": "An adventure travel database for sport and travel enthusiast.",
        "images": [
            "http://goborderless.co/wp-content/uploads/2014/12/gosymbolweb1.png",
            "http://goborderless.co/wp-content/uploads/2014/12/Trekking.png"
        ]
    }]
};
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[
            i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[
            i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",
            projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[i].images.length > 0) {
            for (image in projects.projects[i].images) {
                var formattedImage = HTMLprojectImage.replace("%data%",
                    projects.projects[i].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();
$("#mapDiv").append(googleMap);