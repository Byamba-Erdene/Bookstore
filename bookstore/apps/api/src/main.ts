import express from 'express';
import {IBook, ICart} from "@bookstore/shared-models"
import path from 'path';
const app = express();

// app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get("/api/books", (req,res) => {
  const books: IBook[] = [
      {
        id: 1,
        title: 'The Picture of Dorian Gray ',
        author: 'Oscar Wilde',
        rating: 5,
        price: 9.99
      },
      {
      id: 2,
      title: 'Frankenstein',
      author: 'Mary Wollstonecraft Shelley',
      rating: 4,
      price: 7.95
      },
      {
      id: 3,
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      rating: 4.5,
      price: 10.95
      },
      {
      id: 4,
      title: 'Dracula',
      author: 'Bram Stoker',
      rating: 4,
      price: 14.99
      },
      {
      id: 5,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      rating: 4.5,
      price: 12.85
      }
  ];
  res.send(books)
})

app.post('/api/checkout',(req,res) => {
  const cart: ICart = req.body;
  console.log("Checking out...", JSON.stringify(cart,null,2))
  res.send({order:"12345678"})
})

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
app.use(express.static(path.join(__dirname,  "../b-store")))
app.get("*",function(req,res){
  res.sendFile("index.html",{root:path.join(__dirname,"..b-store")})
})
server.on('error', console.error);
