<template>
  <ul>
    <li><router-link to="/">Start</router-link></li>
    <li><router-link to="/about">About</router-link></li>
  </ul>
</template>

<style scoped>
  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }

  ul li {
    list-style: none;
  }

  ul li a {
    font-size: 1.4rem;
  }
</style>
