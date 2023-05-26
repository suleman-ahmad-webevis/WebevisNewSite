import React from 'react'
import Image from 'next/image'
import { ImageSection } from './ImageBar.style'
import img1 from "../../EmailServices/assests/rectangle2.png"
import img2 from "../../EmailServices/assests/rectangle1.png"
import img3 from "../../EmailServices/assests/rectangle3.png"
import img4 from "../../EmailServices/assests/rectangle2.png"
import img5 from "../../EmailServices/assests/rectangle5.png"
import img6 from "../../EmailServices/assests/rectangle4.png"
const ImageBar = () => {
  return (
    <ImageSection>
    <Image src={img1}/>
    <Image src={img2}/>
    <Image src={img3}/>
    <Image src={img4}/>
    <Image src={img5}/>
    <Image src={img6}/>
    </ImageSection>
  )
}

export default ImageBar
