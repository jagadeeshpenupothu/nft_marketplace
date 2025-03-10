import React,{useState} from 'react'
import Image from 'next/image';
import {MdVerfied, MdCloudUpload, MdOutLineReportProblem, MdOutlineReportProblem} from 'react-icons/md'
import {FiCopy} from 'react-icons/fi';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialYoutube, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti';
import { BsThreeDots } from 'react-icons/bs';
import Style from './AuthorProfileCard.module.css'
import images from '../../img'
import {Button} from '../../components/components_index'
import { MdVerified } from 'react-icons/md';

const AuthorProfileCard = () => {
    const [share, setShare] = useState(false);
    const [report, setReport] = useState(false);

    const copyAddress = () => {
        const copyText = document.getElementById("myInput")
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }

    const openShare = () => {
        if(!share){
            setShare(true);
            setReport(false);
        }
        else{
            setShare(false)
        }
    }

    const openReport = () => {
        if(!report){
            setReport(true);
            setShare(false);
        }
        else{
            setReport(false)
        }
    }

  return (
    <div className={Style.AuthorProfileCard}>
        <div className={Style.AuthorProfileCard_box}>
            <div className={Style.AuthorProfileCard_box_img}>
                <Image
                src = {images.nft_image_1}
                className={Style.AuthorProfileCard_box_img_img}
                alt="NFT IMAGES"
                width={220}
                height={220}
                />
            </div>
            <div className={Style.AuthorProfileCard_box_info}>
                <h2>Dony Herrera{""}{" "}
                <span>
                    <MdVerified/>
                </span>{" "}
                </h2>

                <div className = {Style.AuthorProfileCard_box_info_address}>
                    <input type="text" value="0x236586582359..E3J667HJ99" id="myInput"/>
                    <FiCopy onClick = {() => copyAddress()} className={Style.AuthorProfileCard_box_info_address_icon}/>
                </div> 
                <p>
                Punk #4782 / An OG CryptoPunk collector, hoarder of NFT's.
                Contributing to @ether_cards. an NFT Monetization Platform.
                </p>
                <div className={Style.AuthorProfileCard_box_info_social}>
                <a href="#"><TiSocialFacebook/></a>
                <a href="#"><TiSocialInstagram/></a>
                <a href="#"><TiSocialYoutube/></a>
                <a href="#"><TiSocialLinkedin/></a>
                </div>
            </div>        
            <div className={Style.AuthorProfileCard_box_share}>
                <Button btnName="Follow" handelClick={()=>{}}/>
                <MdCloudUpload onClick = {() => openShare()} className = {Style.AuthorProfileCard_box_share_icon}/>  
                {share && (
                    <div className={Style.AuthorProfileCard_box_share_upload}>
                        <p><span><TiSocialFacebook/></span>{""}Facebook</p>
                        <p><span><TiSocialInstagram/></span>{""}Instagram</p>
                        <p><span><TiSocialLinkedin/></span>{""}LinkedIn</p>
                        <p><span><TiSocialYoutube/></span>{""}Youtube</p>
                    </div>
                )}    

                <BsThreeDots onClick = {()=>openReport()}
                className = {Style.AuthorProfileCard_box_share_icon}
                />                
                {report && (
                    <p className= {Style.AuthorProfileCard_box_share_report}>
                        <span>
                            <MdOutlineReportProblem/>
                        </span>{""}{""}
                        Report abouse
                    </p>
                )}                    
            </div>  
        </div>
    </div>
  )
}

export default AuthorProfileCard