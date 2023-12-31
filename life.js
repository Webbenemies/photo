const form = document.getElementById("form")
const input = document.getElementById("input")
const output = document.getElementById("output")
const select = document.getElementById("select")
const load = document.getElementById("load")
const orderse = document.getElementById("orderse")
const orientationse = document.getElementById("orientationse")
const perpagese = document.getElementById("perpagese")
const click = document.querySelector(".click")
let pagen = 1
const apikey = "32980765-36d62ed19c7d80d9b2f9ea1fe";
const arrfun = (e = "something went wrong") => {
    let err = document.createElement("h1");
    err.innerText = e
    err.className = "error"
    document.body.insertAdjacentElement("afterbegin", err)
    setTimeout(() => {
        err.remove()
    }, 2000)
}

window.addEventListener("offline",()=>{
    arrfun(e = "offline")
})
window.addEventListener("online",()=>{
    arrfun(e = "online")
})

window.addEventListener("load",()=>{
    setTimeout(()=>{
        if (navigator.onLine) {
            arrfun(e = "online")
        }else{
            arrfun(e = "offline")
        }
    },1000)
})

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    output.innerHTML = ""
    if (select.value != "video") {
        let gg = await engine()
        gg.forEach((e) => {
            let previewURL = (e.largeImageURL)
            let photo = document.createElement("img")
            let photobox = document.createElement("div")
            photo.src = previewURL
            photo.className = "photo"
            photobox.className = "photobox"
            let a = document.createElement("a")
            a.href= e.pageURL
            a.innerText = ">"
            a.target = "_blank"
            photobox.appendChild(a)
            photobox.appendChild(photo)
            output.appendChild(photobox)
        });
        
    } else {
        let videoarr = await viengine()

        videoarr.forEach((e)=>{
         let previewURL = (e.videos.medium.url)
         let video = document.createElement("video")
         video.setAttribute("controls", "true")
         let videobox = document.createElement("div")
         video.src = previewURL
         videobox.className = "videobox"
         video.className = "video"
         videobox.appendChild(video)
         output.appendChild(videobox)
        })
    }
})



click.addEventListener("click", async (e) => {
    e.preventDefault()
    pagen++
    console.log(pagen);
    if (select.value != "video") {
        let gg = await engine()
        gg.forEach((e) => {
            let previewURL = (e.largeImageURL)
            let photo = document.createElement("img")
            let photobox = document.createElement("div")
            photo.src = previewURL
            photo.className = "photo"
            photobox.className = "photobox"
            let a = document.createElement("a")
            a.href= e.pageURL
            a.target = "_blank"
            a.innerText = ">"
            photobox.appendChild(a)
            photobox.appendChild(photo)
            output.appendChild(photobox)
        });
        
    } else {
        let videoarr = await viengine()

        videoarr.forEach((e)=>{
         let previewURL = (e.videos.medium.url)
         let video = document.createElement("video")
         video.setAttribute("controls", "true")
         let videobox = document.createElement("div")
         video.src = previewURL
         videobox.className = "videobox"
         video.className = "video"
         videobox.appendChild(video)
         output.appendChild(videobox)
        })
    }
})
select.addEventListener("change", async () => {
    if (select.value == "video") {
        let videoarr = await viengine()

        videoarr.forEach((e)=>{
         let previewURL = (e.videos.medium.url)
         let video = document.createElement("video")
         video.setAttribute("controls", "true")
         let videobox = document.createElement("div")
         video.src = previewURL
         videobox.className = "videobox"
         video.className = "video"
         videobox.appendChild(video)
         output.appendChild(videobox)
        })
    } else {
        output.innerHTML = ""
        let se = await engine()
        se.forEach((e) => {
            let previewURL = (e.largeImageURL)
            let photo = document.createElement("img")
            let photobox = document.createElement("div")
            photo.src = previewURL
            photo.className = "photo"
            photobox.className = "photobox"
            let a = document.createElement("a")
            a.href= e.pageURL
            a.target = "_blank"
            a.innerText = ">"
            photobox.appendChild(a)
            photobox.appendChild(photo)
            output.appendChild(photobox)
        });
        
    }

})

