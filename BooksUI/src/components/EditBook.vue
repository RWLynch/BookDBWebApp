<template>
  <div class="modal fade" id="modal2">
    <div class="modal-dialog">
      <div class="modal-content lg">
        <div class="modal-header">
          <h1 class="mo-title">Edit Book</h1>
          <button
            class="btn-close"
            id="btn-close"
            data-bs-dismiss="modal"
            data-bs-target="#modal2"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <label for="name" class="form-label">Name:</label>
            <input
              id="name"
              v-model="book.book.name"
              type="text"
              maxlength="50"
              required
              class="form-control"
            />
            <br />
            <div>
              <label for="description" class="form-label"> Description: </label>
              <textarea
                id="description"
                v-model="book.book.description"
                maxlength="500"
                class="form-control"
              >
              </textarea>
            </div>
            <label for="release year" class="form-label">Release Year:</label>
            <input
              class="form-control"
              v-model="book.book.releaseYear"
              id="release-year"
              type="text"
              minlength="4"
              maxlength="4"
              required
            />
            <br />
            <div class="form-element">
              <label for="best-seller">New York Times Best Seller:</label>
              <input
                type="checkbox"
                id="best-seller"
                v-model="book.book.nytBestSeller"
              />
            </div>

            <label for="author-id" class="form-label"> Author ID: </label>
            <input
              v-model="book.book.authorId"
              class="form-control"
              id="author-id"
              type="number"
              min="1"
            />
          </form>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-primary"
            type="submit"
            data-bs-dismiss="modal"
            data-bs-target="#modal2"
            v-on:click="editBook(book)"
          >
            Save Book
          </button>
          <button
            class="btn btn-secondary"
            type="button"
            value="Cancel"
            data-bs-dismiss="modal"
            data-bs-target="#modal2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  api_getAll,
  api_post,
  api_put,
  api_delete,
} from "../api.js";

export default {
  props: ["bookToUpdate"],

  data() {
    return {
      book: this.bookToUpdate,
    };
  },

  methods: {
    async editBook(book) {
      await api_put(book.book);
    },
  },
};
</script>
<style scoped>
.mo-title{
  color:black;
}
</style>