// get references to the form and dislplay area
var form = document.getElementById('resume-form');
var resumeDisplayElent = document.getElementById('resume-display');
// Handle Form Submition
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3><b>Personal Information</b><h3>\n<p><b>Name:</b> ".concat(name, "</p>\n<p><b>Email:</b> ").concat(email, "</p>\n<p><b>Phone:</b> ").concat(phone, "</p>\n\n<h3><b>Education</b><h3>\n<p>").concat(education, "</p>\n\n<h3><b>Experience</b><h3>\n<p>").concat(experience, "</p>\n\n<h3><b>Skills</b><h3>\n<p>").concat(skills, "</p>\n");
    // dsiplay the  generated resume in the display 
    if (resumeDisplayElent) {
        resumeDisplayElent.innerHTML = resumeHTML;
    }
    else {
        console.error('Element with id "resume-display" not found');
    }
});
