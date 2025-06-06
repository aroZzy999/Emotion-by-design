
// ========== Emotion Visualisation That Changes with Scroll ==========

// Get references to the 4 emotion image containers
let time_emo1 = document.querySelector('.time_emo1')
let time_emo2 = document.querySelector('.time_emo2')
let time_emo3 = document.querySelector('.time_emo3')
let time_emo4 = document.querySelector('.time_emo4')

document.addEventListener('keyup', function (event) {
    if (event.keyCode == 38) {
        event.preventDefault()
    } else if (event.keyCode == 40) {
        event.preventDefault()
    }
})
// Get emotion image list and time label elements
let emo1_imgAll = document.querySelectorAll('.emo1_img')
let time_emo1_img = document.querySelector('.time_emo1_img')
let time_center_div = document.querySelectorAll('.time_center div')
// Divide screen height into 11 scroll intervals
let time_emo1_height = time_emo1.offsetHeight / 11


// Scroll event handler: update emotion images and time labels based on scroll position
document.onscroll = function (e) {
    let emoTop = time_emo1_img.offsetTop
    // Each condition corresponds to one scroll interval
    if (emoTop >= 0 && emoTop <= time_emo1_height * 1) {
        console.log('1')
        emo1_imgAll[0].src = 'images/Balanced.png'
        emo1_imgAll[1].src = 'images/Balanced.png'
        emo1_imgAll[2].src = 'images/Stagnant.png'
        emo1_imgAll[3].src = 'images/Balanced.png'
        delClassName()
        time_center_div[0].classList.add('time_center_active')
    }

     // Interval 2 to 11 — update emotion and highlight label
    if (emoTop > time_emo1_height * 1 && emoTop <= time_emo1_height * 2) {
        console.log('2')
        emo1_imgAll[0].src = 'images/Balanced.png'
        emo1_imgAll[1].src = 'images/Balanced.png'
        emo1_imgAll[2].src = 'images/Stagnant.png'
        emo1_imgAll[3].src = 'images/Balanced.png'
        delClassName()
        time_center_div[1].classList.add('time_center_active')
    }

    if (emoTop > time_emo1_height * 2 && emoTop <= time_emo1_height * 3) {
        console.log('3')
        emo1_imgAll[0].src = 'images/Balanced.png'
        emo1_imgAll[1].src = 'images/Stagnant.png'
        emo1_imgAll[2].src = 'images/Balanced.png'
        emo1_imgAll[3].src = 'images/Balanced.png'
        delClassName()
        time_center_div[2].classList.add('time_center_active')
    }

    if (emoTop > time_emo1_height * 3 && emoTop <= time_emo1_height * 4) {
        console.log('4')
        emo1_imgAll[0].src = 'images/Stagnant.png'
        emo1_imgAll[1].src = 'images/Balanced.png'
        emo1_imgAll[2].src = 'images/Balanced.png'
        emo1_imgAll[3].src = 'images/Balanced.png'
        delClassName()
        time_center_div[3].classList.add('time_center_active')
    }

    if (emoTop > time_emo1_height * 4 && emoTop <= time_emo1_height * 5) {
        console.log('5')
        emo1_imgAll[0].src = 'images/Stagnant.png'
        emo1_imgAll[1].src = 'images/Balanced.png'
        emo1_imgAll[2].src = 'images/Stagnant.png'
        emo1_imgAll[3].src = 'images/Balanced.png'
        delClassName()
        time_center_div[4].classList.add('time_center_active')
    }

    if (emoTop > time_emo1_height * 5 && emoTop <= time_emo1_height * 6) {
        console.log('6')
        emo1_imgAll[0].src = 'images/Balanced.png'
        emo1_imgAll[1].src = 'images/Stagnant.png'
        emo1_imgAll[2].src = 'images/Balanced.png'
        emo1_imgAll[3].src = 'images/Balanced.png'
        delClassName()
        time_center_div[5].classList.add('time_center_active')
    }


    if (emoTop > time_emo1_height * 6 && emoTop <= time_emo1_height * 7) {
        console.log('7')
        emo1_imgAll[0].src = 'images/Balanced.png'
        emo1_imgAll[1].src = 'images/Balanced.png'
        emo1_imgAll[2].src = 'images/Balanced.png'
        emo1_imgAll[3].src = 'images/Balanced.png'
        delClassName()
        time_center_div[6].classList.add('time_center_active')
    }

    if (emoTop > time_emo1_height * 7 && emoTop <= time_emo1_height * 8) {
        console.log('8')
        emo1_imgAll[0].src = 'images/Stagnant.png'
        emo1_imgAll[1].src = 'images/Balanced.png'
        emo1_imgAll[2].src = 'images/Stagnant.png'
        emo1_imgAll[3].src = 'images/Balanced.png'
        delClassName()
        time_center_div[7].classList.add('time_center_active')
    }

    if (emoTop > time_emo1_height * 8 && emoTop <= time_emo1_height * 9) {
        console.log('9')
        emo1_imgAll[0].src = 'images/Stagnant.png'
        emo1_imgAll[1].src = 'images/Balanced.png'
        emo1_imgAll[2].src = 'images/Stagnant.png'
        emo1_imgAll[3].src = 'images/Balanced.png'
        delClassName()
        time_center_div[8].classList.add('time_center_active')
    }

    if (emoTop > time_emo1_height * 9 && emoTop <= time_emo1_height * 10) {
        console.log('10')
        emo1_imgAll[0].src = 'images/Balanced.png'
        emo1_imgAll[1].src = 'images/Stagnant.png'
        emo1_imgAll[2].src = 'images/Stagnant.png'
        emo1_imgAll[3].src = 'images/Balanced.png'
        delClassName()
        time_center_div[9].classList.add('time_center_active')
    }

    if (emoTop > time_emo1_height * 10 && emoTop <= time_emo1_height * 11) {
        console.log('11')
        emo1_imgAll[0].src = 'images/Balanced.png'
        emo1_imgAll[1].src = 'images/Balanced.png'
        emo1_imgAll[2].src = 'images/Stagnant.png'
        emo1_imgAll[3].src = 'images/Balanced.png'
        delClassName()
        time_center_div[10].classList.add('time_center_active')
    }


}

