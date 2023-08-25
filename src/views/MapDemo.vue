<template>
  <h1>USING LEAFLET AND OPEN STREET MAP</h1>
  <div style="height: 900px; width: 1500px">
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :center="[7.446957366322584, 125.80609379303112]"
    >
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap"></l-tile-layer>
      <l-circle-marker :lat-lng="[7.446957366322584, 125.80609379303112]" :radius="50" />

    <template v-for="(user, i) in branch" :key="i" >
        <l-marker :radius="10" :lat-lng="user.geoloc"></l-marker>
    </template>
    <l-polyline :lat-lngs="[
        [7.426023, 125.827026],
        [7.424188, 125.825342],
        [7.422784, 125.826388],
        [7.423935, 125.828162],
        [7.424453, 125.828559],
        [7.425995, 125.827028]
      ]"
      color="green">
        
    </l-polyline>

      <!-- <l-marker :lat-lng="[7.446957366322584, 125.80609379303112]" :radius="50" /> -->
      <l-control-scale position="bottomleft" />
      <!-- <l-control-zoom position="bottomright" zoom-in-text="*" zoom-out-text="/" /> -->
    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LCircleMarker,
  LMarker,
  LControlScale,
  LPolyline
  //   LControlZoom,
} from "@vue-leaflet/vue-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LCircleMarker,
    LMarker,
    LControlScale,
    LPolyline,
    // LControlZoom,
  },
  data() {
    return {
      zoom: 10,
      branch: [
        {
        Name: 'Branch 1',
        Address: 'Gemini Village',
        geoloc: [7.425913, 125.828120]
        },
        {
        Name: 'Branch 2',
        Address: 'Fronting USEP',
        geoloc: [7.422885, 125.831050]
        }
      ]
    };
  },
};
</script>