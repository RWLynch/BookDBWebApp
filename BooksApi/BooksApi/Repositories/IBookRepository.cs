using Microsoft.AspNetCore.Mvc;
using BooksApi.Models;

namespace BooksApi.Repositories
{
    public interface IBookRepository
    {
        public List<Book> GetBooks();
        public Book GetBookById(int id);
        public Book UpdateBook(Book book);
        public bool InsertBook(Book book);
        public bool BookExists(int id);
        public void DeleteBook(int id);

    }
}
