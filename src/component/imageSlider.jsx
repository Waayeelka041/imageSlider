
import { useState } from "react"
function ImageSlider() {

const [index, setIndex]= useState(0)
// handle next button
const handlNextImage=() =>{
    if(index < images.length -1){

        setIndex(index + 1)
    }
}
// handle prev button
const handprevImage=() =>{
    if(index >0){

        setIndex(index - 1)
    }
}

    const images=[
      "https://img.freepik.com/free-photo/beautiful-shot-sand-dune-with-clear-blue-sky_181624-2071.jpg?t=st=1720857621~exp=1720861221~hmac=52186023ddfaa070faf7dd6db41a568dde66fa5f850959ccb27c98105937e023&w=740",
      "https://img.freepik.com/free-photo/desert-landscape_1048-4714.jpg?t=st=1720858509~exp=1720862109~hmac=591d8d01b552161944bbb3f4a9c46d379fef49cebf46de39d98b1e670405fdb2&w=740",
      "https://img.freepik.com/free-vector/desert-forest-landscape-daytime-scene_1308-57518.jpg?t=st=1720858544~exp=1720862144~hmac=a0ef6bc2999426eb5a77fa7c94c8844bb50e7724a6e8308b8cf68458f0057611&w=826",
      "https://img.freepik.com/free-photo/rippled-sand-dunes-majestic-african-landscape-generated-by-ai_188544-54357.jpg?t=st=1720858579~exp=1720862179~hmac=13bdca4a3b187580b5219c961cd2f109a91019aaaadf4a4a7e1b601bb3effb39&w=740",
      "https://img.freepik.com/free-photo/sand-dunes-sahara-desert_188544-35837.jpg?t=st=1720858615~exp=1720862215~hmac=0b81c69c2df2c187add0d9a7c6661354d6c1438a464930dceadd305687718e75&w=740"


             ]
    return <div className="text-center"> 
    <h1 className="text-4xl bg-orange-500 p-4 text-white"> imageSlider project </h1>
    <div className=" flex justify-center ">
      <img  className="bg-orange-500 w-[350px] sm:w-[900px] sm:h-[360px] object-cover  mt-10 rounded"   src={images[index]}  />
    </div>
<button onClick={handlNextImage} className="bg-orange-500  px-8 sm:px-16 py-4 m-5 text text-white text-3xl"> Next</button>
<button    onClick={handprevImage}   className="bg-orange-500 px-8 sm:px-16 py-4 m-5 text text-white text-3xl"> prev</button>

    </div>
} 
export default ImageSlider