orderse.addEventListener("change",async()=>{

    if (select.value != "video") {
        output.innerHTML = ""
        let see = await engine()
        see.forEach((e) => {
            let previewURL = (e.largeImageURL)
            let photo = document.createElement("img")
            let photobox = document.createElement("div")
            photo.src = previewURL
            photo.className = "photo"
            photobox.className = "photobox"
            let a = document.createElement("a")
            a.href= e.pageURL
            a.target = "_blank"
            a.innerText = ">"
            photobox.appendChild(a)
            photobox.appendChild(photo)
            output.appendChild(photobox)
        });
    }else{
        let videoarro = await viengine()

        videoarro.forEach((e)=>{
         let previewURL = (e.videos.medium.url)
         let video = document.createElement("video")
         video.setAttribute("controls", "true")
         let videobox = document.createElement("div")
         video.src = previewURL
         videobox.className = "videobox"
         video.className = "video"
         videobox.appendChild(video)
         output.appendChild(videobox)
        })
        
    }
})

orientationse.addEventListener("change", async()=>{
    if (select.value != "video") {
        output.innerHTML = ""
        let see = await engine()
        see.forEach((e) => {
            let previewURL = (e.largeImageURL)
            let photo = document.createElement("img")
            let photobox = document.createElement("div")
            photo.src = previewURL
            photo.className = "photo"
            photobox.className = "photobox"
            let a = document.createElement("a")
            a.href= e.pageURL
            a.target = "_blank"
            a.innerText = ">"
            photobox.appendChild(a)
            photobox.appendChild(photo)
            output.appendChild(photobox)
        });
    } else {
        console.log("change arrfun");
        arrfun(e = "this filter not working in videos")
    }
})

perpagese.addEventListener("change", async()=>{
    if (select.value != "video") {
        output.innerHTML = ""
        let par = await engine()
        par.forEach((e) => {
            let previewURL = (e.largeImageURL)
            let photo = document.createElement("img")
            let photobox = document.createElement("div")
            photo.src = previewURL
            photo.className = "photo"
            photobox.className = "photobox"
            let a = document.createElement("a")
            a.href= e.pageURL
            a.target = "_blank"
            a.innerText = ">"
            photobox.appendChild(a)
            photobox.appendChild(photo)
            output.appendChild(photobox)
        });
    } else {
        console.log("change arrfun");
        arrfun(e = "this filter not work in videos")
    }
})


const engine = async () => {
    try {
        load.style.display = "flex"
        let type = select.value
        let value = input.value
        let order = orderse.value
        let orientation = orientationse.value
        let parpagevalue = perpagese.value
        let url = `https://pixabay.com/api/?key=${apikey}&lang=en&q=${value}&page=${pagen}&image_type=${type}&order=${order}&orientation=${orientation}&per_page=${parpagevalue}`

        if (pagen == 1) {
            output.innerHTML = ""
        }
        let react = await fetch(url)
        let data = await react.json()
        let globdata = data.hits
        console.log(data.hits);
        click.style.display = "block"
        load.style.display = "none"
        if (globdata.length == 0) {
            click.style.display = "none"
            arrfun(e = "No Image Found")
        }
        return globdata
    } catch (error) {
        load.style.display = "none";
        click.style.display = "none";
        arrfun()
    }
}

const viengine = async()=>{
    try {
        load.style.display = "flex"
        let value = input.value
        let videoorder = orderse.value
        let url = `https://pixabay.com/api/videos/?key=${apikey}&lang=en&q=${value}&page=${pagen}&order=${videoorder}`

        if (pagen == 1) {
            output.innerHTML = ""
        }
        let react = await fetch(url)
        let data = await react.json()
        let globdata = data.hits
        console.log(data.hits);
        click.style.display = "block"
        load.style.display = "none"
        if (globdata.length == 0) {
            click.style.display = "none"
            arrfun(e = "No Image Found")
        }
        return globdata
    } catch (error) {
        load.style.display = "none";
        click.style.display = "none";
        arrfun()
    }
}