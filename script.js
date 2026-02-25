function handleJoinSubmit(event) {
    event.preventDefault();
    alert('Thank you for your application! We will review your resume and contact you soon.');
    event.target.reset();
}

function handleContactSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you as soon as possible.');
    event.target.reset();
}
