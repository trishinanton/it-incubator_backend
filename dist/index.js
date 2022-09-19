"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
const videos = [
    { id: 1, title: 'About JS - 01', author: 'it-incubator.eu' },
    { id: 2, title: 'About JS - 02', author: 'it-incubator.eu' },
    { id: 3, title: 'About JS - 03', author: 'it-incubator.eu' },
    { id: 4, title: 'About JS - 04', author: 'it-incubator.eu' },
    { id: 5, title: 'About JS - 05', author: 'it-incubator.eu' },
];
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hello: incubator!!!!!22111111');
});
app.get('/videos', (req, res) => {
    res.send(videos);
});
app.get('/videos', (req, res) => {
    res.send(videos);
});
app.get('/videos/:videoId', (req, res) => {
    const id = +req.params.videoId;
    const video = videos.find(el => el.id === id);
    if (video)
        res.send(video);
    else {
        res.status(403);
        res.render('error');
    }
});
app.post('/videos', (req, res) => {
    const newVideo = {
        id: +(new Date()),
        title: req.body.title,
        author: 'it-incubator.eu'
    };
    videos.push(newVideo);
    res.send(201);
});
app.delete('/videos/:id', (req, res) => {
    const id = +req.params.id;
    const i = videos.findIndex(el => el.id === id);
    if (i) {
        delete videos[i];
        res.send(200);
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map