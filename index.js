const express = require('express');
const controller = require('./controllers/controller')
const app = express();
const port = 4204;
app.use(express.json());

app.get('/api/movies', controller.getMovies)
app.post('/api/movie', controller.addMovie)
app.put('/api/movies/:id', controller.updateTitle)
app.delete('/api/movies/:id', controller.deleteMovie)


app.listen(port, () => console.log(`Server is running on port ${port}`));