<template>
    <br>
    <div>
      <h1 class="text-h2" style="text-align: center; color: darkcyan; font-family: sans-serif; font-weight: lighter;">ChatGPT Instructions</h1>
  </div>
  <br>
  <div >
    <p class="d-flex align-center justify-center">This is a wep application for using text-to-speech with ChatGPT.</p>
    <p class="d-flex align-center justify-center"> To use the app, simply navigate to</p><router-link to="/chatgpt" class="d-flex align-center justify-center"> ChatGPT </router-link>
    <p class="d-flex align-center justify-center"> Once here, click the button that looks like this </p>
    <p class="d-flex align-center justify-center"> <v-btn variant="outlined" class="text-h6" style="min-height: 60px; min-width: 200px; color: teal; border-color: black; border-width: 1.5px;">Ask question <v-icon>mdi-microphone</v-icon></v-btn></p> 
    <p class="d-flex align-center justify-center"> Once you click the button to ask a question you may need to accept your browser's request to access your microphone.</p>
    <p class="d-flex align-center justify-center"> Now you are using text-to-speech with ChatGPT!</p>
  </div>
  
    <!-- <div class="about">
      <v-card>
        <v-card-title> This is a vue/vuetify class! </v-card-title>
        <v-card-subtitle> (College Class) </v-card-subtitle>
  
        <v-card-text>
          Lorem ipsum dolor sit amet blah blah blah
          <v-icon icon="mdi:mdi-abacus" />
        </v-card-text>
      </v-card>
    </div> -->
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