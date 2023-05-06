using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BooksApi.Models;
using BooksApi.Repositories;
using System.Reflection.Metadata.Ecma335;
using System.Runtime.CompilerServices;

namespace BooksApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBookRepository _bookRepository;
        public BooksController(IBookRepository repository)
        {
            _bookRepository = repository;
        }

        // GET: api/Books
        [HttpGet]
        public List<Book> GetBooks()
        {
            return _bookRepository.GetBooks();
        }

        // GET: api/Books/{id}
        [HttpGet("{id}")]
        public ActionResult<Book> GetBook(int id)
        {
            var book = _bookRepository.GetBookById(id);
            
            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }


        // POST: api/Books/
        [HttpPost]
        public ActionResult<Book> AddBook(Book book)
        {
            try
            {
                if (book == null)
                {
                    return BadRequest();
                }

                _bookRepository.InsertBook(book);

                return CreatedAtAction(nameof(GetBook), new { id = book.ID}, book);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error creating new book in the database");
            }

        }

        // PUT: api/Books/{id}
        [HttpPut("{id:int}")]
        public ActionResult<Book> ModifyBook(int id, [FromBody] Book book)
        {
            try
            {
                var bookToUpdate = _bookRepository.GetBookById(id);

                if (bookToUpdate == null)
                {
                    return NotFound($"Book with ID = {id} not found");
                }

                bookToUpdate.Name = book.Name;
                bookToUpdate.Description = book.Description;
                bookToUpdate.ReleaseYear = book.ReleaseYear;
                bookToUpdate.NYTBestSeller = book.NYTBestSeller;
                bookToUpdate.AuthorId = book.AuthorId;

                _bookRepository.UpdateBook(bookToUpdate);

                return bookToUpdate;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error updating data");
            }
        }

        // DELETE: api/Books/{id}
        [HttpDelete("{id:int}")]
        public ActionResult<Book> RemoveBook(int id)
        {
            try
            {
                var bookToDelete = _bookRepository.GetBookById(id);

                if (bookToDelete == null)
                {
                    return NotFound($"Book with ID = {id} not found");
                }

                _bookRepository.DeleteBook(bookToDelete.ID);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error deleting data");
            }
            return NoContent();
        }

        // GET: api/Books/{id}
        [HttpGet("bool/{id}")]
        public bool BookExists(int id)
        {
            var bookExists = _bookRepository.GetBookById(id); 
            return bookExists != null;
        }
    }
}