// Utility function: remove 'active' class from all time labels
function delClassName() {
    for (let i = 0; i < time_center_div.length; i++) {
        time_center_div[i].classList.remove('time_center_active')
    }
}


// ========== Load Map Data and Prepare for Interaction ==========
// Store processed CSV zone data
let zone_data = {}

// Load and group CSV by zone_id. 
// Each variable contains a color array: N = None, L = Low, M = Medium, H = High
d3.csv("../data/part3_new.csv").then(data => {
    const grouped = {};
    data.forEach(d => {
        const zone = d.zone_id.trim();
        grouped[zone] = {
            co2_colors: d.co2_colors.split(','),
            lux_colors: d.lux_colors.split(','),
            pmv_colors: d.pmv_colors.split(','),
            spl_colors: d.spl_colors.split(','),
        }
    });
    zone_data = grouped
})

// ========== Bind Click Events to All Map Areas ==========

// Get main image and display zone name container
let map_img_src = document.querySelector('.map_img_src')
let map1 = document.querySelector('.map1')
let map2 = document.querySelector('.map2')
let map3 = document.querySelector('.map3')
let map4 = document.querySelector('.map4')
let map5 = document.querySelector('.map5')
let map6 = document.querySelector('.map6')
let map7 = document.querySelector('.map7')
let map8 = document.querySelector('.map8')
let map9 = document.querySelector('.map9')
let map10 = document.querySelector('.map10')
let map11 = document.querySelector('.map11')
let map12 = document.querySelector('.map12')
let map13 = document.querySelector('.map13')
let map14 = document.querySelector('.map14')
let map15 = document.querySelector('.map15')
let map16 = document.querySelector('.map16')
let map17 = document.querySelector('.map17')
let map18 = document.querySelector('.map18')
let map19 = document.querySelector('.map19')
// Get the zone name text area displayed on the map
let map_name = document.querySelector('.map_name')
// // Get variable bar containers
let co2_con = document.querySelector('.co2_con')
let lux_con = document.querySelector('.lux_con')
let spl_con = document.querySelector('.spl_con')
let pmv_con = document.querySelector('.pmv_con')

// ========== Bind click events to each map area ==========
// // On each map click: change map image, show zone name, and generate variable bar HTML

// click map1 → display zone_8
map1.onclick = function () {
    map_img_src.src = 'images/map/zone_8.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_8'
    createHTML(8)
}
// click map2 → display zone_26
map2.onclick = function () {
    map_img_src.src = 'images/map/zone_26.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_26'
    createHTML(26)
}
// repeat for map2 to map19
map3.onclick = function () {
    map_img_src.src = 'images/map/zone_27.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_27'
    createHTML(27)
}
map4.onclick = function () {
    map_img_src.src = 'images/map/zone_30.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_30'
    createHTML(30)
}
map5.onclick = function () {
    map_img_src.src = 'images/map/zone_31.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_31'
    createHTML(31)
}

