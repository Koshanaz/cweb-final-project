<template>
  <div id="app">
    <!-- pills style -- https://bootstrap-vue.org/docs/components/nav#pill-style    -->
    <b-nav pills align="center" class="mb-4">
      <!-- Vue router support -- https://bootstrap-vue.org/docs/components/nav#using-with-vue-router     -->
      <b-nav-item to="/" exact-active-class="active"> Home </b-nav-item>
      <b-nav-item to="/about" exact-active-class="active"> About </b-nav-item>
      <b-nav-item to="/student" exact-active-class="active"> Student </b-nav-item>
      <b-nav-item to="/product" exact-active-class="active"> Product </b-nav-item>
    </b-nav>
    <router-view class="container-xl" debug />
  </div>
</template>
