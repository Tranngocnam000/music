<template>
    <div class="basis-1/4 h-screen bg-slate-700">
      <div class="flex flex-col items-center gap-20 pt-9">
        <img src="../assets/images/sound.png" alt="" class="h-[100px]" />
        <div>
          <img
            :src="listSong[this.idSong].links.images[0].url"
            alt=""
            class="h-[200px] w-[200px] object-cover m-auto"
          />
          <p class="text-[20px] font-medium text-center mt-8 font-sans text-white">{{listSong[idSong].name}}</p>
          <audio
            autoplay
            preload:="auto"	
            controls
            :src="listSong[this.idSong].url">
          </audio>
          <div class="flex gap-3 p-4">
            <button @click="prevSong()">
              <fa icon="fa-fast-backward" class="text-white"/>
            </button>
            <button @click="nextSong()">
              <fa icon="fa-fast-forward" class="text-white"/>
            </button>
          </div>
          <!-- <h1>{{listSong[this.idSong].links.images[0].url}}</h1> -->
          <!-- <button @click="searchSong()" class="border-solid border-black border-2">Search</button>
          <input type="text" v-model="keySearch"/>
          <h2>{{keySearch}}</h2> -->
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
    export default{
        name: "detail_song",
        data(){
            return{

            }
        },
        computed: {
          ...mapGetters(['listSong', 'idSong']),
        },
        methods: {
            ...mapActions(['prevSong','nextSong']),
        },
    }
</script>

<style>

</style>