import Express from 'express'
import path from 'path';
import {indexRouter} from './routes/index.routes.js';
import {catalogRouter} from './routes/catalog.routes.js';
import { config } from "dotenv";
import { adminRoutes } from './routes/admin.routes.js';
config();
const app = Express();
const {pathname: __dirname} = new URL('./', import.meta.url);

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

//Routes
app.use(indexRouter)
app.use(catalogRouter)
app.use(adminRoutes);
// app.use((req, res)=>{
//     res.render('error404');
// })

//Static Files
app.use(Express.static(path.join(__dirname, 'src')));

//Server Port
app.listen(app.get('port'), () => {
    console.log('Server on the port ', app.get('port'));
})