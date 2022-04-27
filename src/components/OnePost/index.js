import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../utils/api';


export const OnePost = ({changeList}) => {
    const [onePost, setOnePost] = useState(null)
    const params = useParams();

    useEffect(() => {
        api.getPosts(params.itemID)
        .then((data) => setOnePost(data))
        .catch((err) => alert(err))
        
    }, [])
    
  return (
    <pre style={{ width: '100vh' }}>{ JSON.stringify(onePost, null, 4) }</pre>
  )
}
