// a book will be an object {id, title, author}
let books = [];
let id = 0;

module.exports = {
  read(req, res) {
    res.status(200).json(books);
  },
  create(req, res) {
    let { title, author } = req.body;
    books.push({ title, author, id });
    id++;
    res.status(200).json(books);
  },
  update(req, res) {
    let { title, author } = req.body;
    let { id } = req.params;

    books.forEach((val, i) => {
      if (val.id == id) {
        books[i] = {
          title: title || books[i].title,
          author: author || books[i].author,
          id: +id,
        };
      }
    });
    res.status(200).json(books);
  },
  delete(req, res) {
    let { id } = req.params;
    books.forEach((val, i) => {
      if (val.id === +id) {
        books.splice(i, 1);
      }
    });

    res.status(200).json(books);
  },
};
