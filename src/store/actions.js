export default {
    prevSong(context) {
        context.commit('prevSong', context.state.idSong);
    },
    nextSong(context) {
        context.commit('nextSong', context.state.idSong);
    }
}