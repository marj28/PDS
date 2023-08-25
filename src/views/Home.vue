<template>
 <div class="d-flex-row d-sm-flex">
      <div class="pa-3 bg-deep-purple">
        <h1>Title 1</h1>
        <small>March 23 2023</small>
        <P class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci,
           iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, 
          expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</P>

    </div>
    <div class="pa-2 bg-black h-auto">
        <h1>Title 2</h1>
        <small>March 23 2023</small>
        <P class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci,
           iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, 
          expedita quis laboriosam, ullam facere adipisci, iusto,
           voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</P>
     
    </div>
    <div class="pa-2 bg-deep-purple h-auto">
        <h1>Title 2</h1>
        <small>March 23 2023</small>
        <P class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci,
           iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, 
          expedita quis laboriosam, ullam facere adipisci, iusto,
           voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</P>
     
    </div>
    </div>
  
 <div class="d-flex justify-center align-center py-6 bg-surface-variant h-50">
  <v-sheet v-for="n in 1" :key="n" class="ma-2 pa-2 align-self-start w-25">
  <h1>Centered element</h1>
        <small>March 23 2023</small>
        <P class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci,
           iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Harum maiores modi quidem veniam, 
          expedita quis laboriosam,
           ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</P>
        </v-sheet>
 </div>
 <div class="d-flex justify-center align-center py-6 bg-surface-variant h-50">
  <v-sheet v-for="n in 1" :key="n" class="ma-2 pa-2 w-25">
  <h1>Centered element</h1>
        <small>March 23 2023</small>
        <P class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci,
           iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Harum maiores modi quidem veniam, 
          expedita quis laboriosam,
           ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</P>
        </v-sheet>
 </div>
</template>

<script setup>
  
</script>
