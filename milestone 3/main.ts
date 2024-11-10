// get references to the form and dislplay area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElent = document.getElementById('resume-display') as HTMLDivElement;

// Handle Form Submition
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    
const resumeHTML =`
<h2><b>Resume</b></h2>
<h3><b>Personal Information</b><h3>
<p><b>Name:</b> ${name}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Phone:</b> ${phone}</p>

<h3>Education<h3>
<p>${education}</p>

<h3>Experienceh3>
<p>${experience}</p>

<h3>Skills<h3>
<p>${skills}</p>
`;

// dsiplay the  generated resume in the display 

if (resumeDisplayElent) {
    resumeDisplayElent.innerHTML = resumeHTML;

} else {
    console.error('Element with id "resume-display" not found');
}

});

