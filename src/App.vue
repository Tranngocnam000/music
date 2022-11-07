<template>
  <div id="music" class="flex flex-row ">
    <DetailSong 
    :listSongs="listSongs"
    :idSong="idSong"
    @prevSong="prevSong"
    @nextSong="nextSong"
    />
    <ListSong
    :listSongs="listSongs"
    :idSong="idSong"
    @onPlay="onPlay"
    />
</div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      listSongs : DataSongs,
      keytest:"",
      idSong : 0,
      listSongsFilter: [],
      keySearch: "",
    }
  },
  components: {
    DetailSong,
    ListSong,
  },
  props: {

  },
  methods: {
    
    prevSong(){
      if(this.idSong == 0){
        this.idSong = this.listSongs.length - 1;
      } else {
        this.idSong = this.idSong - 1;
      }
    },
    nextSong(){
      if(this.idSong == (this.listSongs.length - 1)){
        this.idSong = 0;
      } else {
        this.idSong = this.idSong + 1;
      }
    },
    onPlay(id){  
      console.log("id in app", id);
      this.idSong = id;
    },
    // searchSong(){
    //   if(this.keySearch != ''){
    //     this.listSongsFilter = this.listSongs.filter(song => song.name.toUpperCase().includes(this.keySearch.toUpperCase()));
    //   console.log(this.listSongsFilter);
    //   }
    // },
  },
  watch: {
    
  },
};
import DataSongs from './data/songs.json';
// import AudioPlayer from '@liripeng/vue-audio-player'
import DetailSong from "./components/detailsong.vue"
import ListSong from "./components/listsong.vue"
</script>
<style>

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
