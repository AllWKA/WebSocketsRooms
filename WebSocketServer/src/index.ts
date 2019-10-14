import express from "express";
import path from "path";
import v1Routes from "./v1/routers";
import cors from "cors";
import SocketIO from "socket.io";
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express.json());
app.use("/api/v1", v1Routes);
const server = app.listen(app.get('port'), () => {
    console.log("server on");
});
const io = SocketIO(server);
io.on('connection', (socket) => {
    console.log("new connection");
    socket.emit('news', { hello: 'new connection' });
    socket.on('message', (data) => {
        io.emit('otherMessage', { hello: data });
        console.log(data)
    })
})
