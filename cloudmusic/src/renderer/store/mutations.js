import * as types from './mutation-types'

const mutations = {
    [types.SET_USERNAME](state,userName) {
        state.userInfo.userName = userName
    },
    [types.SET_PASSWORD](state,password) {
        state.userInfo.password = password
    },
    [types.SET_USERID](state,id) {
        state.userInfo.userId = id
    },
    [types.SET_NICKNAME](state,nickName) {
        state.userInfo.nickName = nickName
    },
    [types.SET_AVATARURL](state,avatarUrl) {
        state.userInfo.avatarUrl = avatarUrl
    },
    [types.SET_COLLECTSONGLIST](state,collectSongList) {
        state.userInfo.collectSongList = collectSongList
    },
    [types.SET_COLLECTSONG](state,collectSong) {
        state.userInfo.collectSong = collectSong
    },
    [types.SET_COLLECTSINGER](state,collectSinger) {
        state.userInfo.collectSinger = collectSinger
    },
    [types.SET_COLLECTALBUM](state,collectAlbum) {
        state.userInfo.collectAlbum = collectAlbum
    },

    [types.SET_SINGER](state,singer) {
        state.songs.singer = singer
    },
    [types.SET_PLAY_STATE](state,flag) {
        state.songs.playing = flag
    },
    [types.SET_FULL_SCREEN](state,flag) {
        state.songs.fullScreen = flag
    },
    [types.SET_PLAYLIST](state,list) {
        state.songs.playList = list
    },
    [types.SET_SEQUENCE_LIST](state,list) {
        state.songs.sequenceList = list
    },
    [types.SET_PLAY_MODE](state,mode) {
        state.songs.mode = mode
    },
    [types.SET_CURRENT_INDEX](state,index) {
        state.songs.currentIndex = index
    },
    [types.SET_AUDIO](state,audio) {
        state.songs.audio = audio
    },
    [types.SET_PLAYHISTORYLIST](state,playHistoryList) {
        state.songs.playHistoryList = playHistoryList
    },
    [types.SET_LOADING](state,status) {
        state.loading = status
    }
}

export default mutations