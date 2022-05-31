// you tube api key let Apikey="AIzaSyB-lcLdWYLUHT6ZFGM1uGJmKaCLJ4JieWs"
// you tube website create
// step1: url 
// go to this website https://developers.google.com/youtube/v3/ and then click the righ hand side search for content link
// and then fill the data acording to your need and then execute it and then explore the code and copy the url in browser
// step: fetch()
// step3: append

const YOUR_API_KEY="AIzaSyB-lcLdWYLUHT6ZFGM1uGJmKaCLJ4JieWs"

// function getData(){

// }    //this is old function 
let getData= async ()=>{     // thgis is new function to defime the function
    let query= document.getElementById("query").value 
    console.log(query)
try {

    let Url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyB-lcLdWYLUHT6ZFGM1uGJmKaCLJ4JieWs`

    let res= await fetch(Url) //this method is simplest and called as async method

    let data= await res.json()
    appendData(data.items)

    // console.log(data)
} catch (error) {
   console.log(error) 
}
    

}

// fetch(Url) //this is a method of .then and .catch 
// .then(function(res){
//     return res.json() 
// }).then(function(data){

//     // return data

//     appendData(data.items)
//     // console.log(data)
// }).catch(err){
// console.log(err)
// }
// }
// append the data on dom

/* <iframe width="560"height="315"   //we have to append the data in this format 
src="https://www.youtube.com/embed/iLWTnMzWtj4"
title="YouTube video player"
frameborder="0"
allow="accelerometer;
autoplay;clipboard-write;
encrypted-media;gyroscope;
picture-in-picture"allowfullscreen></iframe>
*/ 
                                                // Video Id
let appendData=(data)=>{
    let container= document.getElementById("container")
console.log(data)
data.forEach(( { id:{ videoId }, snippet:{ title,thumbnail}}) => {      //inside the forEach function there is a destructuring method which is a new method before wew have elem.(dot) method
    // console.log(id)
    // console.log(snippet)

    let div = document.createElement("div")
    let iframe= document.createElement("iframe")
    iframe.allow="fullscreen"
    iframe.src= `https://www.youtube.com/embed/${videoId}`

    let Title= document.createElement("h3")
    Title.innerText= title

    div.append(iframe,Title)

    let video = {
              title,
              videoId,
            };
        
            div.onclick = () => {
              playVideo(video);
            };
    container.append(div)

});
}

let playVideo = (video) => {
     localStorage.setItem("video", JSON.stringify(video));
      window.location.href = "video.html";
    };
 