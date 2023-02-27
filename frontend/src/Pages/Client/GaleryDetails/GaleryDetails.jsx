import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import GaleryDetail from '../../../Components/Client/GaleryDetail/GaleryDetail'

const GaleryDetails = () => {
  const [art, setArt] = useState([])
  const { id } = useParams()
  const getArtData = async () => {
    const response = await axios.get('http://localhost:5555/art/'+ id)
    setArt(response.data);
  };

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    getArtData()
  },[])
  return (
    <div>
       <Helmet>
                <title>Galery details</title>
            </Helmet>
      <GaleryDetail art={art}/>
    </div>
  )
}

export default GaleryDetails
