<template>
  <div>
    <h1>Corporation List</h1>
    <ul>
      <li v-for="corporation in corporations" :key="corporation.id">
        {{ corporation.name }}
        <button @click="editCorporation(corporation.id)">Edit</button>
        <button @click="deleteCorporation(corporation.id)">Delete</button>
      </li>
    </ul>
    <form @submit.prevent="createCorporation">
      <input v-model="newCorporation.name" placeholder="Name" />
      <input v-model="newCorporation.address" placeholder="Address" />
      <input v-model="newCorporation.url" placeholder="URL" />
      <select v-model="newCorporation.user">
        <option v-for="user in adminusers" :key="user.id" :value="user.id">
          {{ user.username }}
        </option>
      </select>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  data() {
    return {
      corporations: [],
      adminusers: [],
      newCorporation: {
        name: '',
        address: '',
        url: '',
        user: ''
      }
    };
  },
  created() {
    this.fetchCorporations();
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      api.getUsers().then(response => {
        this.adminusers = response.data;
      }).catch(error => {
        console.error('Error fetching users:', error);
      });
    },
    fetchCorporations() {
      api.getCorporations().then(response => {
        this.corporations = response.data;
      }).catch(error => {
        console.error('Error fetching corporations:', error);
      });
    },
    createCorporation() {
      api.createCorporation(this.newCorporation).then(() => {
        this.fetchCorporations();
        console.log(this.newCorporation)
      }).catch(error => {
        console.log(this.newCorporation)
        
        console.error('Error creating corporation:', error);
      });
    },
    editCorporation(id) {
      api.updateCorporation(id, this.newCorporation).then(() => {
        this.fetchCorporations();
      }).catch(error => {
        console.error('Error editing corporation:', error);
      });
    },
    deleteCorporation(id) {
      api.deleteCorporation(id).then(() => {
        this.fetchCorporations();
      }).catch(error => {
        console.error('Error deleting corporation:', error);
      });
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 20px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px 0;
}
</style>  