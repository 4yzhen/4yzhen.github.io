window.onload = getAvatar();

async function getAvatar() {
const response = await fetch('https://api.spotify.com/v1/artists/1K286sc38Io5vwfMXuPjRi', {
    headers: {
        'Authorization': 'Bearer BQBsQVURfTZ3tiN5mCrZwJO6GXWZburDCewhAwHHPC52TNOrlcXqenPGfQ9GVhS7woeqAHxZaielE3acYTwyzlxqykubmVpNqBmQIbUN5LGiasVBvFIQ',
    },
});

const text = await response.text();
document.getElementById("avatar").src = JSON.parse(text).images[0].url;
}