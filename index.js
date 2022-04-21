import express from 'express';
import routes from './src/routes/userRoutes'
import bodyParser from 'body-parser'
require('dotenv').config()

// console.log(process.env)

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// Serving static files
app.use(express.static('public'))

app.get('/', (req, res) => 
	res.send(`Node and express server running on port ${PORT} :-)`)
);

app.listen(PORT, () => 
	console.log(`Mi server in running on port ${PORT}`)
);
