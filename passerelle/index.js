import express from "express";
import * as proxy from "http-proxy-middleware";

const app = express();



app.use('/konosys', proxy.createProxyMiddleware({
    target: 'http://localhost:3001', changeOrigin: true, pathRewrite: {
        '^/konosys': ""
    }
}));

app.use('/enotes', proxy.createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true,pathRewrite: {
    '^/enotes': ''
} }));

app.use(express.static("public"))


app.listen(3000, (req, res) => {
    console.log("le serveur est en ecoute sur le port 3000")
})


