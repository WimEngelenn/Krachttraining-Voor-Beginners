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

Vue.component('headercomp', {
  props: {
    title: String,
    displaystyle: String
  },
  template: `
  <div>
  <a :style="{ display: displaystyle }" href="javascript: history.go(-1)">
  <img id="back-arrow" src="../public/afbeeldingen/back-arrow-black.png"></a>
  <h1>{{ title }}</h1>
  </div>
   `
})

Vue.component('headercomp-n2', {
  props: {
    title: String,
    displaystyle: String
  },
  template: `
  <div>
  <a :style="{ display: displaystyle }" href="javascript: history.go(-1)">
  <img id="back-arrow" src="../../public/afbeeldingen/back-arrow-black.png"></a>
  <h1>{{ title }}</h1>
  </div>
   `
})

var app = new Vue({
  el: '#app',
  data: {
    next_btn_img: '../public/afbeeldingen/arrow_black_forward.png',
    next_btn_id: 'forward-btn',
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
