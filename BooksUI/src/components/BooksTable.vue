<template>
  <div id="booksTable">
    <edit-book :book-to-update="this.selectedBook"></edit-book>
    <table class="table table-hover table-dark">
      <thead class="thead-dark">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Release Year</th>
          <th>Best Seller</th>
          <th>Author ID</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.ID">
          <td>{{ book.name }}</td>
          <td>{{ book.description }}</td>
          <td>{{ book.releaseYear }}</td>
          <td>{{ book.nytBestSeller }}</td>
          <td>{{ book.authorId }}</td>
          <td>
            <button
              class="clickable m-2"
              @click="editBook(book)"
              title="Edit Book"
              data-bs-toggle="modal"
              data-bs-target="#modal2"
            >
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </button>
          </td>
          <td>
            <button
              class="clickable m-2"
              @click="deleteBooks(book)"
              title="Delete book"
            >
              <font-awesome-icon icon="fa-solid fa-trash" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  api_getAll,
  api_post,
  api_put,
  api_delete,
} from "../api.js";
import EditBook from "./EditBook.vue";

export default {
  components: {
  EditBook
  },
  props: [],
  data() {
    return {
      books: [],
      showEditBook: false,
      selectedBook: {
        book: {
        name: "",
        description: "",
        releaseYear: "",
        nytBestSeller: false,
        authorId: "",
        }
      },
    };
  },
  
  async mounted() {
    this.getBooks();
  },

  methods: {

    async getBooks() {
      let response = await api_getAll();
      if (response == null) {
        console.log("There was an error loading the list of books.");
      } else {
        this.books = response;
      }
    },

    editBook(book) {
      this.selectedBook.book = book;
    },

    async deleteBooks(book) {
      if (confirm("Are you sure you want to delete this book?")) {
        let response = await api_delete(book.id);
        if (response == null) {
          console.log("There was an error deleting this book.");
        } else {
          this.getBooks();
        }
      } else {
        console.log("The book was not deleted.");
      }
    },
  },
  components: { EditBook },
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border-style: none;
  color: white;
}

.modal {
  color: black;
}

#award {
  padding-left: 20px;
}
</style>
