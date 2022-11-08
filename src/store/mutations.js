export default {
    onPlay(state, id) {
        state.idSong = id;
    },
    prevSong(state, idSong) {
        state.idSong = (idSong == 0 ? (state.listSong.length - 1) : (idSong - 1));
    },
    nextSong(state, idSong) {
        state.idSong = (idSong == (state.listSong.length - 1) ? 0 : (idSong + 1));
    },
}