<template>
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
        <tbody class="bg-slate-800 text-white">
          <tr class="h-[50px] cursor-pointer hover:bg-slate-600" 
            v-for="(song, index) in listSongs" :key="index"
            @click="onPlay(song.id)"
            :class="{ active_on_play: (this.idSong===song.id) }"
            >
            <td class="text-center">{{song.id + 1}}</td>
            <td class="text-center">{{song.name}}</td>
            <td class="text-center">{{song.author}}</td>
            <td class="text-center"><a :href="song.url"><fa icon="download"/></a></td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default{
        name: "list_song",
        data(){
            return{
            }
        },
        components: {

        },
        props: ['listSongs','idSong'],
        methods: {
            onPlay(id){  
            this.$emit('onPlay', id);
            console.log("id in lisist song", id);
            },
        }
    }
</script>

<style scoped>
.active_on_play{
  background-color:#475569;
  color: #5eead4;
}
</style>