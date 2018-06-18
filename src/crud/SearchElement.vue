<template>
    <div class="form-group">
        <label for="mySearch">Search element: </label>
        <input 
            type="search" 
            name="mySearch" 
            placeholder="Search by name" 
            v-model="search"
            v-on:input="change"
        >
    </div>
</template>
<script>
export default {
    name: "SearchElement",
    data(){
        return{
            search: ""
        }
    },
    methods:{
        change: function(){
            this.$emit("search", this.search)
        }
    }
}
</script>
