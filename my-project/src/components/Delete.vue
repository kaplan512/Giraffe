<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "Delete",
        data () {
            return {
                id: this.$route.params.id,
                ads: {}
            }
        },
        created: function() {
            if(localStorage.getItem('ads')){
                let arr = JSON.parse(localStorage.getItem('ads'));
                for (let i in arr){
                    if(arr[i].id == this.id){
                        arr.splice(i, 1);
                        localStorage.setItem('ads',JSON.stringify(arr));
                        this.$router.push('/')
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>