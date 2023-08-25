<template>
  <v-toolbar>
    <v-toolbar-header class="text-center font-weight-bold"
      >MAPPING STATION</v-toolbar-header
    >
  </v-toolbar>
  <div>
    <div style="height: 500px; width: 100%">
      <l-map
        ref="map"
        :center="center"
        v-model:zoom="zoom"
        
       @click="mouseOver"
        
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
        <l-circle-marker
          :lat-lng="[7.446957366322584, 125.80609379303112]"
          :radius="50"
        />

        <template v-for="(user, i) in locationList" :key="i">
          <l-marker :radius="10" :lat-lng="user.LatLng"></l-marker>
        </template>

        <!-- <l-marker :lat-lng="[7.446957366322584, 125.80609379303112]" :radius="50" /> -->
        <l-control-scale position="bottomleft" />
        <!-- <l-control-zoom position="bottomright" zoom-in-text="*" zoom-out-text="/" /> -->
      </l-map>
    </div>
    <code>{{ `[${this.current[0]}, ${this.current[1]}]` }}</code>

    <v-container>
      <v-row>
        <v-col cols="6" lg="4" md="4">
          <v-text-field
            label="Name"
            v-model="Name"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="6" lg="3" md="3">
          <v-text-field
            label="Latitude"
            variant="outlined"
            v-model="this.current[0]"
          ></v-text-field>
        </v-col>
        <v-col cols="6" lg="3" md="3">
          <v-text-field
            label="Longitude"
            variant="outlined"
            v-model="this.current[1]"
          ></v-text-field>
        </v-col>
        <v-col cols="6" lg="2" md="2">
          <v-btn size="large" class="mt-1" @click="insertLocations">SAVE</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center">
      <ul>
        <li v-for="(items, i) in locationList" :key="i">
          {{ items.Name }} - {{ items.Latitude }} - {{ items.Longitude }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LCircleMarker,
  LMarker,
  LControlScale,
  //   LControlZoom,
} from "@vue-leaflet/vue-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LCircleMarker,
    LMarker,
    LControlScale,
    // LControlZoom,
  },
  data() {
    return {
      current: [0, 0],
      locationList: [],
      center: [7.446957366322584, 125.80609379303112],
      zoom: 50,
      map: null,
      branch: [
        {
          Name: "Branch 1",
          Address: "Gemini Village",
          geoloc: [7.425913, 125.82812],
        },
        {
          Name: "Branch 2",
          Address: "Fronting USEP",
          geoloc: [7.422885, 125.83105],
        },
      ],
    };
  },
  mounted() {
    this.map = this.$refs.map;
    
  },
  methods: {
    insertLocations() {
      this.locationList.push({
        Name: this.Name,
        Latitude: this.current[0],
        Longitude: this.current[1],
        LatLng: this.current
      });
      console.log("Location =>", this.locationList);
    },

    
    onReady(ev) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log("Position=> ", position);
          const { latitude, longitude } = position.coords;
          this.center = [latitude, longitude];
          console.log("Position=> ", [latitude, longitude]);
        });
      }
    },
    mouseOver(ev) {
      var latlng = this.map.leafletObject.mouseEventToLatLng(ev);
      this.current = [latlng.lat, latlng.lng];
      console.log("current=>", this.current);
    },
    clickEvent(ev) {
      // console.log("Leaflet=> ", this.map.leafletObject);
      console.log("clickevent")
      ev.preventDefault();
      var latlng = this.map.leafletObject.mouseEventToLatLng(ev);
      this.customMarkers.push({
        location: [latlng.lat, latlng.lng],
        draggable: true,
      });
    },
  },
};
</script>