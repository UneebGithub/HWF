        document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const wrapper = document.querySelector(".wrapper");

    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;

    let isDragging = false,
        startX,
        startScrollLeft,
        timeoutId;

    const dragStart = (e) => { 
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
    

        const newScrollLeft = startScrollLeft - (e.pageX - startX);
    
        
        if (newScrollLeft <= 0 || newScrollLeft >= 
            carousel.scrollWidth - carousel.offsetWidth) {
            
            
            isDragging = false;
            return;
        }
    
        
        carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
        isDragging = false; 
        carousel.classList.remove("dragging");
    };

    const autoPlay = () => {
    
        
        if (window.innerWidth < 800) return; 
        
        
        const totalCardWidth = carousel.scrollWidth;
        
        
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
        
        
        if (carousel.scrollLeft >= maxScrollLeft) return;
        
        
        timeoutId = setTimeout(() => 
            carousel.scrollLeft += firstCardWidth, 2500);
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    wrapper.addEventListener("mouseenter", () => 
        clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? 
                -firstCardWidth : firstCardWidth;
        });
    });
});


document.getElementById('learn-more-btn').addEventListener('click', function() {
    var moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'Learn More';
    }
});


document.querySelectorAll('.learn-more-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var moreInfo = this.previousElementSibling;
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
            moreInfo.style.display = 'block';
            this.textContent = 'Less';
        } else {
            moreInfo.style.display = 'none';
            this.textContent = 'More';
        }
    });
});


window.onload = function() {
    document.getElementById('notification').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
};


document.getElementById('close-notification').onclick = function() {
    document.getElementById('notification').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
};