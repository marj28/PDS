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

    <div>
      <v-table>
        <tr>
          <td colspan="10">CS Form</td>
        </tr>
        <tr>
          <td colspan="10">Revision 2018</td>
        </tr>
        <tr>
          <td class="text-center" colspan="10">
            <h1>PERSONAL DATA SHEET</h1>
          </td>
        </tr>
        <tr>
          <td colspan="10">
            <b>WARNING:</b> Any misrepresentation made in the Personal Data
            Sheet and the Work Experience Sheet shall cause the filing of
            administrative/criminal case/s against the person concerned.
          </td>
        </tr>
        <tr>
          <td colspan="10">
            READ THE ATTACHED GUIDE TO FILLING OUT THE PERSONAL DATA SHEET (PDS)
            BEFORE ACCOMPLISHING THE PDS FORM.
          </td>
        </tr>
        <tr>
          <td colspan="8">
            Print legibly. Tick appropriate boxes ( ) and use separate sheet if
            necessary. Indicate N/A if not applicable.
            <b>DO NOT ABBREVIATE.</b>
          </td>
          <td colspan="1" class="number">1. CS ID No.</td>
          <td colspan="1">(Do not fill up. For CSC use only)</td>
        </tr>
        <tr>
          <td class="numerical" colspan="10">I. PERSONAL INFORMATION</td>
        </tr>
        <tr>
          <td colspan="2" rowspan="3" class="number">
            2. SURNAME

            <p class="">FIRST NAME</p>

            <p>MIDDLE NAME</p>
          </td>
          <td colspan="10">Test Surname</td>
        </tr>
        <tr>
          <td colspan="7"></td>
          <td colspan="1" class="number">Name Extension(Jr. , Sr.)</td>
        </tr>
        <tr>
          <td colspan="8">Test Middlename</td>
        </tr>
        <tr>
          <td colspan="2" class="number">3. DATE OF BIRTH</td>
          <td colspan="3"></td>
          <td colspan="3" rowspan="3" class="number">
            16. CITIZENSHIP

            <p class="text-center">If holder of dual citizenship,</p>

            <p class="text-center">please indicate the details</p>
          </td>
          <td colspan="2" rowspan="2">
            <v-col>
              <v-row>
                <v-radio-group inline>
                  <v-radio label="Filipino" value="filipino"></v-radio>
                  <v-radio label="Dual Citizenship" value="dual"></v-radio>
                </v-radio-group>
              </v-row>
            </v-col>
            <v-col>
              <v-row class="mt-n12 ml-12">
                <v-radio-group inline>
                  <v-radio label="by birth" class="  " value="birth"></v-radio>
                  <v-radio
                    label="by naturalization"
                    class="ml-n2"
                    value="naturalization"
                  ></v-radio>
                </v-radio-group>
              </v-row>
            </v-col>
            <v-col>
              <p class="ml-16 mt-n8">Please indicate country:</p>
            </v-col>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="number">4. Place of Birth</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2" class="number">5. Sex</td>
          <td colspan="3">
            <v-row>
              <v-radio-group inline class="ma-2">
                <v-radio label="Male" value="male"></v-radio
                ><v-radio label="Female" value="female"></v-radio>
              </v-radio-group>
            </v-row>
          </td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2" rowspan="2" class="number">6. CIVIL STATUS</td>
          <td colspan="3" rowspan="2">
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
          <td colspan="2" rowspan="3" class="number">
            17. RESIDENTIAL ADDRESS
          </td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="8"></td>
        </tr>
        <tr>
          <td colspan="2" class="number">7. HEIGHT (m)</td>
          <td colspan="3"></td>
          <td colspan="5"></td>
        </tr>
        <tr>
          <td colspan="2" class="number">8. WEIGHT (kg)</td>
          <td colspan="3"></td>
          <td colspan="2" class="number">ZIP CODE</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2" class="number">9. BLOOD TYPE</td>
          <td colspan="3"></td>
          <td colspan="2" rowspan="3" class="number">18. PERMANENT ADDRESS</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2" class="number">10. GSIS ID NO.</td>
          <td colspan="3"></td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2" class="number">11. PAG-IBIG ID NO.</td>
          <td colspan="3"></td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2" class="number">12. PHILHEALTH NO.</td>
          <td colspan="3"></td>
          <td colspan="2" class="number">ZIP CODE</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2" class="number">13. SSS NO.</td>
          <td colspan="3"></td>
          <td colspan="2" class="number">19. TELEPHONE NO.</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2" class="number">14. TIN NO.</td>
          <td colspan="3"></td>
          <td colspan="2" class="number">20. MOBILE NO.</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2" class="number">15. AGENCY EMPLOYEE NO.</td>
          <td colspan="3"></td>
          <td colspan="2" class="number">21. E-MAIL ADDRESS (if any)</td>
          <td colspan="3"></td>
        </tr>

        <!-- FAMILY BACKGROUND -->
        <tr>
          <td class="numerical" colspan="10">II. FAMILY BACKGROUND</td>
        </tr>
        <tr>
          <td colspan="2" rowspan="3" class="number">
            22. SPOUSE'S SURNAME
            <p class="text-center">FIRST NAME</p>
            <p class="text-center">MIDDLE NAME</p>
          </td>
          <td colspan="3"></td>
          <td colspan="2" class="number">
            23. NAME of CHILDREN (Write full name and list all)
          </td>
          <td colspan="3" class="number">DATE OF BIRTH (mm/dd/yy)</td>
        </tr>
        <tr>
          <!-- <td colspan="2">FIRST NAME</td> -->
          <td colspan="2"></td>
          <td colspan="1" class="number">NAME EXTENSION (JR., SR.)</td>
          <td colspan="2"></td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <!-- <td colspan="2">MIDDLE NAME</td> -->
          <td colspan="3">Test</td>
          <td colspan="2"></td>
          <td colspan="3"></td>
        </tr>

        <tr>
          <td colspan="2" class="number">OCCUPATION</td>
          <td colspan="3"></td>
          <td colspan="2"></td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2" class="number">EMPLOYER / BUSINESS NAME</td>
          <td colspan="3"></td>
          <td colspan="2"></td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2" class="number">BUSINESS ADDRESS</td>
          <td colspan="3"></td>
          <td colspan="2"></td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2" class="number">TELEPHONE NO.</td>
          <td colspan="3"></td>
          <td colspan="2"></td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2" rowspan="3" class="number">
            24. FATHER'S SURNAME
            <p class="text-center">FIRST NAME</p>
            <p class="text-center">MIDDLE NAME</p>
          </td>
          <td colspan="3">Test</td>
          <td colspan="2">Test</td>
        </tr>
        <tr>
          <td colspan="3">Test</td>
          <td colspan="2">Test</td>
          <td colspan="3">Test</td>
        </tr>
        <tr>
          <td colspan="2">Test</td>
          <td colspan="1" class="number">NAME EXTENSION (JR., SR.)</td>
          <td colspan="2">Test</td>
          <td colspan="3">Test</td>
        </tr>
        <tr>
          <td colspan="2" rowspan="4" class="number">
            25. MOTHER'S MAIDEN NAME
            <p class="text-center">SURNAME</p>
            <p class="text-center">FIRST NAME</p>
            <p class="text-center">MIDDLE NAME</p>
          </td>
          <td colspan="3">Test</td>
          <td colspan="2">Test</td>
        </tr>
        <tr>
          <td colspan="3">Test</td>
          <td colspan="2">Test</td>
          <td colspan="3">Test</td>
        </tr>
        <tr>
          <td colspan="3">Test</td>
          <td colspan="2">Test</td>
          <td colspan="3">Test</td>
        </tr>
        <tr>
          <td colspan="3">Test</td>
          <td colspan="5" class="red">
            (Continue on separate sheet if necessary)
          </td>
        </tr>

        <!-- FAMILY BACKGROUND -->
        <tr>
          <td class="numerical" colspan="10">III. EDUCATIONAL BACKGROUND</td>
        </tr>
        <tr>
          <td colspan="1" rowspan="2" class="number">26. LEVEL</td>
          <td colspan="2" rowspan="2">NAME OF SCHOOL</td>
          <td colspan="2" rowspan="2">BASIC EDUCATION/DEGREE/COURSE</td>
          <td colspan="2">PERIOD OF ATTENDANCE</td>
          <td colspan="1" rowspan="2">
            HIGHEST LEVEL/UNITS EARNED (if not graduated)
          </td>
          <td colspan="1" rowspan="2">YEAR GRADUATED</td>
          <td colspan="1" rowspan="2">SCHOLARSHIP/ACADEMIC HONORS RECEIVED</td>
        </tr>
        <tr>
          <td colspan="1">From</td>
          <td colspan="1">To</td>
        </tr>
        <tr v-for="index in 5" :key="'empty-' + index">
          <td colspan="1">&nbsp;</td>
          <td colspan="2">&nbsp;</td>
          <td colspan="2">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
        </tr>

        <tr>
          <td colspan="10" class="red">
            (Continue on separate sheet if necessary)
          </td>
        </tr>
        <tr>
          <td colspan="2" class="centerStyle">SIGNATURE</td>
          <td colspan="3">Test</td>
          <td colspan="2" class="centerStyle">DATE</td>
          <td colspan="3">Test</td>
        </tr>
        <tr>
          <td class="footer" colspan="10">
            CS FORM 212 (Revised 2017), Page 1 of 4
          </td>
        </tr>
        <!-- IV. CIVIL SERVICE ELIGIBILITY -->
        <tr>
          <td class="numerical" colspan="10">IV. CIVIL SERVICE ELIGIBILITY</td>
        </tr>
        <tr class="number">
          <td colspan="3" rowspan="2">
            27. CAREER SERVICE/ RA 1080 (BOARD/ BAR) UNDER SPECIAL LAWS/ CES/
            CSEE BARANGAY ELIGIBILITY / DRIVER'S LICENSE
          </td>
          <td colspan="1" rowspan="2">"RATING (If Applicable)"</td>
          <td colspan="1" rowspan="2">DATE OF EXAMINATION / CONFERMENT</td>
          <td colspan="3" rowspan="2">PLACE OF EXAMINATION / CONFERMENT</td>
          <td colspan="2">LICENSE (if applicable)</td>
        </tr>
        <tr class="number">
          <td colspan="1">NUMBER</td>
          <td colspan="1">Date of Validity</td>
        </tr>
        <tr v-for="index in 15" :key="'empty-' + index">
          <td colspan="3">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="3">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="10" class="red">
            (Continue on separate sheet if necessary)
          </td>
        </tr>
        <tr>
          <td class="numerical" colspan="10">V. WORK EXPERIENCE</td>
        </tr>
        <tr>
          <td class="numerical" colspan="10">
            (Include private employment. Start from your recent work)
            Description of duties should be indicated in the attached Work
            Experience sheet.
          </td>
        </tr>
        <tr class="number">
          <td colspan="2" rowspan="">28. INCLUSIVE DATES (mm/dd/yyyy)</td>
          <td colspan="2" rowspan="2">
            POSITION TITLE (Write in full/Do not abbreviate)
          </td>
          <td colspan="2" rowspan="2">
            DEPARTMENT / AGENCY / OFFICE / COMPANY (Write in full/Do not
            abbreviate)
          </td>
          <td colspan="1" rowspan="2">MONTHLY SALARY</td>
          <td colspan="1" rowspan="2">
            SALARY/ JOB/ PAY GRADE (if applicable)& STEP (Format "00-0")/
            INCREMENT
          </td>
          <td colspan="1" rowspan="2">STATUS OF APPOINTMENT</td>
          <td colspan="1" rowspan="2">GOV'T SERVICE (Y/ N)</td>
        </tr>
        <tr class="number">
          <td colspan="1">From</td>
          <td colspan="1">To</td>
        </tr>
        <tr v-for="index in 39" :key="'empty-' + index">
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="2">&nbsp;</td>
          <td colspan="2">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="10" class="red">
            (Continue on separate sheet if necessary)
          </td>
        </tr>
        <tr>
          <td colspan="2" class="centerStyle">SIGNATURE</td>
          <td colspan="3">Test</td>
          <td colspan="2" class="centerStyle">DATE</td>
          <td colspan="3">Test</td>
        </tr>
        <tr>
          <td class="footer" colspan="10">
            CS FORM 212 (Revised 2017), Page 2 of 4
          </td>
        </tr>

        <!-- VI. VOLUNTARY WORK OR INVOLVEMENT IN CIVIC / NON-GOVERNMENT / PEOPLE / VOLUNTARY ORGANIZATION/S
 -->
        <tr>
          <td class="numerical" colspan="10">
            VI. VOLUNTARY WORK OR INVOLVEMENT IN CIVIC / NON-GOVERNMENT / PEOPLE
            / VOLUNTARY ORGANIZATION/S
          </td>
        </tr>
        <tr class="number">
          <td colspan="4" rowspan="2">
            29. NAME & ADDRESS OF ORGANIZATION (Write in full)
          </td>
          <td colspan="2">INCLUSIVE DATES (mm/dd/yyyy)</td>
          <td colspan="1" rowspan="2">NUMBER OF HOURS</td>
          <td colspan="3" rowspan="2">POSITION / NATURE OF WORK</td>
        </tr>
        <tr class="number">
          <td colspan="1">From</td>
          <td colspan="1">To</td>
        </tr>
        <tr v-for="index in 15" :key="'empty-' + index">
          <td colspan="4">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="3">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="10" class="red">
            (Continue on separate sheet if necessary)
          </td>
        </tr>
        <tr>
          <td class="numerical" colspan="10">
            VII. LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS/TRAINING PROGRAMS
            ATTENDED
          </td>
        </tr>
        <tr>
          <td class="numerical" colspan="10">
            (Start from the most recent L&D/training program and include only
            the relevant L&D/training taken for the last five (5) years for
            Division Chief/Executive/Managerial positions)
          </td>
        </tr>
        <tr class="number">
          <td colspan="4" rowspan="2">
            30. TITLE OF LEARNING AND DEVELOPMENT INTERVENTIONS/TRAINING
            PROGRAMS (Write in full)
          </td>
          <td colspan="2">INCLUSIVE DATES OF ATTENDANCE (mm/dd/yyyy)</td>
          <td colspan="1" rowspan="2">NUMBER OF HOURS</td>
          <td colspan="1" rowspan="2">
            "Type of LD ( Managerial/ Supervisory/ Technical/etc) "
          </td>
          <td colspan="2" rowspan="2">
            CONDUCTED/ SPONSORED BY (Write in full)
          </td>
        </tr>
        <tr class="number">
          <td colspan="1">From</td>
          <td colspan="1">To</td>
        </tr>
        <tr v-for="index in 25" :key="'empty-' + index">
          <td colspan="4">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
          <td colspan="2">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="10" class="red">
            (Continue on separate sheet if necessary)
          </td>
        </tr>
        <tr>
          <td class="numerical" colspan="10">VIII. OTHER INFORMATION</td>
        </tr>
        <tr class="number">
          <td colspan="3">31. SPECIAL SKILLS and HOBBIES</td>
          <td colspan="4">
            32. NON-ACADEMIC DISTINCTIONS / RECOGNITION (Write in full)
          </td>
          <td colspan="3">
            33. MEMBERSHIP IN ASSOCIATION/ORGANIZATION (Write in full)
          </td>
        </tr>
        <tr v-for="index in 13" :key="'empty-' + index">
          <td colspan="3">&nbsp;</td>
          <td colspan="4">&nbsp;</td>
          <td colspan="3">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="10" class="red">
            (Continue on separate sheet if necessary)
          </td>
        </tr>
        <tr>
          <td colspan="2" class="centerStyle">SIGNATURE</td>
          <td colspan="3">Test</td>
          <td colspan="2" class="centerStyle">DATE</td>
          <td colspan="3">Test</td>
        </tr>
        <tr>
          <td class="footer" colspan="10">
            CS FORM 212 (Revised 2017), Page 3 of 4
          </td>
        </tr>

        <!-- ;4th page -->
        <tr>
          <td colspan="7" class="number">
            34. Are you related by consanguinity or affinity to the appointing
            or recommending authority, or to the chief of bureau or office or to
            the person who has immediate supervision over you in the Office,
            Bureau or Department where you will be apppointed,
          </td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="7" class="number">
            &nbsp; &nbsp; &nbsp; &nbsp;a. within the third degree?
          </td>
          <td colspan="3">
            <v-radio-group inline>
              <v-radio value="Yes" label="YES"></v-radio>
              <v-radio value="No" label="NO"></v-radio>
            </v-radio-group>
          </td>
        </tr>

        <tr>
          <td colspan="7" class="number">
            &nbsp; &nbsp; &nbsp; &nbsp;b. within the fourth degree (for Local
            Government Unit - Career Employees)?
          </td>
          <td colspan="3">
            <v-radio-group inline>
              <v-radio value="Yes" label="YES"></v-radio>
              <v-radio value="No" label="NO"></v-radio>
            </v-radio-group>
            <p class="margin" style="">
              If YES, give details: ________________________________
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" class="number">
            35. a. Have you ever been found guilty of any administrative
            offense?
          </td>
          <td colspan="3">
            <v-radio-group inline>
              <v-radio value="Yes" label="YES"></v-radio>
              <v-radio value="No" label="NO"></v-radio>
            </v-radio-group>
            <p class="margin" style="">
              If YES, give details: ________________________________
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" class="number">
            &nbsp; &nbsp; &nbsp; &nbsp; b. Have you been criminally charged
            before any court?
          </td>
          <td colspan="3">
            <v-radio-group inline>
              <v-radio value="Yes" label="YES"></v-radio>
              <v-radio value="No" label="NO"></v-radio>
            </v-radio-group>
            <p class="margin">
              If YES, give details:
              <br />
              Date Filed: ________________________________
              <br />
              Status of Case/s: : ________________________________
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" class="number">
            36. Have you ever been convicted of any crime or violation of any
            law, decree, ordinance or regulation by any court or tribunal?
          </td>
          <td colspan="3">
            <v-radio-group inline>
              <v-radio value="Yes" label="YES"></v-radio>
              <v-radio value="No" label="NO"></v-radio>
            </v-radio-group>
            <p class="margin" style="">
              If YES, give details: ________________________________
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" class="number">
            37. Have you ever been separated from the service in any of the
            following modes: resignation, retirement, dropped from the rolls,
            dismissal, termination, end of term, finished contract or phased out
            (abolition) in the public or private sector?
          </td>
          <td colspan="3">
            <v-radio-group inline>
              <v-radio value="Yes" label="YES"></v-radio>
              <v-radio value="No" label="NO"></v-radio>
            </v-radio-group>
            <p class="margin" style="">
              If YES, give details: ________________________________
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" class="number">
            38. a. Have you ever been a candidate in a national or local
            election held within the last year (except Barangay election)?
          </td>
          <td colspan="3">
            <v-radio-group inline>
              <v-radio value="Yes" label="YES"></v-radio>
              <v-radio value="No" label="NO"></v-radio>
            </v-radio-group>
            <p class="margin" style="">
              If YES, give details: ________________________________
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" class="number">
            &nbsp; &nbsp; &nbsp; &nbsp; b. Have you resigned from the government
            service during the three (3)-month period before the last election
            to promote/actively campaign for a national or local candidate?
          </td>
          <td colspan="3">
            <v-radio-group inline>
              <v-radio value="Yes" label="YES"></v-radio>
              <v-radio value="No" label="NO"></v-radio>
            </v-radio-group>
            <p class="margin" style="">
              If YES, give details: ________________________________
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" class="number">
            39. Have you acquired the status of an immigrant or permanent
            resident of another country?
          </td>
          <td colspan="3">
            <v-radio-group inline>
              <v-radio value="Yes" label="YES"></v-radio>
              <v-radio value="No" label="NO"></v-radio>
            </v-radio-group>
            <p class="margin" style="">
              If YES, give details: ________________________________
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="7" class="number">
            40. Pursuant to: (a) Indigenous People's Act (RA 8371); (b) Magna
            Carta for Disabled Persons (RA 7277); and (c) Solo Parents Welfare
            Act of 2000 (RA 8972), please answer the following items:
          </td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="7" class="number">
            &nbsp; &nbsp; &nbsp; &nbsp; a. Are you a member of any indigenous
            group?
          </td>
          <td colspan="3">
            <v-radio-group inline>
              <v-radio value="Yes" label="YES"></v-radio>
              <v-radio value="No" label="NO"></v-radio>
              If YES, please specify: ________________________________
            </v-radio-group>
          </td>
        </tr>
        <tr>
          <td colspan="7" class="number">
            &nbsp; &nbsp; &nbsp; &nbsp; b. Are you a person with disability?
          </td>
          <td colspan="3">
            <v-radio-group inline>
              <v-radio value="Yes" label="YES"></v-radio>
              <v-radio value="No" label="NO"></v-radio>
              If YES, please specify: ________________________________
            </v-radio-group>
          </td>
        </tr>
        <tr>
          <td colspan="7" class="number">
            &nbsp; &nbsp; &nbsp; &nbsp; c. Are you a solo parent?
          </td>
          <td colspan="3">
            <v-radio-group inline>
              <v-radio value="Yes" label="YES"></v-radio>
              <v-radio value="No" label="NO"></v-radio>
              If YES, please specify: ________________________________
            </v-radio-group>
          </td>
        </tr>
        <tr>
          <td colspan="8" class="number">
            41. REFERENCES
            <span class="red"
              >(Person not related by consanguinity or affinity to applicant
              /appointee)</span
            >
          </td>
          <td colspan="2" rowspan="6"><div class="box"></div></td>
        </tr>
        <tr class="numberCenter">
          <td colspan="4">NAME</td>
          <td colspan="3">ADDRESS</td>
          <td colspan="1">TEL NO.</td>
        </tr>
        <tr v-for="index in 3" :key="'empty-' + index">
          <td colspan="4">&nbsp;</td>
          <td colspan="3">&nbsp;</td>
          <td colspan="1">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="8" class="number">
            42. I declare under oath that I have personally accomplished this
            Personal Data Sheet which is a true, correct and complete statement
            pursuant to the provisions of pertinent laws, rules and regulations
            of the Republic of the Philippines. I authorize the agency
            head/authorized representative to verify/validate the contents
            stated herein. I agree that any misrepresentation made in this
            document and its attachments shall cause the filing of
            administrative/criminal case/s against me.
          </td>
        </tr>
        <v-table class="boxed-table">
          <tr>
            <td colspan="4" class="dark">
              Government Issued ID (i.e.Passport, GSIS, SSS, PRC, Driver's
              License, etc.) PLEASE INDICATE ID Number and Date of Issuance
            </td>
          </tr>
          <tr>
            <td colspan="4" class="dark">Government Issued ID:</td>
          </tr>
          <tr>
            <td colspan="4" class="dark">ID/License/Passport No.:</td>
          </tr>
          <tr>
            <td colspan="4" class="dark">Date/Place of Issuance:</td>
          </tr>
        </v-table>
      </v-table>
    </div>

    <div class="page-break"></div>
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
    // this.getUsers();
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
.centerStyle {
  font-weight: 500;
  font-style: italic;
  text-align: center;
  background-color: rgb(210, 210, 210);
}
.red {
  color: red;
  text-align: center;
  font-style: italic;
  font-size: 12px;
  background-color: rgb(210, 210, 210);
}
.numerical {
  font-style: italic;
  background-color: rgb(150, 150, 150);
  color: #ffffff;
}
.footer {
  text-align: end;
  font-style: italic;
  font-weight: 100;
  font-size: 10px;
}
.number {
  background-color: rgb(210, 210, 210);
  /* text-align: center; */
  text-align: justify;
}
.numberCenter {
  background-color: rgb(210, 210, 210);
  text-align: center;
}
.margin {
  margin-top: -25px;
}
.box {
  width: 20px;
  height: 20px;
  background-color: #000;
}
.boxed-table {
  border: 2px solid #555; /* Adjust the color as needed */
  border-collapse: collapse;
  width: 100%;
}

.dark {
  padding: 8px;
}
@media print {
  #print-area {
    margin: 0 !important;
    width: 100% !important;
    /* font-size: medium; */
  }
  #btn-group {
    display: none !important;
  }
  @page {
    size: legal;
  }
}
</style>
