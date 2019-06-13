//Footer component

Vue.component('footercomp', {
  props: {
    urlprefix: String,
    displayoef: String,
    displaybasis: String,
    displayvoeding: String,
    footeridbasis: String,
    footeridoef: String,
    footeridvoeding: String,
    kleurbasis: String,
    kleuroef: String,
    kleurvoeding: String
  },
  template: `
      <ul class="footer-nav">
        <li :id="{ footeridbasis }">
        <div>
        <a :href="urlprefix + 'basis/basis_start.html'">
        <img :src="urlprefix + 'public/afbeeldingen/basis-' + kleurbasis + '.png'">
        <p :style="{ color: '#22a6b3', display: displaybasis }">Basis</p>
        </a></div>
        </li>
        <li :id="{ footeridoef }">
        <div>
        <a :href="urlprefix + 'oefeningen/oefeningen_start.html'">
        <img :src="urlprefix + 'public/afbeeldingen/oefeningen-' + kleuroef + '.png'">
        <p :style="{ color: '#eb4d4b', display: displayoef }">Oefeningen</p>
        </a>
        </div>
        </li>
        <li :id="{ footeridvoeding }">
        <div>
        <a :href="urlprefix + 'voeding/voeding_start.html'">
        <img :src="urlprefix + 'public/afbeeldingen/voeding-' + kleurvoeding + '.png'">
        <p :style="{ color: '#6ab04c', display: displayvoeding }">Voeding</p>
        </a>
        </div>
        </li>
      </ul>
   `
})


//Header component

Vue.component('headercomp', {
  props: {
    title: String,
    displaystyle: String,
    urlprefix: String
  },
  template: `
  <div>
  <a :style="{ display: displaystyle }" href="javascript: history.go(-1)">
  <img id="back-arrow" :src="urlprefix + 'public/afbeeldingen/back-arrow-black.png'"></a>
  <h1>{{ title }}</h1>
  </div>
   `
})

//Oefeningen Triceps

Vue.component('oefeningentriceps', {
  data: function() {
    return {
    oefeningentricepsarray: [
    {
      naam: 'Rope pushdown',
      url: 'rope_pushdown.html'
    },
    {
      naam: 'Skullcrushers',
      url: '#'
    },
    {
      naam: 'Close grip bench-press (C)',
      url: '#'
    },
    {
      naam: 'Sitting tricep extension',
      url: '#'
    },
    {
      naam: 'Close hands pushup',
      url: '#'
    },
    {
      naam: 'Standing dumbbell overhead triceps extension',
      url: '#'
    },
    ]
  }},
  template: `
  <ul class="oefeningen-lijst">
  <a v-for="oefening in oefeningentricepsarray" :href="oefening.url">
  <li>
  <h3> {{ oefening.naam }}</h3>
  <img id="forward-btn" src="../../public/afbeeldingen/arrow_black_forward.png">
  </li>
  </a>
  </ul>
  `
})

//Oefeningen Schouders

Vue.component('oefeningenschouders', {
  data: function() {
    return {
    oefeningenschoudersarray: [
    {
      naam: 'Dumbbell shoulder press',
      url: 'dumbbell_shoulder_press.html'
    },
    {
      naam: 'Arnold press (C)',
      url: '#'
    },
    {
      naam: 'Dumbbell front raises',
      url: '#'
    },
    {
      naam: 'Dumbbell side raises',
      url: '#'
    }
    ]
  }},
  template: `
  <ul class="oefeningen-lijst">
  <a v-for="oefening in oefeningenschoudersarray" :href="oefening.url">
  <li>
  <h3> {{ oefening.naam }}</h3>
  <img id="forward-btn" src="../../public/afbeeldingen/arrow_black_forward.png">
  </li>
  </a>
  </ul>
  `
})

//Oefeningen Rug

Vue.component('oefeningenrug', {
  data: function() {
    return {
    oefeningenrugarray: [
    {
      naam: 'Lat pulldown (C)',
      url: 'lat_pulldown.html'
    },
    {
      naam: 'Deadlift (C)',
      url: '#'
    },
    {
      naam: 'Wide grip pull-up (C)',
      url: '#'
    },
    {
      naam: 'Seated cable row (C)',
      url: '#'
    },
    {
      naam: 'Dumbbell row',
      url: '#'
    }
    ]
  }},
  template: `
  <ul class="oefeningen-lijst">
  <a v-for="oefening in oefeningenrugarray" :href="oefening.url">
  <li>
  <h3> {{ oefening.naam }}</h3>
  <img id="forward-btn" src="../../public/afbeeldingen/arrow_black_forward.png">
  </li>
  </a>
  </ul>
  `
})

//Oefeningen borst

