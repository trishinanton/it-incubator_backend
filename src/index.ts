import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express()
const port = 3000


const videos = [
    {id: 1, title: 'About JS - 01', author: 'it-incubator.eu'},
    {id: 2, title: 'About JS - 02', author: 'it-incubator.eu'},
    {id: 3, title: 'About JS - 03', author: 'it-incubator.eu'},
    {id: 4, title: 'About JS - 04', author: 'it-incubator.eu'},
    {id: 5, title: 'About JS - 05', author: 'it-incubator.eu'},
]

app.use(cors())

app.get('/', (req: Request, res: Response ) => {
    res.send('Hello: World!')
})
app.get('/videos', (req: Request, res: Response ) => {
    res.send(videos)
})
app.get('/videos', (req: Request, res: Response ) => {
    res.send(videos)
})
app.get('/videos/:videoId', (req: Request, res: Response) => {
    const id = +req.params.videoId;
    const video = videos.find(el => el.id === id)
    if(video) res.send(video)
    else {
        res.status(403)
        res.render('error')
    }

})
app.post('/videos', (req: Request, res: Response) => {
    const newVideo = {
        id: +(new Date()),
        title: req.body.title,
        author: 'it-incubator.eu'
    }
    videos.push(newVideo)
    res.send(201)
})

app.delete('/videos/:id',(req: Request, res: Response)=>{
    const id = +req.params.id;
    const i = videos.findIndex(el => el.id === id)
    if(i) {
        delete videos[i]
        res.send(200)
    }



})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})