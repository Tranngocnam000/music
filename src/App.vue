<template>
  <div id="music" class="flex flex-row ">
    <div class="basis-1/4 h-screen bg-slate-700">
      <div class="flex flex-col items-center gap-20 pt-9">
        <img src="./assets/images/sound.png" alt="" class="h-[100px]" />
        <div class="wrapper_info_song">
          <img
            :src="listSongs[idSong].links.images[0].url"
            alt=""
            class="h-[200px] w-[200px] object-cover m-auto"
          />
          <p class="text-[20px] font-medium text-center mt-8 font-sans text-white">{{listSongs[idSong].name}}</p>
          <audio
            autoplay
            preload:="auto"	
            controls
            :src="listSongs[idSong].url">
          </audio>
          <div class="flex gap-3 p-4">
            <button @click="prevSong()">
              <fa icon="fa-fast-backward" class="text-white"/>
            </button>
            <button @click="nextSong()">
              <fa icon="fa-fast-forward" class="text-white"/>
            </button>
          </div>
          <button @click="searchSong()" >HIIIIII</button>
          <input type="text" v-model="keySearch"/>
          <h2>{{keySearch}}</h2>
          <!-- <div>
            <audio-player
              ref="audioPlayer"
              :audio-list="listSongs[idSong].url"
              theme-color="#ff2929"
            />
          </div> -->

        </div>
      </div>
    </div>
    <div class="basis-3/4 h-screen overflow-y-scroll">
      <table class="table-fixed w-full border-collapse relative">
        <thead class="h-[70px] w-full sticky top-0 left-0 bg-slate-700">
          <tr class="w-full text-white">
            <th class="w-[10%]"></th>
            <th class="w-[45%] text-xl">Song</th>
            <th class="w-[25%] text-xl">Artist</th>
            <th class="w-[20%] text-xl">Download</th>
          </tr>
        </thead>
        <tbody v-for="index in 10" :key="index" class="bg-slate-800 text-white">
          <tr class="h-[50px] cursor-pointer hover:bg-slate-600" 
            v-for="(song, index) in listSongs" :key="index"
            @click="onPlay(song.id)"
            :class="{ active_on_play: (idSong===song.id) }"
            >
            <td class="text-center">{{song.id + 1}}</td>
            <td class="text-center">{{song.name}}</td>
            <td class="text-center">{{song.author}}</td>
            <td class="text-center"><a :href="song.url"><fa icon="download"/></a></td>
          </tr>
        </tbody>
      </table>
      <div class="song_action border-solid border-2 border-rose-500 fixed bottom-0 right-0">hihi</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      listSongs : DataSongs,
      idSong : 0,
      listSongsFilter: [],
      keySearch: "Sing me to sleep",
      currentAudioName: '',
      audioList: [
        {
          name: 'audio1',
          url: 'https://www.0dutv.com/upload/dance/F25F74A0B8FF82503241801D0E2CA5CD.mp3'
        },
        {
          name: 'audio2',
          url: 'https://www.0dutv.com/upload/dance/20200316/C719452E3C7834080007662021EA968E.mp3'
        }
      ],
    }
  },
  components: {
    // AudioPlayer,
  },
  methods: {
    onPlay(id){
      this.idSong = id;   
    },
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
    searchSong(){
      if(this.keySearch != ''){
        this.listSongsFilter = this.listSongs.filter(song => song.name.search(this.keySearch));
      console.log(this.listSongsFilter);
      }
    }
    // text(){
    //   console.log("pause song!!!");
    // },
    // text1(){
    //   console.log("pause song!!!");
    // }
  },
  watch: {
    
  }
};
import DataSongs from './data/songs.json';
// import AudioPlayer from '@liripeng/vue-audio-player'
</script>
<style>
.active_on_play{
  background-color:#475569;
  color: #5eead4;
}
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
