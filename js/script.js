// navbar icon 

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section active link 
let  sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }

    })
    // sticky navbar--------------
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100 );

//removing toggle icon when clicked navbar link
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
}


// scroll reveal 
ScrollReveal({
     reset: false,
     distance:'80px',
     duration:2000,
     delay :200
    });
    ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box,.contact form ', { origin: 'bottom' });
    
    ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });


    // ==================typed js ========
    const typed=new Typed('.multiple-text',{
        strings:['Full-Stack Web Developer','Student ',' and Open Source Contributer'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:100,
        loop:true
    })

    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      
      function createSkillElement(skill) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <span class="skill-name">${skill.name}</span>
          <div class="skill-bar">
            <div class="skill-level"></div>
          </div>
        `;
      
        const skillLevel = listItem.querySelector(".skill-level");
        const backgroundColor = getRandomColor();
        skillLevel.style.backgroundColor = backgroundColor;
      
        // Animate the width of the skill level bar
        skillLevel.style.animationDuration = "1s";
        skillLevel.style.animationTimingFunction = "ease-in-out";
        skillLevel.style.animationFillMode = "forwards";
        skillLevel.style.animationName = "progressAnimation";
        skillLevel.style.width = skill.level;
      
        return listItem;
      }
      
      const skillsData = [
        
        { name: "React", level: "70%" },
        { name: "JavaScript", level: "70%" },
        { name: "C++", level: "70%" },
        { name: "Python", level: "70%" },
        { name: "React", level: "70%" },
        { name: "Mongodb", level: "70%" },

        { name: "HTML", level: "80%" },
        { name: "CSS", level: "75%" },
        
        // Add more skills as needed
      ];
      
      const skillsList = document.getElementById("skills-list");
      
      skillsData.forEach((skill) => {
        const skillElement = createSkillElement(skill);
        skillsList.appendChild(skillElement);
      });
      