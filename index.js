const catsData = [// skip to after 170 lines i tried using another js file nut it wasnt working
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "angry.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody", "insomniac"],
        isGif: false,
        image: "angry2.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "angry3.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["confused", "sad"],
        isGif: false,
        image: "confused.jpeg",
        alt: "A cat looking confused",
    },
    {
        emotionTags: ["dominant", "moody"],
        isGif: false,
        image: "dominant.jpeg",
        alt: "A cat looking dominant",
    },
    {
        emotionTags: ["happy", "relaxed"],
        isGif: false,
        image: "happy.jpeg",
        alt: "A cat looking happy",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "hungry.jpeg",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "hungry1.jpeg",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "insomnia.jpeg",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "insomnia1.jpeg",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["relaxed"],
        isGif: false,
        image: "lazy.jpeg",
        alt: "A cat looking lazy",
    },
    {
        emotionTags: ["scared"],
        isGif: false,
        image: "nervous.jpeg",
        alt: "A cat looking nervous",
    },
    {
        emotionTags: ["sad"],
        isGif: false,
        image: "sad.jpeg",
        alt: "A cat looking sad",
    },
    {
        emotionTags: ["sad", "moody"],
        isGif: false,
        image: "sad1.jpeg",
        alt: "A cat looking sad",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "angry.gif",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "angry2.gif",
        alt: "A cat looking angry",
    },
    {
        emotionTags: ["confused"],
        isGif: true,
        image: "confused2.gif",
        alt: "A cat looking confused",
    },
    {
        emotionTags: ["dominant"],
        isGif: true,
        image: "dominant.gif",
        alt: "A cat looking dominant",
    },
    {
        emotionTags: ["happy"],
        isGif: true,
        image: "happy.gif",
        alt: "A cat looking happy",
    },
    {
        emotionTags: ["hungry", "sad", "confused"],
        isGif: true,
        image: "confused.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "hungry.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "hungry2.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["insomniac", "scared"],
        isGif: true,
        image: "insomnia2.gif",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["relaxed"],
        isGif: true,
        image: "lazy.gif",
        alt: "A cat looking relaxed",
    },
    {
        emotionTags: ["relaxed"],
        isGif: true,
        image: "relaxed2.gif",
        alt: "A cat looking relaxed",
    },
    {
        emotionTags: ["scared", "sad"],
        isGif: true,
        image: "nervous.gif",
        alt: "A cat looking nervous",
    },
    {
        emotionTags: ["scared"],
        isGif: true,
        image: "nervous2.gif",
        alt: "A cat looking scared",
    },
    {
        emotionTags: ["sad"],
        isGif: true,
        image: "sad.gif",
        alt: "A cat looking sad",
    },
]
const getMeme=document.getElementById("getmeme")
const allEmotions=document.getElementById("all-emotions")
const animatedGifs=document.getElementById("animated-gifs")
const actualMeme=document.getElementById("meme-actual")
allEmotions.addEventListener("change",highlightCheckedMood)
getMeme.addEventListener("click",final)
function final(){
    const finalMeme=getSingleGif()
    actualMeme.innerHTML=`<button id="final-button">X</button><img
    class="cat-img"
    src="${finalMeme.image}"
    alt="${finalMeme.alt}"
    >`
    actualMeme.style.display='flex'
    const finalButton=document.getElementById("final-button")
    finalButton.addEventListener("click",function(){
        actualMeme.style.display='none'
    })
}
function getGifFromImport(){
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedMood= document.querySelector('input[type="radio"]:checked').value
        const gifCheck= animatedGifs.checked
        const finalCatArray= catsData.filter(function(cat){
            if(gifCheck==true && cat.isGif==true){
                return cat.emotionTags.includes(selectedMood) 
            }
            else if(gifCheck==false && cat.isGif==false){
                return cat.emotionTags.includes(selectedMood)
            }
        })
        console.log(finalCatArray)
        return finalCatArray
    }
}
function getSingleGif(){
    const finalArray=getGifFromImport()
    if(finalArray.length===1){
        return finalArray[0]
    }
    else{
        const position= Math.floor(Math.random()*finalArray.length)
        return finalArray[position] 
    }
}
function highlightCheckedMood(e){
    const radios=document.getElementsByClassName("radio")
    for( let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}
function catEmotionArrayMaker(cats){
    let emotionArray=[]
    for(let cat of cats){
        for(let emotion of cat.emotionTags){
            if(!emotionArray.includes(emotion)){
                emotionArray.push(emotion)
            }
        }
    }
    console.log(emotionArray)
    return emotionArray}
function catEmotionMain(cats){
    let radioItems=``
    const moods=catEmotionArrayMaker(cats)
    for(let mood of moods){
        radioItems+=`
        <div class="radio">
        <label for=${mood}>${mood}</label>
        <input
        type="radio"
        value="${mood}"
        id="${mood}"
        name="moods"
        >
        </div>`
    }
    allEmotions.innerHTML=radioItems}
catEmotionMain(catsData)

