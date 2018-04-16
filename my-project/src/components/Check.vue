<template>
    <div>
        <div class = "ads" >
            <div class = "ad-title">{{ads.title}}</div>
            <div class = "ad-description">{{ads.description}}</div>
            <div>{{ads.user}}</div>
            <div>{{ads.date}}</div>
            <router-link v-if="ads.user === loggedUSer" class = "link" :to="`delete/${id}`">delete</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Check",
        data () {
            return {
                id: this.$route.params.id,
                ads: {},
                loggedUSer: localStorage.getItem('current user')
            }
        },
        mounted: function() {
            if(localStorage.getItem('ads')){
                let arr = JSON.parse(localStorage.getItem('ads'));
                for (let i in arr){
                    if(arr[i].id == this.id){
                        this.ads = arr[i];
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .ads {
        border: 1px solid blue;
        width: 300px;
        border-radius: 5px;
        padding: 10px;
        margin: 15px auto;
    }
    .ad-title {
        text-align: center;
        text-transform: uppercase;
        font-weight: 600;
    }
</style>