<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid d-flex justify-content-center">
      <a class="navbar-brand" href="#">Todo's List Maker</a>
    </div>
  </nav>
  <div class="align-items-center m-5">
    <div class="container d-flex justify-content-center">
      <div class="align-items-center parts">
        <div class="hstack gap-3 inputbtn">
          <input
            v-model="inputreceived"
            class="form-control form-control-lg me-auto"
            type="text"
            placeholder="Add your todo's here"
            @keydown.enter.prevent="submittodo"
          />
          <button
            @click="submittodo"
            type="button"
            class="btn btn-secondary"
            style="width: fit-content"
          >
            Add&nbsp;Todo
          </button>
          <div class="vr"></div>
          <button @click="reset" type="button" class="btn btn-outline-danger">
            Remove&nbsp;Top
          </button>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="row">
      <div class="col-lg-4 mx-auto m-5">
        <table class="table table-hover">
          <tbody>
            <template v-if="lists.length === 0">
              <tr>
                <td colspan="2" class="text-center">No todos yet</td>
              </tr>
            </template>
            <template v-else>
              <tr v-for="item in lists" :key="index">
                <th scope="row" style="text-align: center">{{ item }}</th>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";
let lists = ref([]);
const inputreceived = ref("");

const submittodo = () => {
  if (inputreceived.value.trim() !== "") {
    lists.value.push(inputreceived.value);
    axios.post(`${API_BASE_URL}/todos`, { title: inputreceived.value })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    inputreceived.value = "";
  }
};

const reset = () => {
  if (lists.value.length > 0) {
    lists.value.shift();
    inputreceived.value = "";
  }
};
</script>

<style>
/* You can include your custom styles here */
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "./main.css";
</style>
