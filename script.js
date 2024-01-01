function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatContainer = document.getElementById("chat-container");

    // Create a new message element
    const messageElement = document.createElement("div");
    messageElement.className = "message";
    messageElement.textContent = userInput;

    // Append the message to the chat container
    chatContainer.appendChild(messageElement);

    // Clear the input field
    document.getElementById("user-input").value = "";
}
function refreshPage() {
    location.reload();
}

function displayResponse(prompt) {
    const chatContainer = document.getElementById("chat-container");
    const responseDiv = document.createElement("div");
    responseDiv.className = "message";

    switch (prompt.toLowerCase()) {
        case 'projects':
            responseDiv.innerHTML = "I have worked on various projects, including a sleek digital portfolio using React, Vite, and 3D rendering.";
            break;
        case 'skills':
            responseDiv.innerHTML = "My skills include JavaScript, HTML, C++, Web Development, Android Studio, Java, Web Design, Networking, and Cyber Security.";
            break;
        case 'about':
            responseDiv.innerHTML = `
                I am Navish Ansari, currently pursuing a Bachelor's degree in Information Technology at the Universal College of Engineering. 
            `;
            break;
        case 'hii':
            responseDiv.innerHTML = 'kya bolta bhai kaisa hai??';
            break;
            case 'hi':
            responseDiv.innerHTML = 'kya bolta bhai kaisa hai??';
            break;
        case 'education':
            responseDiv.innerHTML = `
                I am currently pursuing a Bachelor's degree in Information Technology at the Universal College of Engineering. I started my tech journey with a Diploma in IT from NESP, Thane, where I achieved an impressive 84.64%.
            `;
            break;
        case 'work experience':
            responseDiv.innerHTML = `
                As a lead coder at Star X Innovation, a startup I co-founded, I played a vital role in shaping our growth. My responsibilities included overseeing coding projects and contributing to our overall development strategy.
            `;
            break;
        case 'accomplishment':
            responseDiv.innerHTML = `
                I have completed several certifications, including Introduction to Cybersecurity, Networking Basics by Cisco, Front End Development - HTML by Great Learning, and Python by Morya Infusion.
            `;
            break;
        case 'languages':
            responseDiv.innerHTML = `
                I am proficient in English, Hindi, and Urdu, which enables effective communication in diverse settings.
            `;
            break;
        
        case 'interests':
            responseDiv.innerHTML = `
                Beyond academics, my interests include cyber security, hacking, networking, web development, and gaming.
            `;
            break;
        case 'goals':
            responseDiv.innerHTML = `
                My goal is to excel in my studies, gain practical experience, and make a positive impact on society through technology. I am eager to contribute to IT innovations and carve a successful career path aligning my skills and passion to drive meaningful change.
            `;
            break;
        case 'certificate':
            responseDiv.innerHTML = `
        CERTIFICATES
        <ul>
            <li>
                Introduction to Cybersecurity (09/2023 - 10/2023) BY CISCO
                <br><a href="https://www.credly.com/badges/f9b291a9-53a0-4cb1-aff3-f6beaf1bf7ee/linked_in_profile" target="_blank"><br>link</a>
            </li> <br>
            <li>Networking Basics (10/2023 - 12/2023) BY CISCO<br><a href="https://www.credly.com/badges/2fad1691-e74e-4d70-83de-de1bfab4ff72/linked_in_profile"target-"_blank"><br>link</a></li><br>
           
            <li>Front End Development - HTML (08/2023 - 09/2023) BY GREAT LEARNING</li><br>

            <li>Python (08/2019 - 11/2019) BY MORYA INFUSION</li><br>
        </ul>
    `;
    break;
        case 'portfolio':
            responseDiv.innerHTML = 
            `
           
            <ul>
                <li>'here is my portfolio link open in desktop or in iphone not comptaible for android'</li><br>
                <li> <a href="https://portfolio-iota-six-29.vercel.app/" target="_blank"><br>portfolio</a>
            </ul>
            `;
            break;
            case 'linkedin':
                responseDiv.innerHTML = 
                `
                <ul>
                    <li>'here is my linkedin profile'</li>
                    <li> <a href="https://www.linkedin.com/in/ansari-navish-1313a72a5/" target="_blank"><br>linkedin</a>
                </ul>
                `;
                break;
                case 'github':
                responseDiv.innerHTML = 
                `
                <ul>
                    <li>'here is my github profile'</li>
                    <li> <a href="https://github.com/na-klaus" target="_blank"><br>github profile</a>
                </ul>
                `;
                break;
                
                default:
                    responseDiv.innerHTML = `
                        I'm sorry, I didn't understand that prompt. Please type one of the following:
                        <ul>
                            <li>'projects'</li>
                            <li>'skills'</li>
                            <li>'about'</li>
                            <li>'education'</li>
                            <li>'work experience'</li>
                            <li>'accomplishment'</li>
                            <li>'languages'</li>
                            <li>'interests'</li>
                            <li>'goals'</li>
                            <li>'certificate'</li>
                            <li>'portfolio'</li>
                            <li>'linkedin'</li>
                            <li>'github'</li>
                        </ul>
                        to get more information.
                    `;
                    break;
                
    }

    chatContainer.appendChild(responseDiv);
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    displayResponse(userInput);
    document.getElementById("user-input").value = "";
}