map6.onclick = function () {
    map_img_src.src = 'images/map/zone_46.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_46'
    createHTML(46)
}

map7.onclick = function () {
    map_img_src.src = 'images/map/zone_47.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_47'
    createHTML(47)
}
map8.onclick = function () {
    map_img_src.src = 'images/map/zone_48.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_48'
    createHTML(48)
}
map9.onclick = function () {
    map_img_src.src = 'images/map/zone_49.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_49'
    createHTML(49)
}
map10.onclick = function () {
    map_img_src.src = 'images/map/zone_50.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_50'
    createHTML(50)
}

map11.onclick = function () {
    map_img_src.src = 'images/map/zone_51.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_51'
    createHTML(51)
}
map12.onclick = function () {
    map_img_src.src = 'images/map/zone_52.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_52'
    createHTML(52)
}
map13.onclick = function () {
    map_img_src.src = 'images/map/zone_243.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_243'
    createHTML(243)
}
map14.onclick = function () {
    map_img_src.src = 'images/map/zone_244.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_244'
    createHTML(244)
}

map15.onclick = function () {
    map_img_src.src = 'images/map/zone_402.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_402'
    createHTML(402)
}
map16.onclick = function () {
    map_img_src.src = 'images/map/zone_403.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_403'
    createHTML(403)
}
map17.onclick = function () {
    map_img_src.src = 'images/map/zone_430.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_430'
    createHTML(430)
}
map18.onclick = function () {
    map_img_src.src = 'images/map/zone_430.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_430'
    createHTML(430)
}
map19.onclick = function () {
    map_img_src.src = 'images/map/zone_431.png'
    map_name.style.display = 'block'
    map_name.innerHTML = 'zone_431'
    createHTML(431)
}
// ========== Render Colour Bars Based on Zone Data ==========
function createHTML(data) {
    let co2 = zone_data[data].co2_colors
    let lux = zone_data[data].lux_colors
    let spl = zone_data[data].spl_colors
    let pmv = zone_data[data].pmv_colors
     // Build CO2 bar
    let co2Html = ``
    for (let i = 0; i < co2.length; i++) {
        if(co2[i] == 'N'){
            co2Html = co2Html + `<div class="con2_n"></div>`
        }
        if(co2[i] == 'L'){
            co2Html = co2Html + `<div class="con2_l"></div>`
        }
        if(co2[i] == 'M'){
            co2Html = co2Html + `<div class="con2_m"></div>`
        }
        if(co2[i] == 'H'){
            co2Html = co2Html + `<div class="con2_h"></div>`
        }
    }
    co2_con.innerHTML = co2Html

    // Build LUX bar
    let luxHtml = ``
    for (let i = 0; i < lux.length; i++) {
        if(lux[i] == 'N'){
            luxHtml = luxHtml + `<div class="lux_n"></div>`
        }
        if(lux[i] == 'L'){
            luxHtml = luxHtml + `<div class="lux_l"></div>`
        }
        if(lux[i] == 'M'){
            luxHtml = luxHtml + `<div class="lux_m"></div>`
        }
        if(lux[i] == 'H'){
            luxHtml = luxHtml + `<div class="lux_h"></div>`
        }
    }
    lux_con.innerHTML = luxHtml

    // SPL bar
    let splHtml = ``
    for (let i = 0; i < spl.length; i++) {
        if(spl[i] == 'N'){
            splHtml = splHtml + `<div class="spl_n"></div>`
        }
        if(spl[i] == 'L'){
            splHtml = splHtml + `<div class="spl_l"></div>`
        }
        if(spl[i] == 'M'){
            splHtml = splHtml + `<div class="spl_m"></div>`
        }
        if(spl[i] == 'H'){
            splHtml = splHtml + `<div class="spl_h"></div>`
        }
    }
    spl_con.innerHTML = splHtml
    // PMV bar
    let pmvHtml = ``
    for (let i = 0; i < pmv.length; i++) {
        if(pmv[i] == 'N'){
            pmvHtml = pmvHtml + `<div class="pmv_n"></div>`
        }
        if(pmv[i] == 'L'){
            pmvHtml = pmvHtml + `<div class="pmv_l"></div>`
        }
        if(pmv[i] == 'M'){
            pmvHtml = pmvHtml + `<div class="pmv_m"></div>`
        }
        if(pmv[i] == 'H'){
            pmvHtml = pmvHtml + `<div class="pmv_h"></div>`
        }
    }
    pmv_con.innerHTML = pmvHtml
}

