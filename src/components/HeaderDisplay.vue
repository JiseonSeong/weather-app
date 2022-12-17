<template>
  <header class="header">
    <h2>Weather Application</h2>
    <p>Welcome, {{ username }}!</p>
  </header>
</template>

<script>
export default {
  name: "HeaderDisplay",
  props: {
    username: {
      type: String,
      default() {
        return "Raina";
      },
    },
  },
};
</script>

<style scoped>
.header {
  background: linear-gradient(45deg, #1c92d2, #f2fcfe);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
}

.header h2 {
  color: #fff;
}

.header p {
  font-size: 12px;
  color: #000;
}
</style>
