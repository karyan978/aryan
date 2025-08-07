document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function () {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('i');
    const html = document.documentElement;

    darkModeToggle.addEventListener('click', function () {
        html.classList.toggle('dark-mode');

        if (html.classList.contains('dark-mode')) {
            icon.classList.remove('ri-moon-line');
            icon.classList.add('ri-sun-line');
        } else {
            icon.classList.remove('ri-sun-line');
            icon.classList.add('ri-moon-line');
        }
    });
});


var tl = gsap.timeline()

tl.from("#logo", {
    rotateY: "90deg",
    duration: 1,
    delay: 0.5,
    repeat: -1,
    repeatDelay: 2,
    ease: "linear",

})
tl.from("#name", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 0.1,

})
tl.from("#desktop-menu a", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    stagger: 0.3,
})
tl.from("#desktop-menu button", {
    x: 30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
})
tl.from("#backToTop", {
    y: -30,
    duration: 1,
    delay: 0.5,
    repeat: -1,
    repeatDelay: 2,
    ease: "linear",
})

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "0% 20%",
        end: "50% 50%",
        scrub: true,
        background: "red",
        // markers: true,
    }
})
gsap.registerPlugin(ScrollTrigger);

gsap.to("nav", {
    backgroundColor: "#333446", // ya jo bhi color chahiye
    duration: 0.3,
    scrollTrigger: {
        trigger: "body",
        start: "90vh top", // jahan se change start ho
        toggleActions: "play reverse play reverse",
        markers: false
    }
});

tl2.from("#about-content p", {
    x: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
})
tl2.from("#profile-image", {
    x: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
})
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#skills",
        start: "0% 30%",
        end: "100% 100%",
        scrub: true,
        // markers: true,
    }
})
tl3.from(".skill-card i, .skill-card img", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
})
var tl4 = gsap.timeline({scrollTrigger:{
  trigger: "#projects",
    start: "-10% 0%",
    end: "50% 70%",
    scrub: true,
    // markers: true,
}})
tl4.from(".card-hover1",{
    y: 20,
    opacity: 0,
})
tl4.from(".card-hover2",{
    y: 20,
    opacity: 0,
})
tl4.from(".card-hover3",{
    y: 20,
    opacity: 0,
})
tl4.from(".card-hover4",{
    y: 20,
    opacity: 0,
})
tl4.from(".card-hover5",{
    y: 20,
    opacity: 0,
})
tl4.from(".card-hover6",{
    y: 20,
    opacity: 0,
})
tl4.from(".card-hover7",{
    y: 20,
    opacity: 0,
})
let mm = gsap.matchMedia();

mm.add("(min-width:1000px)",()=>{

    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#resume",
            start: "30% 30%",
            end: "90% 100%",
            scrub: true,
            // markers: true,
        }
    })
    
    tl5.to("#img2", {
        rotateX: "0deg",
        duration: 5,
    })
        .to("#img3", {
            rotateX: "0deg",
            duration: 20,
        })
        .to("#resume-container", {
            scale: "0.5",
            marginTop: "20vh",
        })
        .to("#text", {
            marginTop: "100vh",
            scale: 1.2,
            ease: "power2.out",
            duration: 1.5,
        }, 'a')
        .to("#text", {
            marginTop: "-100vh",
            scale: 1.2,
            ease: "power2.out",
            marginLeft: "22vh",
            duration: 1.5,
            //   marginLeft: "30vh"
        }, 'a')
        .to(".overlay", {
            opacity: 0.5,
            ease: "power2.out",
            duration: 2.5,
        }, 'a')
    

})

mm.add("(max-width:800px)",()=>{

    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#resume",
            start: "0% 30%",
            end: "90% 100%",
            scrub: true,
            // markers: true,
        }
    })
    
    tl5.to("#img2", {
        rotateX: "0deg",
        duration: 5,
    })
        .to("#img3", {
            rotateX: "0deg",
            duration: 20,
        })
        .to("#resume-container", {
            scale: "0.6",
            marginTop: "20vh",
        })
        .to("#text", {
            marginTop: "100vh",
            scale: 1.2,
            ease: "power2.out",
            duration: 1.5,
        }, 'a')
        .to("#text", {
            marginTop: "-60vh",
            scale: 1.2,
            ease: "power2.out",
            duration: 1.5,
            //   marginLeft: "30vh"
        }, 'a')
        .to(".overlay", {
            opacity: 0.5,
            ease: "power2.out",
            duration: 2.5,
        }, 'a')
    

})

