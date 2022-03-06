import React from "react";

export default function Contact() {
    return (
        <>
        <section id="contact" class="contact-section">
            <div class="contact-section-header">
                <h2>Let's work together...</h2>
                <p>How do you take your coffee?</p>
            </div>
            
            <div class="contact-links">
            <a
                id="profile-link"
                href="https://github.com/CURIOSITYUFAZ/front-design"
                target="_blank"
                class="btn contact-details"
                ><i class="fab fa-github"></i> GitHub
            </a>
            
            <a
                id="linkedin"
                href="https://github.com/CURIOSITYUFAZ/front-design"
                target="_blank"
                class="btn contact-details"
                ><i class="fab fa-linkedin"></i>LinkedIn
            </a>
            <a href="mailto:example@example.com" class="btn contact-details"
                ><i class="fas fa-at"></i> Send a mail
            </a>
            <a href="tel:555-555-5555" class="btn contact-details"
                ><i class="fas fa-mobile-alt"></i> Call me
            </a>
            </div>
        </section>
        </>
    )
}