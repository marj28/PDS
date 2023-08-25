<template>
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
      
      <div class=" pa-6 bg-secondary rounded-circle d-inline-block"
       style="margin-left: 70px;
       margin-top: 30px;
       width: 120px;
       height:120px" ></div>


<div class="d-flex flex-column mb-6 bg-surface-variant">
  <v-sheet class="ma-2 pa-3">Hello Earth </v-sheet>
  <v-sheet class="ma-2 pa-3">Hello Earth </v-sheet>
  <v-sheet class="ma-2 pa-3">Hello Earth </v-sheet>
  <v-sheet class="ma-2 pa-3">Hello Earth </v-sheet>
 </div>
      </v-navigation-drawer>
  
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>



  
      <v-main>
        
        <div class="d-flex-row d-sm-flex">
            <div class="pa-2 ma-4 bg-deep-purple h-auto">
        <h1>Title 1</h1>
        <small>March 23 2023</small>
        <P class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci,
           voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</P>
     
    </div>
    <div class="pa-2 ma-4 bg-black h-auto">
        <h1>Title 2</h1>
        <small>March 23 2023</small>
        <P class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci,
           voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</P>
     
    </div>
    <div class="pa-2 ma-4 bg-deep-purple h-auto">
        <h1>Title 3</h1>
        <small>March 23 2023</small>
        <P class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci,
           voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</P>
     
    </div>
    <div class="pa-2 ma-4 bg-black h-auto">
        <h1>Title 4</h1>
        <small>March 23 2023</small>
        <P class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci,
           voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</P>
     
    </div>
    </div>
    <div class="d-flex flex-row-reverse mb-6 bg-surface-variant mt-3 ml-3 mr-3">
                <v-sheet class="ma-2 pa-2" style="height: 680px; width: 400px; background-color: black; color:green">
                    10110111011011101110111011011011
                <br>01010010101010001010110010101<br>101010101010100101010101010<br>1-1010101011010101010101010<br>1000100010001100111011100
                <br>10001000100011001110111001101000111
                <br>10001000100011001110111001110100110111
                <br>10001000100011001110111001101001011
                <br>10001000100011001110111001010101
                <br>1000100010001100111011100110101011
                </v-sheet>
                <div class="d-flex flex-column-reverse mb-6 bg-surface-variant" style="width: 100%;">
                    <v-sheet class="ma-2 pa-2" style="height: 300px; background-color: purple; color:white">Flex item<SecondComponent/></v-sheet>
                    <v-sheet class="ma-2 pa-2" style="height: 350px; background-color: black; color:aliceblue">Flex item 1</v-sheet>

                </div>
            </div>
      </v-main>
    </v-app>
  </template>
  
  <script>
    export default {
      data: () => ({ drawer: null }),
    }
  </script>