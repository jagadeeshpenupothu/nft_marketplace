import React, {useState} from 'react'
import Style from './UploadNFT.module.css'
import { MdOutlineHttp, MdOutlineAttachFile } from 'react-icons/md'
import { FaPercent } from 'react-icons/fa'
import { AiTwotonePropertySafety } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import Image from 'next/image'
import formStyle from '../accountPage/form/form.module.css'
import images from '../img'
import { Button } from '@/components/components_index'
import { DropZone } from './uploadNFTIndex'
import { useRouter } from 'next/router'


const UplaodNFT = ({uploadToIPFS, createNFT}) => {
  const [price, setPrice] = useState("")
  const [active, setActive] = useState(0);
  const [name, setName] = useState("")
  const [website, setWebsite] = useState("")
  const [description, setDescription] = useState("")
  const [royalties, setRoyalties] = useState("")
  const [fileSize, setFileSize] = useState("")
  const [category, setCategory] = useState(0)
  const [properties, setProperties] = useState("")
  const [image, setImage] = useState(null)
  const router = useRouter()
  
  const categoryArray = [
    {
      image: images.nft_image_1,
      category: "Sports"
    },
    {
      image: images.nft_image_2,
      category: "Arts"
    },
    {
      image: images.nft_image_3,
      category: "Music"
    },
    {
      image: images.nft_image_1,
      category: "Digital"
    },
    {
      image: images.nft_image_2,
      category: "Time"
    },
    {
      image: images.nft_image_3,
      category: "Photography"
    },
  ]
  return (
    <div className ={Style.upload}>
      <DropZone
      title = "JPG, PNG, WEBM, MAX 100MB"
      heading = "Drag & Drop File"
      subHeading = "or Browse media on yout device"
      name = {name}
      website = {website}
      description = {description}
      royalties = {royalties}
      fileSize = {fileSize}
      category = {category}
      properties = {properties}
      setImage = {setImage}
      uploadToIPFS = {uploadToIPFS}
      />

      <div className={Style.upload_box}>
      <div className = {formStyle.Form_box_input}>
            <label htmlFor = "nft">Item name</label>
            <input type = "text" placeholder = "shoiab bhai"
            className = {formStyle.Form_box_input_userName}
            onChange={(e)=>setName(e.target.value)}/> 
      </div>
      <div className = {formStyle.Form_box_input}>
            <label htmlFor="website">Website</label>
            <div className = {formStyle.Form_box_input_box}>
              <div className = {formStyle.Form_box_input_box_icon}>
                <MdOutlineHttp/>
              </div>
              <input type="text" placeholder='Website'
              onChange={(e)=>setWebsite(e.target.value)} />
            </div>
      
      <p className = {Style.upload_box_input_para}>
        Ciscrypt will include a link to this IRL on this item,s details page,
        so that users can click to learn more about it.
        You are welcome to link to your own webpage with more details.
      </p>
      
      </div>     

      <div className = {formStyle.Form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea name = "" cols="30" rows = "6" 
            placeholder='Something about yourself in few words'
            onChange={(e) => setDescription(e.target.value)}/>
            <p>The description will be included on the items details page indemand its image. Markdown syntex
        is supported.
      </p>
      </div>

      <div className={formStyle.Form_box_input}>
        <label htmlFor="name">Choose collection</label>
        <p className = {Style.upload_box_input_para}>
          Choose an exiting collection or create a one
        </p>
        <div className = {Style.upload_box_slider_div}>
          {categoryArray.map((el, i)=>(
            <div
            className={`${Style.upload_box_slider} ${
              active == i+1 ? Style.active: ""
            }`}
            key = {i + 1}
            onClick = {() => (setActive(i+1), setCategory(el.category))}
            >
              <div className = {Style.upload_box_slider_box}>
                <div className = {Style.upload_box_slider_box_img}>
                  <Image src={el.image}
                  alt = "background image"
                  width = {30}
                  height={30}
                  className={Style.upload_box_slider_box_img_img}
                  />
                </div>
                <div className = {Style.upload_box_slider_box_img_icon}>
                  <TiTick/>
                </div>
              </div>

              <p>Crpto Legend - {el.category}</p>          
            </div>
          ))}
        </div>
      </div>   

      <div className = {formStyle.Form_box_input_social}>
            <div className = {formStyle.Form_box_input}>
              <label htmlFor="Royalties">Royalties</label>
              <div className = {formStyle.Form_box_input_box}>
                <div className = {formStyle.Form_box_input_box_icon}>
                  <FaPercent/>
                </div>
                <input type = "text" placeholder = "20%" onChange={(e) => setRoyalties(e.target.value)}/>
              </div>
            </div>
            <div className = {formStyle.Form_box_input}>
              <label htmlFor="size">Size</label>
              <div className = {formStyle.Form_box_input_box}>
                <div className = {formStyle.Form_box_input_box_icon}>
                  <MdOutlineAttachFile/>
                </div>
                <input type = "text" placeholder = "165MB"
                onChange={(e) => setFileSize(e.target.value)}
                />
              </div>
            </div>
            <div className = {formStyle.Form_box_input}>
              <label htmlFor="Properties">Properties</label>
              <div className = {formStyle.Form_box_input_box}>
                <div className = {formStyle.Form_box_input_box_icon}>
                  <AiTwotonePropertySafety/>
                </div>
                <input type = "text" placeholder = "Properties"
                onChange={(e) => setProperties(e.target.value)}
                />
              </div>
            </div>
            <div className = {formStyle.Form_box_input}>
              <label htmlFor="Price">Price</label>
              <div className = {formStyle.Form_box_input_box}>
                <div className = {formStyle.Form_box_input_box_icon}>
                  <AiTwotonePropertySafety/>
                </div>
                <input type = "text" placeholder = "Price"
                onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className={Style.upload_box_btn}>
            <Button 
            btnName="Upload"
            handleClick={async()=> createNFT(
              name,
              price,
              image,
              description,
              router,
              // website,
              // royalties,
              // fileSize,
              // category,
              // properties
                )}
            classStyle={Style.upload_box_btn_style}
            />
            <Button 
            btnName="Preview"
            handleClick={()=> {}}
            classStyle={Style.upload_box_btn_style}
            />
          </div>
          
      </div>
    </div>
  )
}

export default UplaodNFT