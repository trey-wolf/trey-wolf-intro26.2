const foot = document.createElement('footer');
foot.className = 'footer'
document.body.append(foot);

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('.footer');
const copyright = document.createElement('p');

copyright.innerHTML = `\xA9 Trey Wolf - ${thisYear}`;
foot.append(copyright);

const skills = ['JavaScript', 'HTML', 'CSS', "Python", "GitHub", "AI Prompting", "Java"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (var i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerText = (skills[i]);
    skillsList.appendChild(skill);
}

const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function(event){
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');

    newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <br>
    <span>${usersMessage}</span>
    <br>
    `;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', function(){
        const entry = removeButton.parentNode;
        entry.remove();
    })

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
})