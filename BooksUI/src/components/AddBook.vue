<template>
  <button
    class="btn btn-secondary"
    title="Edit Book"
    data-bs-toggle="modal"
    data-bs-target="#modal"
  >
    <font-awesome-icon icon="fa-circle-plus" />
    Add a Book
  </button>

  <div class="modal fade" id="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" id="1">
          <h1 class="mo-title">Add Book</h1>
          <button
            class="btn-close"
            id="btn-close"
            data-bs-dismiss="modal"
            data-bs-target="#modal"
          ></button>
        </div>
        <div class="modal-body">
          <form v-on:submit="addBook(newBook)">
            <div class="form-floating">
              <input
                class="form-control"
                id="name"
                placeholder="Book Title"
                type="text"
                maxlength="50"
                required
                v-model="newBook.name"
              />
              <label for="name" class="form-label">Name</label>
            </div>
            <br />
            <div class="form-floating">
              <textarea
                class="form-control"
                id="description"
                placeholder="Description - limit 500 characters"
                maxlength="500"
                v-model="newBook.description"
              >
              </textarea>
              <label for="description" class="form-label">Description</label>
            </div>
            <br />
            <div class="form-floating">
              <input
                class="form-control"
                id="release-year"
                placeholder="YYYY"
                type="text"
                minlength="4"
                maxlength="4"
                required
                v-model="newBook.releaseYear"
              />
              <label for="release year" class="form-label"
                >Release Year (YYYY)</label
              >
            </div>
            <div class="form-element">
              <label for="best-seller">New York Times Best Seller:</label>
              <input
                type="checkbox"
                id="best-seller"
                v-model="newBook.nytBestSeller"
              />
            </div>
            <br />
            <div class="form-floating">
              <input
                class="form-control"
                placeholder="Ex. 5"
                id="author-id"
                type="number"
                min="1"
                v-model="newBook.authorId"
              />
              <label for="author-id" class="form-label">Author ID:</label>
            </div>
            <br />
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                type="submit"
                value="Save"
                data-bs-dismiss="modal"
                data-bs-target="#modal"
              >
                Save Book
              </button>
              <button
                class="btn btn-secondary"
                type="reset"
                value="Cancel"
                data-bs-dismiss="modal"
                data-bs-target="#modal"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BooksTable from "../components/BooksTable.vue";
import { api_getAll, api_post, api_put, api_delete } from "../api.js";

export default {
  data() {
    return {
      newBook: {
        name: "",
        description: "",
        releaseYear: "",
        nytBestSeller: false,
        authorId: "",
      },
    };
  },
  components: {
    BooksTable,
  },

  methods: {
    async addBook() {
      const newBook = {
        name: this.newBook.name,
        description: this.newBook.description,
        releaseYear: this.newBook.releaseYear,
        nytBestSeller: this.newBook.nytBestSeller,
        authorId: this.newBook.authorId,
      };

      let response = await api_post(newBook);

      if (response == null) {
        console.log("There was an error adding this book");
      } else {
        this.getBooks();
      }
    },

    async getBooks() {
      let response = await api_getAll();

      if (response == null) {
        console.log("There was an error loading the list of books.");
      } else {
        this.books = response;
      }
    },
  },
};
</script>

<style scoped>
div.form-element {
  margin-top: 10px;
}
div.form-element > label {
  display: block;
}
div.form-element > input,
div.form-element > select {
  height: 30px;
  width: 300px;
}
div.form-element > textarea {
  height: 60px;
  width: 300px;
}
form > input[type="button"] {
  width: 100px;
}
form > input[type="submit"] {
  width: 100px;
  margin-right: 10px;
}

.btn {
  margin-right: 20px;
}

.mo-title{
  color:black;
}
</style>
