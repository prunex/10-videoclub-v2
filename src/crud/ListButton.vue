<template>
    <button
        type="button"
        class="btn btn-default btn-sm"
        v-bind:title="buttonTitle"
        v-on:click="clicked"
    >
        <span 
            v-bind:class="glyphicon"
        ></span>
    </button>
</template>

<script>
    export default {
      name: "list-button",
      props: ["buttonTitle", "glyphiconType"],
      computed:{
          glyphicon(){
              return "glyphicon glyphicon-" + this.glyphiconType;
          }
      },
      methods:{
          clicked: function(){
              this.$emit("clic");
          }
      }
    }
</script>

