<template>
  <div id="music" class="flex flex-row ">
    <DetailSong />
      <!-- <input type="text" 
      class="border-solid border-black border-2" 
      v-model="keySearch"
      />
      <button @click="searchSong()" class="border-solid border-2 border-red-700">Search</button> -->
    <ListSong />
</div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      listSongFilter: [],
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
    // searchSong(){
    //   this.listSong = DataSongs;
    //   if(this.keySearch != ''){
    //     this.listSong = this.listSong.filter(
    //       song => song.name.toUpperCase().includes(this.keySearch.toUpperCase())
    //     );
    //   }
    // },
  },
};
import DetailSong from "./components/detailsong.vue"
import ListSong from "./components/listsong.vue"
</script>
<style>

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
