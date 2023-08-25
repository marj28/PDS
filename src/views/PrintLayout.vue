<template>
  <div id="btn-group" class="mx-auto w-75 mt-2">
    <v-btn class="bg-green" @click="print"> Print </v-btn>
  </div>
  <div class="d-flex flex-column w-75 mx-auto" id="print-area">
    <!-- <img src="@/assets/logo.png" alt="" class="mx-auto" style="width: 10%" /> -->
    <br />
    <!-- <h1>Printing Layout</h1>
    <p class="text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, animi!
      Ea in consequuntur ipsam. Accusamus quisquam id magni quaerat vero! Ut
      aliquid beatae quod quo eligendi quaerat, asperiores ullam quia. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Tenetur facere
      voluptatum eos obcaecati omnis temporibus accusamus distinctio, quaerat
      vitae delectus tempora voluptate quisquam fuga magni quia cupiditate!
      Nostrum, facere ratione? Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Soluta, autem maiores. Veniam, vitae quos iusto rerum
      quas omnis adipisci nobis, architecto at voluptas quaerat id facilis natus
      quisquam distinctio corporis.
    </p> -->
    <br />
    <!-- <template v-if="users.length > 0">
      <div v-for="user in users" :key="user.id">
        <p>Name: {{ user.first_name }} {{ user.last_name }}</p>
        <p>Address: {{ user.address }}</p>
        <p>Contact Number: {{ user.contact_no }}</p>
      </div>
    </template> -->

    <template v-if="users.length > 0">
      <div>
        <v-table>
          <tr>
            <td colspan="8">CS Form</td>
          </tr>
          <tr>
            <td colspan="8">Revision 2018</td>
          </tr>
          <tr>
            <td class="text-center" colspan="8">
              <h1>PERSONAL DATA SHEET</h1>
            </td>
          </tr>
          <tr>
            <td colspan="8">
              <b>WARNING:</b> Any misrepresentation made in the Personal Data
              Sheet and the Work Experience Sheet shall cause the filing of
              administrative/criminal case/s against the person concerned.
            </td>
          </tr>
          <tr>
            <td colspan="8">
              READ THE ATTACHED GUIDE TO FILLING OUT THE PERSONAL DATA SHEET
              (PDS) BEFORE ACCOMPLISHING THE PDS FORM.
            </td>
          </tr>
          <tr>
            <td colspan="6">
              Print legibly. Tick appropriate boxes ( ) and use separate sheet
              if necessary. Indicate N/A if not applicable.
              <b>DO NOT ABBREVIATE.</b>
            </td>
            <td colspan="1">1. CS ID No.</td>
            <td colspan="1">(Do not fill up. For CSC use only)</td>
          </tr>
          <tr>
            <td class="bg-grey" colspan="8">I. PERSONAL INFORMATION</td>
          </tr>
          <tr>
            <td colspan="1" rowspan="3">2. SURNAME
              <br />
              <p class="mt-6">FIRST NAME</p>
              <br />
              <p>MIDDLE NAME</p>
            </td>
            <td colspan="7">Test Surname</td>
          </tr>
          <tr>
            <td colspan="6">Test Firstname</td>
            <td colspan="1">Name Extension(Jr. , Sr.)</td>
          </tr>
          <tr>
            <td colspan="7">Test Middlename</td>
          </tr>
          <tr>
            <td colspan="1">3. DATE OF BIRTH</td>
            <td colspan="2">Test birth</td>
            <td colspan="2" rowspan="3">16. CITIZENSHIP
              <br />
              <p class="text-center">If holder of dual citizenship, </p> 
              <br />
              <p class="text-center">please indicate the details</p>
            </td>
            <td colspan="3" rowspan="2">
              <v-col>
                <v-row>
                  <v-checkbox label="Filipino"></v-checkbox>
                  <v-checkbox label="Dual Citizenship"></v-checkbox>
                </v-row>
              </v-col>
              <v-col>
                <v-row class="mt-n12 ml-12">
                  <v-checkbox label="by birth" class="ml-12"></v-checkbox>
                  <v-checkbox
                    label="by naturalization"
                    class="ml-n6"
                  ></v-checkbox>
                </v-row>
              </v-col>
              <v-col>
                <p class="ml-16 mt-n12">Please indicate country:</p>
              </v-col>
            </td>
          </tr>
          <tr>
            <td colspan="1">4. Place of Birth</td>
            <td colspan="2">Test</td>
          </tr>
          <tr>
            <td colspan="1">5. Sex</td>
            <td colspan="2">
              <v-row>
                <v-checkbox label="Male"></v-checkbox
                ><v-checkbox label="Female"></v-checkbox>
              </v-row>
            </td>
            <td colspan="3">Test</td>
          </tr>
          <tr>
            <td colspan="1" rowspan="2">6. CIVIL STATUS</td>
            <td colspan="2" rowspan="2">
              <v-row>
                <v-checkbox label="Single"></v-checkbox
                ><v-checkbox label="Married"></v-checkbox>
              </v-row>
              <v-row class="mt-n12">
                <v-checkbox label="Widowed"></v-checkbox
                ><v-checkbox label="Separated"></v-checkbox>
              </v-row>
              <v-row class="mt-n12">
                <v-checkbox label="Other/s"></v-checkbox>
              </v-row>
            </td>
            <td colspan="1" rowspan="3">RESIDENTIAL ADDRESS</td>
            <td colspan="4">House/Block</td>
          </tr>
          <tr>
            <td colspan="8">House/Block</td>
          </tr>
          <tr>
            <td colspan="1">7. HEIGHT (m)</td>
            <td colspan="2">test</td>
            <td colspan="5">House/Block</td>
          </tr>
          <tr>
            <td colspan="1" >8. WEIGHT (kg)</td>
            <td colspan="1">test</td>
          </tr>







          <tr>
            <td class="bg-grey" colspan="8">II. FAMILY BACKGROUND</td>
          </tr>
        </v-table>
      </div>
    </template>

    <div class="page-break"></div>
    <template v-if="users.length > 0">
      <v-table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.address }}</td>
            <td>{{ user.contact_no }}</td>
          </tr>
        </tbody>
      </v-table>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      let res = await fetch("http://localhost:3000/users.json");
      res = await res.json();
      this.users = res;
      console.log("users=>", this.users);
    },
    print() {
      if (window) window.print();
    },
  },
};
</script>

<style>
.page-break {
  page-break-after: always;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

@media print {
  #print-area {
    margin: 0 !important;
    width: 100% !important;
  }
  #btn-group {
    display: none !important;
  }
  @page {
    size: letter;
  }
}
</style>