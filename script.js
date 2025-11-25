/* 
   Hanexa Premium Website - Global Scripts 
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
        });
    }

    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // --- Typewriter Effect (Home Page) ---
    const typewriterElement = document.getElementById('typewriter-text');
    if (typewriterElement) {
        const text = "Hanexa";
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                typewriterElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 200);
            }
        }
        
        // Start after a small delay
        setTimeout(typeWriter, 500);
    }

    // --- Form Validation (Join & Contact) ---
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const inputs = form.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'var(--neon-pink)';
                } else {
                    input.style.borderColor = 'rgba(255,255,255,0.1)';
                }
            });

            if (isValid) {
                // Simulate submission
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.innerText;
                btn.innerText = 'Sending...';
                
                setTimeout(() => {
                    alert('Message sent successfully! We will contact you soon.');
                    form.reset();
                    btn.innerText = originalText;
                    
                    // If it's the Join form, open Google Form (Placeholder)
                    if (form.id === 'join-form') {
                        // window.open('https://forms.google.com/your-form-id', '_blank');
                    }
                }, 1500);
            } else {
                alert('Please fill in all required fields.');
            }
        });
    });

    // --- Active Link Highlighting ---
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

});
