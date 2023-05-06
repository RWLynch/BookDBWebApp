namespace BooksApi.Models
{
    public class Book
    {
        public Book()
        {
        }

        public Book(int iD, string? name, string? description, int releaseYear, bool nytBestSeller, int? authorId)
        {
            ID = iD;
            Name = name;
            Description = description;
            ReleaseYear = releaseYear;
            NYTBestSeller = nytBestSeller;
            AuthorId = authorId;
        }

        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int ReleaseYear { get; set; }
        public bool NYTBestSeller { get; set; }
        public int? AuthorId { get; set; }

    }
}
