using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using BooksApi.Models;
using System.Data.SqlClient;
using System.IO;
using System.Xml.Linq;

namespace BooksApi.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly string connectionString = "Data Source=localhost\\SQLEXPRESS01;Initial Catalog=BookDatabase;Integrated Security=True;";
        public Book GetBookById(int id)
        {
            string queryString = "SELECT ID, Name, Description, [Release Year], NYTBestSeller, AuthorId FROM Books WHERE ID = @id";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(queryString, connection);
                command.Parameters.AddWithValue("@id", id);

                connection.Open();

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    if (reader.Read())
                    {
                        int ID = (int)reader["ID"];
                        string Name = reader["Name"].ToString();
                        string Description = reader["Description"].ToString();
                        int ReleaseYear = (int)reader["Release Year"];
                        bool NYTBestSeller = (bool)reader["NYTBestSeller"];
                        int? AuthorId = reader["AuthorId"].GetType() == typeof(System.DBNull) ? null : (int)reader["AuthorId"];

                        Book book = new Book(ID, Name, Description, ReleaseYear, NYTBestSeller, AuthorId);
                        return book;
                    }
                }
            }
            return null;
        }

        public List<Book> GetBooks()
        {
            string queryString =
                "SELECT * FROM Books;";
            List<Book> results = new List<Book>();

            using (SqlConnection connection = new SqlConnection(
                       connectionString))
            {
                SqlCommand command = new SqlCommand(
                    queryString, connection);
                connection.Open();
                
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        results.Add(new Book()
                        {
                            ID = (int)reader["ID"],
                            Name = reader["Name"].ToString(),
                            Description = reader["Description"].ToString(),
                            ReleaseYear = (int)reader["Release Year"],
                            NYTBestSeller = (bool)reader["NYTBestSeller"],
                            AuthorId = reader["AuthorId"].GetType() == typeof(System.DBNull) ? null : (int)reader["AuthorId"]
                        });
                    }
                }
            }

            return results;
        }

        public bool InsertBook(Book book)
        {
            using (SqlConnection connection = new SqlConnection( connectionString))
            {
                string queryString = "INSERT INTO Books (Name, Description, [Release Year], NYTBestSeller, AuthorId) " +
                    "VALUES (@Name, @Description, @ReleaseYear, @NYTBestSeller, @AuthorId); SELECT SCOPE_IDENTITY();";

                using (SqlCommand command = new SqlCommand(queryString, connection))
                {
                    command.Parameters.AddWithValue("@Name", book.Name); 
                    command.Parameters.AddWithValue("@Description", book.Description);
                    command.Parameters.AddWithValue("@ReleaseYear", book.ReleaseYear);
                    command.Parameters.AddWithValue("@NYTBestSeller", book.NYTBestSeller);
                    command.Parameters.AddWithValue("@AuthorId", book.AuthorId);

                    connection.Open();
                    int rowsAffected = command.ExecuteNonQuery();

                    return rowsAffected > 0;
                }
            }
        }

        public bool BookExists(int id)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string queryString = "SELECT COUNT(*) FROM Books WHERE ID = @ID;";

                using (SqlCommand command = new SqlCommand (queryString, connection))
                {
                    command.Parameters.AddWithValue ("@ID", id);

                    connection.Open();
                    int count = Convert.ToInt32(command.ExecuteScalar());

                    return count > 0;
                }
            }
        }

        public Book UpdateBook(Book book)
        {

            string queryString =
                "UPDATE Books " +
                "SET Name = @name, Description = @description, [Release Year] = @releaseYear, NYTBestSeller = @NYTBestSeller, AuthorId = @authorId " +
                "WHERE ID = @id;";

            using (SqlConnection connection = new SqlConnection( connectionString))
            {
                SqlCommand command = new SqlCommand(@queryString, connection);

                command.Parameters.AddWithValue("@id", book.ID);
                command.Parameters.AddWithValue("@Name", book.Name);
                command.Parameters.AddWithValue("@Description", book.Description);
                command.Parameters.AddWithValue("@ReleaseYear", book.ReleaseYear);
                command.Parameters.AddWithValue("@NYTBestSeller", book.NYTBestSeller);
                command.Parameters.AddWithValue("@AuthorId", book.AuthorId);

                try
                {
                    connection.Open();
                    int rowsAffected = command.ExecuteNonQuery();

                    if (rowsAffected > 0) 
                    {
                        return book;
                    }
                }
                catch (Exception)
                {
                    Console.WriteLine("Book not found with ID: " + book.ID);
                }
            }
            return book;
        }

        public void DeleteBook(int id)
        {
            string queryString = "DELETE FROM Books WHERE ID = @id";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(queryString, connection);
                command.Parameters.AddWithValue("@id", id);

                connection.Open();
                int rowsAffected = command.ExecuteNonQuery();
                connection.Close();
                
                if (rowsAffected == 0)
                {
                    throw new ArgumentException("Book not found with ID: " + id);
                }
            }
        }
    }
}
