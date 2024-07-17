import Express from 'express'
import path from 'path';
import {indexRouter} from './routes/index.routes.js';
import { catalogRouter } from './routes/catalog.routes.js';


const app = Express();
const {pathname: __dirname} = new URL('./', import.meta.url);

//Settings
app.set('port', process.env.port || 3000);
app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'));

//Middlewares


//Routes
app.use(indexRouter)
app.use(catalogRouter)

//Static Files
app.use(Express.static(path.join(__dirname, 'src')));

//Server Port
app.listen(app.get('port'), () => {
    console.log('Server on the port ', app.get('port'));
})