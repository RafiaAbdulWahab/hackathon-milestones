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
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n<h3><b>Personal Information</b><h3>\n<p><b>Name:</b><span contenteditable =\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable =\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b><span contenteditable =\"true\">").concat(phone, "</span></p>\n\n<h3>Education<h3>\n<p contenteditable =\"true\">").concat(education, "</p>\n\n<h3>Experienceh3>\n<p contenteditable =\"true\">").concat(experience, "</p>\n\n<h3>Skills<h3>\n<p contenteditable =\"true\">").concat(skills, "</p>\n");
    // dsiplay the  generated resume in the display 
    if (resumeDisplayElent) {
        resumeDisplayElent.innerHTML = resumeHTML;
    }
    else {
        console.error('Element with id "resume-display" not found');
    }
});
