
export function autoplayVideo() {
    const videoContainers = document.querySelectorAll('.showreel__video-body');
    
    videoContainers.forEach(container => {
        const video = container.querySelector('video.lazy');
        const timeDisplay = container.querySelector('.video-lazy__time p');
        
        if (!video || !timeDisplay) return;
        
        // Создаем спан для минут и секунд
        timeDisplay.innerHTML = '<span class="minutes">00</span>:<span class="seconds">00</span>';
        
        const minutesSpan = timeDisplay.querySelector('.minutes');
        const secondsSpan = timeDisplay.querySelector('.seconds');
        
        // Функция обновления времени
        function updateTimeDisplay() {
            if (video.duration) {
            const remainingTime = video.duration - video.currentTime;
            const minutes = Math.floor(remainingTime / 60);
            const seconds = Math.floor(remainingTime % 60);
            
            minutesSpan.textContent = String(minutes).padStart(2, '0');
            secondsSpan.textContent = String(seconds).padStart(2, '0');
            }
        }
        
        // Обработчики событий
        video.addEventListener('loadedmetadata', function() {
            updateTimeDisplay();
            video.addEventListener('timeupdate', updateTimeDisplay);
        });
        
        video.addEventListener('ended', function() {
            minutesSpan.textContent = '00';
            secondsSpan.textContent = '00';
        });
        });
    
        // Ваш существующий код для ленивой загрузки
        var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
        
        if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
            if (video.isIntersecting) {
                for (var source in video.target.children) {
                var videoSource = video.target.children[source];
                if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                    videoSource.src = videoSource.dataset.src;
                }
                }
                
                video.target.load();
                video.target.classList.remove("lazy");
                lazyVideoObserver.unobserve(video.target);
            }
            });
        });
        
        lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
}