Vue.component('oefeningenborst', {
  data: function() {
    return {
    oefeningenborstarray: [
      {
        naam: 'Incline dumbbell press (C)',
        url: 'incline_dumbbell_press.html'
      },
    {
      naam: 'Bench press (C)',
      url: '#'
    },
    {
      naam: 'Dumbbell press (C)',
      url: '#'
    },
    {
      naam: 'Cable flyes',
      url: '#'
    },
    {
      naam: 'Dips (C)',
      url: '#'
    }
    ]
  }},
  template: `
  <ul class="oefeningen-lijst">
  <a v-for="oefening in oefeningenborstarray" :href="oefening.url">
  <li>
  <h3> {{ oefening.naam }}</h3>
  <img id="forward-btn" src="../../public/afbeeldingen/arrow_black_forward.png">
  </li>
  </a>
  </ul>
  `
})

//Oefeningen biceps

Vue.component('oefeningenbiceps', {
  data: function() {
    return {
    oefeningenbicepsarray: [
    {
      naam: 'Dumbbell bicep curl',
      url: 'dumbbell_bicep_curl.html'
    },
    {
      naam: 'Alternating curl',
      url: '#'
    },
    {
      naam: 'Concentration curl',
      url: '#'
    },
    {
      naam: 'Pull-ups (C)',
      url: '#'
    },
    {
      naam: 'Seated hammer curl (C)',
      url: '#'
    }
    ]
  }},
  template: `
  <ul class="oefeningen-lijst">
  <a v-for="oefening in oefeningenbicepsarray" :href="oefening.url">
  <li>
  <h3> {{ oefening.naam }}</h3>
  <img id="forward-btn" src="../../public/afbeeldingen/arrow_black_forward.png">
  </li>
  </a>
  </ul>
  `
})

//Oefeningen benen

Vue.component('oefeningenbenen', {
  data: function() {
    return {
    oefeningenbenenarray: [
    {
      naam: 'Dumbbell front squat (C)',
      url: 'dumbbell_front_squat.html'
    },
    {
      naam: 'Standing calf raise',
      url: '#'
    },
    {
      naam: 'Leg press (C)',
      url: '#'
    },
    {
      naam: 'Deadlift (C)',
      url: '#'
    },
    {
      naam: 'Leg extension machine',
      url: '#'
    }
    ]
  }},
  template: `
  <ul class="oefeningen-lijst">
  <a v-for="oefening in oefeningenbenenarray" :href="oefening.url">
  <li>
  <h3> {{ oefening.naam }}</h3>
  <img id="forward-btn" src="../../public/afbeeldingen/arrow_black_forward.png">
  </li>
  </a>
  </ul>
  `
})

//Oefeningen abs

Vue.component('oefeningenabs', {
  data: function() {
    return {
    oefeningenabsarray: [
    {
      naam: 'Cable crunch',
      url: '#'
    },
    {
      naam: 'Plank (C)',
      url: '#'
    },
    {
      naam: 'Russian twists',
      url: '#'
    },
    {
      naam: 'Hanging leg raises (C)',
      url: '#'
    }
    ]
  }},
  template: `
  <ul class="oefeningen-lijst">
  <a v-for="oefening in oefeningenabsarray" :href="oefening.url">
  <li>
  <h3> {{ oefening.naam }}</h3>
  <img id="forward-btn" src="../../public/afbeeldingen/arrow_black_forward.png">
  </li>
  </a>
  </ul>
  `
})


var app = new Vue({
  el: '#app',
  data: {
    oefeningen_links: [
      {
        url: 'abs/overzicht.html',
        img: '../public/afbeeldingen/Abs-oef.png',
        spiergroep: 'Buik (Abs)'
      },
      {
        url: 'benen/overzicht.html',
        img: '../public/afbeeldingen/Benen-oef.png',
        spiergroep: 'Benen'
      },
      {
        url: 'biceps/overzicht.html',
        img: '../public/afbeeldingen/Biceps-oef.png',
        spiergroep: 'Biceps'
      },
      {
        url: 'borst/overzicht.html',
        img: '../public/afbeeldingen/Chest-oef.png',
        spiergroep: 'Borst (Chest)'
      },
      {
        url: 'rug/overzicht.html',
        img: '../public/afbeeldingen/Rug-oef.png',
        spiergroep: 'Rug'
      },
      {
        url: 'schouders/overzicht.html',
        img: '../public/afbeeldingen/Shoulders-oef.png',
        spiergroep: 'Schouders'
      },
      {
        url: 'triceps/overzicht.html',
        img: '../public/afbeeldingen/Triceps-oef.png',
        spiergroep: 'Triceps'
      }
  ]
  }
})
