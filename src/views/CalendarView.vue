<template>
  <div class="d-flex flex-row justify-center align-center h-100 mb-5">
    <v-btn @click="navigate(-1)" class="ma-2">Prev</v-btn>
    <v-btn @click="today" class="ma-2 bg-green">Today</v-btn>
    <v-btn @click="navigate(1)" class="ma-2">Next</v-btn>
  </div>
  <div class="h-100 d-flex flex-row justify-center align-center">
    <VCalendar
    expanded
      borderless
      :attributes="attrs"
      :step="2"
      :rows="2"
      ref="calendar"
      show-weeknumbers="left"
      transition="fade"
      @dayclick="eventHandler"
      view="weekly"
    >
    </VCalendar>
  </div>
  <div>
    <v-dialog v-model="dialog">
      <v-card>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Event Date"
              v-model="inputdata.date"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Event Name"
              v-model="inputdata.name"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-col cols="6" lg="2" md="2">
          <v-btn size="large" class="mt-1" @click="insertDate">SAVE</v-btn>
        </v-col>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  mounted() {
    this.calendar = this.$refs.calendar;
  },
  methods: {
    
    insertDate() {
      this.eventList.push(this.inputdata);

      this.attrs.push({
        dot: "green",
        dates: [new Date(this.inputdata.date)],
        popover: {
            label: this.inputdata.name
        }
      });
      console.log("Attrs =>" , this.attrs)
      this.inputdata.date = "";
      this.inputdata.name = "";
      this.dialog = false;
    },
    eventHandler(ev) {
      console.log("Ev => ", ev);
      const { id } = ev;
      // ev.id
      this.inputdata.date = id;
      this.dialog = true;


    },
    async navigate(n) {
      await this.calendar.moveBy(n);
    },
    async today() {
      await this.calendar.move(new Date());
    },
  },
  data() {
    return {
      eventList: [],
      inputdata: {
        name: "",
        date: "",
      },
      dialog: false,
      attrs: [
        {
          highlight: "green",
          dates: new Date(),
        },
        {
          content: {
            color: "green",
            style: {
              //   fontStyle: "italic",
            },
          },
          dot: "green",
          dates: [
            new Date(2023, 2, 12),
            new Date(2023, 2, 15),
            new Date(2023, 2, 18),
          ],
          popover: {
            label: "Washing Time",
            visibility: 'focus'
          },
        },
        {
          highlight: {
            start: { fillMode: "outline", color: "green" },
            base: { fillMode: "light", color: "green" },
            end: { fillMode: "outline", color: "green" },
          },
          dates: { start: new Date(2023, 2, 12), end: new Date(2023, 2, 18) },
        },
      ],
      calendar: null,
    };
  },
};
</script>