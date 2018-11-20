var playlist = {
  'Greenday':'American Idiot',
  'Blink 182':'First Date'
};

function  updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}