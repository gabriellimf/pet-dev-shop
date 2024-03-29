import dotenv from 'dotenv';
import express from 'express';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

//Server configuration
dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//Routes configuration
server.use(mainRoutes);

server.use((req, res) => {
    res.render('pages/404');
});

server.listen((process.env.PORT), () => {
    console.log(` Server listening on port: ${process.env.PORT}`);
});

