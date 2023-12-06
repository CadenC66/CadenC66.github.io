// byo intro
var courses = [];
function addCourse() {
    const coursesSection = document.getElementById("courses-section");

    const courseContainer = document.createElement("div");
    courseContainer.classList.add("course-container");

    const courseInput = document.createElement("input");
    courseInput.type = "text";
    courseInput.placeholder = "Enter course name";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        let courseIndex = courses.indexOf(courseInput.value);
        if (courseIndex !== -1) {
            courses.splice(courseIndex, 1);
        }
        coursesSection.removeChild(courseContainer);
    };

    courseContainer.appendChild(courseInput);
    courseContainer.appendChild(deleteButton);

    coursesSection.appendChild(courseContainer);

    courses.push(courseInput.value);
}
function validateForm() {
    let formInputs = document.querySelectorAll('input[required], textarea[required]');
    let nameInput = document.getElementById("name");
    let mascotInput = document.getElementById("mascot");
    let imageInput = document.getElementById("image");

    if (nameInput.value.trim() === "" || mascotInput.value.trim() === "" || !imageInput.files[0]) {
      alert("Please fill in Name, Mascot, and select an Image");
      return false;
    }

    for (let i = 0; i < formInputs.length; i++) {
        if (!formInputs[i].checkValidity()) {
          alert("Please fill in all required fields");
          return false; 
        }
    }

  
    let courseInputs = document.querySelectorAll('.course-container input[type="text"]');
    courseInputs.forEach(courseInput => {
        courses.push(courseInput.value);
    });

    generateIntroPage();

    return false;
}

function resetForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("introPage").style.display = "none";
}

function generateIntroPage() {
 
    let name = document.getElementById("name").value;
    let mascot = document.getElementById("mascot").value;
    let imageCaption = document.getElementById("imageCap").value;
    let imageInput = document.getElementById("image");
    let imageFile = imageInput.files[0];
    let imageURL = URL.createObjectURL(imageFile);
    let personalBackground = document.getElementById("personalBackground").value;
    let proffessionalBackground = document.getElementById("proffessionalBackground").value;
    let academicBackground = document.getElementById("academicBackground").value;
    let webdevBackground = document.getElementById("webdevBackground").value;
    let primaryPlatform = document.getElementById("primaryPlatform").value;
    let funnyThing = document.getElementById("funnyThing").value;
    let anythingElse = document.getElementById("anythingElse").value;

 
    let nameHeader = name + "'s Introduction || " + mascot;
    let introMessage = "<br><img src='" + imageURL + "' alt='User Image'>";
    introMessage += "<br><center><i>'"+ imageCaption +"'</i></center>";
    introMessage += "<br><ul><li><b>Personal Background:</b> "+personalBackground+ "</li>  ";
    introMessage += "<li><b>Professional Background:</b> "+proffessionalBackground+ "</li>  ";
    introMessage += "<li><b>Academic Background:</b> "+academicBackground+ "</li>  ";
    introMessage += "<li><b>Web Development Background:</b> "+webdevBackground+ "</li>  ";
    introMessage += "<li><b>Primary Platform:</b> "+primaryPlatform+ "</li>  ";
    introMessage += "<li><b>Courses:</b> "
    introMessage += "<ul>"; 
    let courseInputs = document.querySelectorAll('.course-container input[type="text"]');
courseInputs.forEach(function(courseInput) {
    let courseValue = courseInput.value.trim();  
    if (courseValue !== "") {
        introMessage += "<li><b>" + courseValue + "</b></li>";
    }
});
    introMessage += "</ul>"
    introMessage += "<li><b>Funny Thing:</b> "+funnyThing+ "</li>  ";
    introMessage += "<li><b>Anything Else:</b> "+anythingElse+ "</li> ";
    introMessage += "<li><b>I understand that what is on this page is not password protected and I will not put anything here that I don't want publicly available. - "+name+"</b></li></ul> ";

    document.getElementById("myForm").style.display = "none";
    document.getElementById("introPage").style.display = "block";
    document.getElementById("nameHeader").innerHTML = nameHeader;
    document.getElementById("introMessage").innerHTML = introMessage;
}