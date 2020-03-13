getTopTrendingGIFs(10);

function getTopTrendingGIFs(limit) {
    let request = new XMLHttpRequest();
    let requestUrl = `https://api.giphy.com/v1/gifs/trending?api_key=tCU8z1XPO7JQe95gcEKJT2seTTrYr9lc&limit=${limit}&rating=G`;
    request.open('GET', requestUrl);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var response = request.response;
        var imageUrls = response.data.map(d => d.images.original.url);
        for (let i = 0; i < imageUrls.length; i++) {
            const gif = document.createElement('img');
            gif.src = imageUrls[i];
            document.getElementById('body').appendChild(gif);
        }
    }
}