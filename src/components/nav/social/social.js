import React from "react"
import be from "@img/behance.svg"
import fb from "@img/facebook.svg"
import tw from "@img/twitter.svg"
import { SocialMedia } from "./social-presentation"
const Social = () => {
  return (
    <>
      <SocialMedia>
        <img src={be} alt="behance" />
        <img src={fb} alt="facebook" />
        <img src={tw} alt="twitter" />
      </SocialMedia>
    </>
  )
}

export default Social
