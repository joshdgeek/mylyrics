
let btn = document.querySelector("#show")
 function show(){
  let artist = document.querySelector("#art").value
  let tit = document.querySelector("#tit").value
const Data =
{ url: "https://api.lyrics.ovh/v1",
  art: artist,
 title: tit,
}
let {url,art,title} = Data;
let Url =` ${url}/${art}/${title}`

console.log(Url)

fetch(Url)
.then((res)=> res.json())
.then((ovh)=>html(ovh))

function html(data){

  console.log(data)
 
  let lyric = document.querySelector(".result")
  let doms = `
  <h3 align="center">${art}--${title}</h3>
      <div class="whhd">${data.lyrics}</div>
  `
  lyric.innerHTML = doms;
}
}