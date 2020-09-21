<template>
  <div>
    <p>{{ greeting }} {{ greeter }}</p>  
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      greeting: "Hello world from",
      greeter: "Vue Js"
    };
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>