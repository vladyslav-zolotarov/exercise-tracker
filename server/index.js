import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://vladzolotorev99:6ZanGYN86z6txmkF@exercise-tracker.kb9ybom.mongodb.net/?retryWrites=true&w=majority'
    // 'mongodb+srv://vladyslav:es09nRy87fYXbpOK@cluster0.pexo3un.mongodb.net/blog?retryWrites=true&w=majority'
  )
  .then(() => console.log('DB ok'))
  .catch(err => console.log('db error', err));

const app = express();

app.use(express.json());
app.use(cors());

const port = 4444;
app.listen(port, err => {
  if (err) {
    return console.log(err);
  }

  console.log('server ok');
});
