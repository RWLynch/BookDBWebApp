<script setup>
import AddBook from "./components/AddBook.vue";
import BooksTable from "./components/BooksTable.vue";
</script>

<template>
  <div class="container">
    <h1>Book Collection</h1>
    <div class="add-book">
      <AddBook />
    </div>
    <BooksTable />
  </div>
</template>

<style>
.hidden {
  display: none;
}

h1 {
  text-align: center;
  padding-top: 20px;
  color: white;
}

.add-book {
  margin-bottom: 10px;
}

#app {
  background-color: #004225;
  height:100vh
}

</style>
