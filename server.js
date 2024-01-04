import { renderRandomPokemon } from './src/pokemon.js';
import express from './node_modules/express/index.js';

const app = express();
const port = 3000;

// Set static folder
app.use(express.static('public'));
//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
//Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.listen(port, () => console.log('Server running on port 3000'));

app.get('/getPokemon', async (req, res) => {
        res.set('Cache-Control', 'no-store');
        const pokemon = await renderRandomPokemon();
        res.send(pokemon);
    }
);
