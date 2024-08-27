let currentMeme = 0;
const memes = [
  "meme1.jpg",
  "meme2.jpg",
  "meme3.jpg"
];

function updateLoadingBar() {
  const loadingScreen = document.getElementById('loading-screen');
  const loadingBar = document.querySelector('.spinner');
  let width = 0;

  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      loadingScreen.style.display = 'none';
     
    } else {
      width += 50;
      if (width % 33 === 0) {
        currentMeme = (currentMeme + 1) % memes.length;
        document.getElementById('meme').src = memes[currentMeme];
      }
    }
  }, 100);
}

window.onload = updateLoadingBar;

document.getElementById('learn-more-btn').addEventListener('click', function() {
  var details = document.getElementById('learn-more-details');
  if (details.style.display === 'none') {
    details.style.display = 'block';
    this.textContent = 'LESS';
  } else {
    details.style.display = 'none';
    this.textContent = 'MORE';
  }
});
document.getElementById('loadMoreBtn').addEventListener('click', function() {
  const projectsSlider = document.getElementById('projectsSlider');
  
  // Sample new projects to be added
  const newProjects = `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="project-item h-100">
      <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FMemesByUneeb%2Fvideos%2F1504336743824241%2F&show_text=false&width=476&t=0" width="476" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        <div class="project-links d-flex align-items-center justify-content-center">
         
        </div>
      </div>
    </div>
    <!-- Add more new projects here -->
  `;

  // Append new projects to the slider
  projectsSlider.insertAdjacentHTML('beforeend', newProjects);
});
