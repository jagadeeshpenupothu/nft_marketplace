import React from 'react'
import Image from "next/image";

//internal import
import Style from './Notifications.module.css'
import images from '../../../img'

const Notifications = () => {
  return (
    <div className = {Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image src={images.user1}
          alt="profile image"
          width={50}
          height={50}
          className={Style.notification_box_img}
          />
        </div>
        <div className = {Style.notification_box_info}>
          <h4>Shoaid Akhter</h4>
          <p>Measure action your user...</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>

    </div>
  )
}

export default Notifications