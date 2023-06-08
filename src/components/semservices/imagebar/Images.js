import React from 'react'
import { ImageBar } from './Images.style'
import Image from 'next/image'
import img1 from "../../semservices/assests/rectangle1.png"
import img2 from "../../semservices/assests/rectangle2.png"
import img3 from "../../semservices/assests/rectangle3.png"
import img4 from "../../semservices/assests/rectangle4.png"
import img5 from "../../semservices/assests/rectangle5.png"
import img6 from "../../semservices/assests/rectangle6.png"

const Images = () => {
  return (
<<<<<<< HEAD
      <ImageBar>
<Image src={img1}/>
<Image src={img2}/>
<Image src={img3}/>
<Image src={img4}/>
<Image src={img5}/>
<Image src={img6}/>
      </ImageBar>
  )
=======
    <ImageBar>
      <Image src={img1} alt="img" />
      <Image src={img2} alt="img" />
      <Image src={img3} alt="img" />
      <Image src={img4} alt="img" />
      <Image src={img5} alt="img" />
      <Image src={img6} alt="img" />
    </ImageBar>
  );
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
}

export default Images
