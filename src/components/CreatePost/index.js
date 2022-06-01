import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../utils/api'
import { TextField, Grid, Typography, Button } from '@mui/material';
import postContext from '../contexts/postContext';
export const CreatePost = () => {
    const {postList, setPostList} = useContext(postContext)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const {
            target: { inputImage, inputTitle, inputText }, }
            = event;
        api.createPost({
            image: inputImage.value,
            title: inputTitle.value,
            text: inputText.value,

        }).then(data => {
            setPostList((prevState) => {
                return [data, ...prevState]
            })
            navigate('/')
        }).catch(err => alert(err))
    }
    return (
        <form onSubmit={handleSubmit}>
            <Grid container flexDirection='column' spaicing='10'>
                <Grid item>
                    <Typography variant='h3' color="text.secondary">Создать пост </Typography>
                </Grid>
                <Grid item>
                    <TextField fullWidth name='inputImage' label="Ссылка на картинку" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField fullWidth name='inputTitle' label="Название поста" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField fullWidth name='inputText' label="Описание" variant="outlined" />
                </Grid>
                <Button type = 'submit' >Добавить пост</Button>
            </Grid>
        </form>
    )
}
