import React from 'react'
import { Image } from 'react-native'

type ProfleImageProps ={
    img:string,
    size:number,
}

const ProfleImage = ({img,size}:ProfleImageProps) => {
    return (
       <Image source={{uri:img}} style={{width:size,height:size,borderRadius:size}}/> 
    )
}

export default ProfleImage