mm.add("(max-width:500px)",()=>{

    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#resume",
            start: "0% 30%",
            end: "90% 100%",
            scrub: true,
            // markers: true,
        }
    })
    
    tl5.to("#img2", {
        rotateX: "0deg",
        duration: 5,
    })
        .to("#img3", {
            rotateX: "0deg",
            duration: 20,
        })
        .to("#resume-container", {
            scale: "0.6",
            marginTop: "20vh",
        })
        .to("#text", {
            marginTop: "100vh",
            scale: 1.2,
            ease: "power2.out",
            duration: 1.5,
        }, 'a')
        .to("#text", {
            marginTop: "-60vh",
            scale: 1.2,
            ease: "power2.out",
            duration: 1.5,
            //   marginLeft: "30vh"
        }, 'a')
        .to(".overlay", {
            opacity: 0.5,
            ease: "power2.out",
            duration: 2.5,
        }, 'a')
    

})

mm.add("(max-width:400px)",()=>{

    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#resume",
            start: "0% 30%",
            end: "90% 100%",
            scrub: true,
            // markers: true,
        }
    })
    
    tl5.to("#img2", {
        rotateX: "0deg",
        duration: 5,
    })
        .to("#img3", {
            rotateX: "0deg",
            duration: 20,
        })
        .to("#resume-container", {
            scale: "0.6",
            marginTop: "20vh",
        })
        .to("#text", {
            marginTop: "100vh",
            scale: 1.2,
            ease: "power2.out",
            duration: 1.5,
        }, 'a')
        .to("#text", {
            marginTop: "-50vh",
            scale: 0.3,
            ease: "power2.out",
            duration: 1.5,
            //   marginLeft: "30vh"
        }, 'a')
        .to(".overlay", {
            opacity: 0.5,
            ease: "power2.out",
            duration: 2.5,
        }, 'a')
    

})










var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
        start: "0% 0%",
        end: "50% 70%",
        scrub: true,
        stagger: 0.3,

        // markers: true,
    }
})
tl6.from("#contact-animation", {
    x: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
})
tl6.from("#contact-form", {
    x: 30,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.3,
})

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const titles = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];
    const images = [
        "asset/Aryan-Kumar.png",
        "asset/Aryan-Kumar.png",
        "asset/Aryan-Kumar.png"
    ];

    let index = 0;
    const roleElement = document.getElementById('role');
    const profileImage = document.getElementById('profile-image');

    // Initial animation
    gsap.to("#greeting", { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });
    gsap.to("#subheading", { opacity: 1, y: 0, duration: 0.8, delay: 0.4 });
    gsap.to("#role", { opacity: 1, y: 0, duration: 0.8, delay: 0.6 });
    gsap.to("#cta-button", { opacity: 1, y: 0, duration: 0.8, delay: 0.8 });
    gsap.to("#image-container", { opacity: 1, scale: 1, duration: 0.8, delay: 1 });

    // Role switcher
    setInterval(() => {
        index = (index + 1) % titles.length;

        gsap.to(roleElement, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            onComplete: () => {
                roleElement.textContent = titles[index];
                gsap.to(roleElement, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                });
            }
        });

        gsap.to(profileImage, {
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
            onComplete: () => {
                profileImage.src = images[index];
                gsap.to(profileImage, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5
                });
            }
        });
    }, 3000);
});


document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('download-resume');

    downloadButton.addEventListener('click', function (e) {
        e.preventDefault();

        // Create a dummy PDF file and trigger download
        const link = document.createElement('a');
        link.href = '#'; // In a real scenario, this would be the path to the resume PDF
        link.download = 'asset/Aryan-resume.jpg';
        link.click();
    });
});

// const textBox = document.getElementsByClassName('scroll-Box');

// // When user scrolls anywhere in the container
// document.getElementById('about-content').addEventListener('wheel', function (e) {
//     e.preventDefault(); // stop default scroll
//     textBox.scrollTop += e.deltaY; // manually scroll textBox
// }, { passive: false });

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,  // scroll speed
    effects: true
});

function openResume() {
    window.open('asset/Aryan-resume.jpg', '_blank');
}

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = this;

    emailjs.sendForm("service_hu6rzzf", "template_jv8uoss", form)
        .then(function () {
            form.reset();
            showModal(); // Show the success modal
        }, function (error) {
            console.log("Failed...", error);
            alert("Failed to send message. Please try again.");
        });
});

// Function to show the modal
function showModal() {
    document.getElementById("successModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("successModal").style.display = "none";
}

// Optional: close when clicking outside the modal
window.onclick = function(event) {
    const modal = document.getElementById("successModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
