var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var res = JSON.parse(xhttp.responseText)
        var videoData = res.items.map(function (item) {
            return item.snippet
        });

        //    initialize the content container
        var contentContainer = document.querySelector('#video-divs');
        videoData.forEach(function (video) {
            console.log(video)
            var videoDiv = document.createElement('div');
            videoDiv.classList.add('videoDiv');
            videoDiv.innerHTML = `
                    <img src=${video.thumbnails.high.url} >
                    <h6>${video.title}</h6>`;

            contentContainer.appendChild(videoDiv);

        });
    }
};
xhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=Triple+Jump&type=video&maxResults=4&key=AIzaSyDvzCwOEp-M31sFovCG9aeJhZgvFb27a8M", true);
xhttp.send();