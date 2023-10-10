import React from 'react'
import ButtonSendV1 from '../buttons/ButtonSendV1'
import ButtonSendV2 from '../buttons/ButtonSendV2'
import ButtonSendV3 from '../buttons/ButtonSendV3'
import ButtonSendV4 from '../buttons/ButtonSendV4'

const ContactMe = () => {
  return (
    <div id="contact" className="w-[65vw] flex flex-col justify-start gap-5 mt-10">
      <h1 className='uppercase text-slate-700 dark:text-white'>Contact</h1>

      <div className='flex flex-col justify-center items-center gap-10'>
        <ButtonSendV1/>
        <ButtonSendV2/>
        <ButtonSendV3/>
        <ButtonSendV4/>
      </div>
    </div>
  )
}

export default ContactMe
