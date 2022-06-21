function playVideo(selector_video, selector_button, video_id, player) {
    let video = document.querySelector(selector_video)
    let video_click = document.querySelector(selector_button)
    let vimeo, youtube, src


    video_click.addEventListener('click', function (e) {
        e.preventDefault()

        vimeo = `<iframe class="w-full aspect-video" src="https://player.vimeo.com/video/${video_id}?h=1bd5e52f0c&autoplay=1&color=6666FF&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
        youtube = `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/${video_id}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=2&fs=1" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

        if (player === 'youtube') {
            src = youtube
        } else if (player === 'vimeo') {
            src = vimeo
        } else {
            src = 'Não possível reproduzir o vídeo'
        }

        video.innerHTML = src


    })
}

// hcitt97R1Vk
// quYodSv0Wr0
playVideo('#video-venda', '#video-venda-click', '722372564', 'vimeo')
playVideo('#video-conheca-shantala', '#video-conheca-shantala-click', '722398900', 'vimeo')