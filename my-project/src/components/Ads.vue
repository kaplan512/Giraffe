<template>
    <div>
        <div v-if="currentAds.length" >
            <div class = "ads" v-for="ad in currentAds">
                <router-link class = "link" :to="`/${ad.id}`">{{ad.title}}</router-link>
                <div>{{ad.description}}</div>
                <div>{{ad.user}}</div>
                <div>{{ad.date}}</div>
                <router-link v-if="ad.user === currentUser" class = "link" :to="`delete/${ad.id}`">delete</router-link>
            </div>
        </div>

        <paginate v-if="ads.length > this.pageSize"
                :page-count="pageCount"
                :click-handler="onPaginate"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'">
        </paginate>
    </div>
</template>

<script>
    import Paginate from 'vuejs-paginate'
    export default {
        components: {
            Paginate
        },
        name: "Ads",
        props: ['currentUser'],
        data() {
            return {
                ads: [],
                currentAds: [],
                pageSize: 5,
                pageCount: 0
            }
        },
        methods: {
            onPaginate(pageNum) {
                this.currentAds = this.ads.slice(this.pageSize * (pageNum - 1), this.pageSize * pageNum);
            }
        },
        created: function () {
            this.currentUser = localStorage.getItem('current user');
        },
        mounted: function() {
            if(localStorage.getItem('ads')){
                this.ads = JSON.parse(localStorage.getItem('ads'));
            }
            this.pageCount = Math.ceil(this.ads.length / this.pageSize);
            this.onPaginate(1);
        }
    }
</script>

<style scoped>
    .ads {
        border: 1px solid blue;
        width: 300px;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 15px;
    }
    .pagination {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>