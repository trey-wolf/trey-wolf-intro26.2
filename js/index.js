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

