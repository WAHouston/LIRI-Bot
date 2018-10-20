console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.bit = {
    id: process.env.BITK
}

exports.omdb = {
    key: process.env.OMDBK
}