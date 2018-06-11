<template>
    <button 
        v-bind:title="buttonTitle" 
        v-bind:class="glyphicon" 
        v-on:click="clicked"
    >{{ buttonTitle }}</button>
</template>

<script>
    export default {
        name: "GeneralButton",
        data(){
            return{

            }
        },
        components: {

        },
        props: ["buttonTitle", "typeGlyphicon"],
        computed:{
            glyphicon(){
                return "btn btn-" + this.typeGlyphicon;
            }
        },
        methods: {
            clicked: function(){
                this.$emit("clic");
            }
        }
    }
</script>

<style>
</style>

