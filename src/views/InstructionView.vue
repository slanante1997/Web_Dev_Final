<template>
    <div>
    <h1 class="d-flex align-center justify-center">
      ChatGPT Demo
    </h1>
  </div>
  <div >
    <p class="d-flex align-center justify-center">This is a wep application for using text-to-speech with ChatGPT.</p>
    <p class="d-flex align-center justify-center"> To use the app, simply navigate to</p><router-link to="/chatgpt" class="d-flex align-center justify-center"> ChatGPT </router-link>
  </div>
    <div class="about">
      <v-card>
        <v-card-title> This is a vue/vuetify class! </v-card-title>
        <v-card-subtitle> (College Class) </v-card-subtitle>
  
        <v-card-text>
          Lorem ipsum dolor sit amet blah blah blah
          <v-icon icon="mdi:mdi-abacus" />
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>