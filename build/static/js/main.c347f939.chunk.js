(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{18:function(a,e,t){a.exports=t(28)},23:function(a,e,t){},28:function(a,e,t){"use strict";t.r(e),t.d(e,"showData",(function(){return g})),t.d(e,"returnStations",(function(){return K}));var n=t(0),i=t.n(n),l=t(16),o=t.n(l),r=(t(23),t(24),t(1)),u=t(2),s=t(4),m=t(3),c=function(a){Object(s.a)(t,a);var e=Object(m.a)(t);function t(){var a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=e.call.apply(e,[this].concat(i))).handleSelection=function(a){1===a?console.log("L\xe4mp\xf6tila"):2===a&&console.log("Salamat")},a}return Object(u.a)(t,[{key:"render",value:function(){var a=this;return i.a.createElement("div",{id:"nav"},i.a.createElement("ul",{className:"nav nav-pills nav-fill bg-dark"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{onClick:function(){return a.handleSelection(1)},className:"nav-link text-white",href:"#"},"L\xe4mp\xf6tilahistoria")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link text-white",href:"#"},"L\xe4mp\xf6tilakuvaaja")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{onClick:function(){return a.handleSelection(2)},className:"nav-link text-white",href:"#"},"Salamat")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link text-white",href:"#"},"Lumensyvyys"))))}}]),t}(n.Component),k=t(7),d=t(17),h=t.n(d),v=function(a){Object(s.a)(t,a);var e=Object(m.a)(t);function t(a){var n;return Object(r.a)(this,t),(n=e.call(this,a)).handleDropdownVisibility=function(a){n.setState({visible:0!==a})},n.handleDropdownSearch=function(a){n.setState({value:a.target.value})},n.handleOptionClick=function(a){var e=new Date,t=new Date((new Date).getFullYear()-1,(new Date).getMonth(),(new Date).getDate());(new h.a.WfsRequestParser).getData({url:"http://opendata.fmi.fi/wfs",storedQueryId:"fmi::observations::weather::daily::multipointcoverage",requestParameter:"tmin,tmax",begin:new Date(t).getTime(),end:new Date(e).getTime(),fmisid:a,callback:function(a,e){console.log(a),g(a),e&&console.log("Virhe")}})},n.state={visible:!1,value:""},n.handleDropdownSearch=n.handleDropdownSearch.bind(Object(k.a)(n)),n}return Object(u.a)(t,[{key:"render",value:function(){var a=this;return i.a.createElement("div",{id:"search",className:"card"},i.a.createElement("div",{className:"card-header justify-content-center "},"Valitse haluamasi mittausasema havaintohistoriaa varten"),i.a.createElement("div",{className:"card-body justify-content-center",onFocus:function(){return a.handleDropdownVisibility(1)},onBlur:function(){return a.handleDropdownVisibility(0)}},i.a.createElement("input",{type:"text",value:this.state.value,placeholder:"Hae...",id:"dropdowninput",onChange:this.handleDropdownSearch}),i.a.createElement("div",{className:"dropdown"},i.a.createElement("div",{id:"dropdownbox",className:!0===this.state.visible?"dropdown-content":"dropdown-content hidden"},function(){var e=[];return K(a.state.value).forEach((function(t,n){var l,o;e.push((l=t[0],o=t[1],i.a.createElement("a",{style:{cursor:"pointer"},key:o,onMouseDown:function(){a.handleOptionClick(o)}},l)))})),e}()))))}}]),t}(n.Component),p=[["Alaj\xe4rvi M\xf6ksy",101533],["Asikkala Pulkkilanharju",101185],["Enonteki\xf6 Kilpisj\xe4rvi Saana",102017],["Enonteki\xf6 Kilpisj\xe4rvi kyl\xe4keskus",102016],["Enonteki\xf6 N\xe4kk\xe4l\xe4",102019],["Enonteki\xf6 lentoasema",101976],["Espoo Nuuksio",852678],["Espoo Tapiola",874863],["Haapavesi Mustikkam\xe4ki",101695],["Hailuoto Keskikyl\xe4",101776],["Hailuoto Marjaniemi",101784],["Halsua Purola",101528],["Hammarland M\xe4rket",100919],["Hanko Russar\xf6",100932],["Hanko Tulliniemi",100946],["Hanko Tv\xe4rminne",100953],["Hattula Lepaa",101151],["Heinola Asemantaus",101196],["Helsinki Harmaja",100996],["Helsinki Helsingin majakka",101003],["Helsinki Kaisaniemi",100971],["Helsinki Kumpula",101004],["Helsinki Malmi lentokentt\xe4",101009],["Helsinki Vuosaari K\xe4\xe4rmeniementie",103943],["Helsinki Vuosaari satama",151028],["Hyvink\xe4\xe4 Hyvink\xe4\xe4nkyl\xe4",101130],["H\xe4meenlinna Katinen",101150],["H\xe4meenlinna Lammi Pappila",101154],["Ilmajoki Sein\xe4joki lentoasema",137188],["Ilomantsi Mekrij\xe4rvi",101651],["Ilomantsi P\xf6ts\xf6nvaara",101649],["Inari Angeli Lintupuoliselk\xe4",102026],["Inari Ivalo lentoasema",102033],["Inari Kaamanen",102047],["Inari Kirakkaj\xe4rvi",102055],["Inari Nellim",102052],["Inari Raja-Jooseppi",102009],["Inari Saariselk\xe4 Kaunisp\xe4\xe4",102006],["Inari Saariselk\xe4 matkailukeskus",102005],["Inari Seitalaassa",129963],["Inari V\xe4yl\xe4",102042],["Inkoo B\xe5gask\xe4r",100969],["Joensuu Linnunlahti",101632],["Jokioinen Ilmala",101104],["Jomala Jomalaby",100917],["Jomala Maarianhamina lentoasema",100907],["Joutsa Savenaho",101367],["Juuka Niemel\xe4",101609],["Juupajoki Hyyti\xe4l\xe4",101317],["Juva Partala",101418],["Jyv\xe4skyl\xe4 lentoasema",101339],["Jyv\xe4skyl\xe4 lentoasema AWOS",137208],["J\xe4ms\xe4 Halli Lentoasemantie",101338],["J\xe4ms\xe4 Halli lentoasema",101315],["J\xe4rvenp\xe4\xe4 Sorto",103786],["Kaarina Ylt\xf6inen",100934],["Kajaani Pet\xe4isenniska",126736],["Kajaani lentoasema",101725],["Kalajoki Ulkokalla",101673],["Kankaanp\xe4\xe4 Niinisalo lentokentt\xe4",101291],["Karvia Alkkia",101272],["Kaskinen S\xe4lgrund",101256],["Kauhajoki Kuja-Kokko",101289],["Kauhava lentokentt\xe4",101503],["Kemi Ajos",101846],["Kemi I majakka",101783],["Kemi Kemi-Tornio lentoasema",101840],["Kemij\xe4rvi lentokentt\xe4",101950],["Kemi\xf6nsaari Kemi\xf6",100951],["Kemi\xf6nsaari V\xe4n\xf6",100945],["Kirkkonummi M\xe4kiluoto",100997],["Kittil\xe4 Kentt\xe4rova",101987],["Kittil\xe4 Lompolonvuoma",778135],["Kittil\xe4 Matorova",101985],["Kittil\xe4 Pokka",101994],["Kittil\xe4 kirkonkyl\xe4",101990],["Kittil\xe4 lentoasema",101986],["Kokem\xe4ki Tulkkila",101103],["Kokkola Santahaka",101675],["Kokkola Tankar",101661],["Korsn\xe4s Bredsk\xe4ret",101479],["Kotka Haapasaari",101042],["Kotka Rankki",101030],["Kouvola Anjala",101194],["Kouvola Utti Lentoportintie",101219],["Kouvola Utti lentoasema",101191],["Kristiinankaupunki Majakka",101268],["Kruunupyy Kokkola-Pietarsaari lentoasema",101662],["Kuhmo Kalliojoki",101773],["Kumlinge kirkonkyl\xe4",100928],["Kuopio Maaninka",101572],["Kuopio Ritoniemi",101580],["Kuopio Savilahti",101586],["Kustavi Isokari",101059],["Kuusamo Juuma",101899],["Kuusamo Kiutak\xf6ng\xe4s",101887],["Kuusamo Ruka Talvij\xe4rvi",806428],["Kuusamo Rukatunturi",101897],["Kuusamo V\xe4likangas",107081],["Kuusamo lentoasema",101886],["K\xf6kar Bogsk\xe4r",100921],["Lahti Sopenkorpi",104796],["Lappeenranta Hiekkapakka",101252],["Lappeenranta Konnunsuo",101246],["Lappeenranta Lepola",101247],["Lappeenranta lentoasema",101237],["Lemland Nyhamn",100909],["Lieksa Lampela",101636],["Liperi Joensuu lentoasema",101608],["Liperi Tuiskavanluoto",101628],["Lohja Porla",100974],["Loviisa Orrengrund",101039],["Luhanka Judinsalo",101362],["Lumparland L\xe5ngn\xe4s satama",151048],["Maalahti Str\xf6mmingsb\xe5dan",101481],["Maarianhamina L\xe4nsisatama",151029],["Mikkeli Lentoasema AWOS",855522],["Mikkeli lentoasema",101398],["Multia Karhila",101536],["Muonio Laukukero",101982],["Muonio Sammaltunturi",101983],["Muonio kirkonkyl\xe4",106435],["Mustasaari Valassaaret",101464],["M\xe4nts\xe4l\xe4 Hirvihaara",103794],["Nurmes Valtimo",101743],["Nurmij\xe4rvi R\xf6ykk\xe4",101149],["Oulu Oulunsalo Pellonp\xe4\xe4",101799],["Oulu Vihre\xe4saari satama",101794],["Oulu lentoasema",101786],["Parainen Fagerholm",100924],["Parainen Ut\xf6",100908],["Parikkala Koitsanlahti",101254],["Pelkosenniemi Pyh\xe4tunturi",101958],["Pello kirkonkyl\xe4",101914],["Pietarsaari Kallan",101660],["Pirkkala Tampere-Pirkkala lentoasema",101118],["Pori Tahkoluoto satama",101267],["Pori lentoasema",101044],["Pori rautatieasema",101064],["Porvoo Em\xe4salo",101023],["Porvoo Harabacka",101028],["Porvoo Kalb\xe5dagrund",101022],["Porvoo Kilpilahti satama",100683],["Pudasj\xe4rvi lentokentt\xe4",101805],["Puolanka Paljakka",101831],["Puumala kirkonkyl\xe4",150168],["Pyht\xe4\xe4 lentokentt\xe4",107029],["Pyh\xe4j\xe4rvi Ojakyl\xe4",101705],["Raahe Lapaluoto satama",101785],["Raahe Nahkiainen",101775],["Raasepori Jussar\xf6",100965],["Rantasalmi Rukkasluoto",101436],["Ranua lentokentt\xe4",101873],["Rauma Kylm\xe4pihlaja",101061],["Rauma Pyynp\xe4\xe4",105427],["Rautavaara Yl\xe4-Luosta",101603],["Rovaniemi Apukka",101933],["Rovaniemi lentoasema",101920],["Rovaniemi lentoasema AWOS",137190],["Rovaniemi rautatieasema",101928],["Salla Naruska",101966],["Salla V\xe4rri\xf6tunturi",102012],["Salla kirkonkyl\xe4",101959],["Salo Kiikala lentokentt\xe4",100967],["Salo K\xe4rkk\xe4",100955],["Savonlinna Punkaharju Laukansaari",101441],["Savonlinna lentoasema",101430],["Savukoski kirkonkyl\xe4",101952],["Sein\xe4joki Pelmaa",101486],["Siikajoki Ruukki",101787],["Siilinj\xe4rvi Kuopio lentoasema",101570],["Sipoo Eestiluoto",101029],["Sipoo It\xe4toukki",105392],["Sodankyl\xe4 Lokka",102e3],["Sodankyl\xe4 T\xe4htel\xe4",101932],["Sodankyl\xe4 Vuotso",102001],["Somero Salkola",101128],["Sotkamo Kuolaniemi",101756],["Sotkamo Tuhkakyl\xe4",107113],["Suomussalmi Pesi\xf6",101826],["Taivalkoski kirkonkyl\xe4",101885],["Tampere H\xe4rm\xe4l\xe4",101124],["Tampere Siilinkari",101311],["Tampere Tampella",151049],["Tohmaj\xe4rvi Kemie",101459],["Toholampi Laitala",101689],["Tornio Torppi",101851],["Turku Artukainen",100949],["Turku Rajakari",100947],["Turku lentoasema",101065],["Utsjoki Kevo",102035],["Utsjoki Kevo Kevoj\xe4rvi",126737],["Utsjoki Nuorgam",102036],["Vaala Pelso",101800],["Vaasa Klemettil\xe4",101485],["Vaasa lentoasema",101462],["Vantaa Helsinki-Vantaa lentoasema AWOS",137189],["Vantaa Helsinki-Vantaan lentoasema",100968],["Varkaus Kosulanniemi",101421],["Vesanto kirkonkyl\xe4",101555],["Vierem\xe4 Kaarakkala",101726],["Vihti Maasoja",100976],["Viitasaari Haapaniemi",101537],["Virolahti Koivuniemi",101231],["Virrat \xc4ij\xe4nneva",101310],["Ylitornio Meltosj\xe4rvi",101908],["Ylivieska lentokentt\xe4",101690],["\xc4ht\xe4ri Inha",101520]],y=function(a){Object(s.a)(t,a);var e=Object(m.a)(t);function t(){return Object(r.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"datatable",className:"center"},i.a.createElement("table",null,i.a.createElement("caption",{id:"caption"},"S\xe4\xe4n \xe4\xe4riarvot"),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Aikav\xe4li"),i.a.createElement("th",null,"Korkein l\xe4mp\xf6tila"),i.a.createElement("th",null,"Alhaisin l\xe4mp\xf6tila"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{id:"last-day"},"Eilinen"),i.a.createElement("td",{id:"last-day-hot"}),i.a.createElement("td",{id:"last-day-cold"}))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{id:"last-7-days"},"Edelt\xe4v\xe4 viikko"),i.a.createElement("td",{id:"last-7-days-hot"}),i.a.createElement("td",{id:"last-7-days-cold"}))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{id:"last-30-days"},"Edelt\xe4v\xe4 kuukausi"),i.a.createElement("td",{id:"last-30-days-hot"}),i.a.createElement("td",{id:"last-30-days-cold"}))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{id:"last-365-days"},"Edelt\xe4v\xe4 vuosi"),i.a.createElement("td",{id:"last-365-days-hot"}),i.a.createElement("td",{id:"last-365-days-cold"})))))}}]),t}(n.Component);function g(a){var e,t=a.locations[0].data.tmax.timeValuePairs,n=a.locations[0].data.tmin.timeValuePairs,i=t.reduce((function(a,e,t){return a.value<e.value?e:a})),l=n.reduce((function(a,e,t){return a.value>e.value?e:a})),o=(e=t).slice(e.length-new Date((new Date).getFullYear(),(new Date).getMonth(),0).getDate(),e.length).reduce((function(a,e,t){return a.value<e.value?e:a})),r=function(a){return a.slice(a.length-new Date((new Date).getFullYear(),(new Date).getMonth(),0).getDate(),a.length).reduce((function(a,e,t){return a.value>e.value?e:a}))}(n),u=function(a){return a.slice(a.length-7,a.length).reduce((function(a,e,t){return a.value<e.value?e:a}))}(t),s=function(a){return a.slice(a.length-7,a.length).reduce((function(a,e,t){return a.value>e.value?e:a}))}(n);document.getElementById("last-365-days-hot").textContent="".concat(i.value.toFixed(1)," (").concat(new Date(i.time).getDate(),".").concat(new Date(i.time).getMonth()+1,".").concat(new Date(i.time).getFullYear(),")"),document.getElementById("last-365-days-cold").textContent="".concat(l.value.toFixed(1)," (").concat(new Date(l.time).getDate(),".").concat(new Date(l.time).getMonth()+1,".").concat(new Date(l.time).getFullYear(),")"),document.getElementById("last-30-days-hot").textContent="".concat(o.value.toFixed(1)," (").concat(new Date(o.time).getDate(),".").concat(new Date(o.time).getMonth()+1,".").concat(new Date(o.time).getFullYear(),")"),document.getElementById("last-30-days-cold").textContent="".concat(r.value.toFixed(1)," (").concat(new Date(r.time).getDate(),".").concat(new Date(r.time).getMonth()+1,".").concat(new Date(r.time).getFullYear(),")"),document.getElementById("last-7-days-hot").textContent="".concat(u.value.toFixed(1)," (").concat(new Date(u.time).getDate(),".").concat(new Date(u.time).getMonth()+1,".").concat(new Date(u.time).getFullYear(),")"),document.getElementById("last-7-days-cold").textContent="".concat(s.value.toFixed(1)," (").concat(new Date(s.time).getDate(),".").concat(new Date(s.time).getMonth()+1,".").concat(new Date(s.time).getFullYear(),")"),document.getElementById("last-day-hot").textContent="".concat(t[t.length-1].value.toFixed(1)," (").concat(new Date(t[t.length-1].time).getDate(),".").concat(new Date(t[t.length-1].time).getMonth()+1,".").concat(new Date(t[t.length-1].time).getFullYear(),")"),document.getElementById("last-day-cold").textContent="".concat(n[n.length-1].value.toFixed(1)," (").concat(new Date(n[n.length-1].time).getDate(),".").concat(new Date(n[n.length-1].time).getMonth()+1,".").concat(new Date(n[n.length-1].time).getFullYear(),")")}function K(a){var e=[],t=new RegExp(a,"i");return a.length>1?(p.forEach((function(a,n){t.test(a[0])&&e.push(a)})),e):(p.forEach((function(a,t){e.push(a)})),e)}o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c,null),i.a.createElement(v,null),i.a.createElement(y,{elements:y.elements})),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c347f939.chunk.js.map