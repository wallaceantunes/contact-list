<template>
  <div>
    <div class="row">
      <div class="col s12">
        <h5>Contatos</h5>
      </div>
    </div>
    <table class="striped responsive-table highlight">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th class="text-right">
            Ações
            <a class="waves-effect waves-light btn green darken-1" @click="add">Novo Registro</a>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td class="text-right">
            <a class="waves-effect waves-light btn yellow darken-2">
              <i class="material-icons" @click="edit(item)">edit</i>
            </a>
            <a class="waves-effect waves-light btn red darken-1">
              <i class="material-icons" @click="remove(item.id)">delete</i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <ModalCreate :openModal="openModalCreate" @closeModal="closeModal" :edit="data"/>
  </div>
</template>

<script>
import ModalCreate from './Modal.vue';

export default {
  components: {
    ModalCreate,
  },
  data() {
    return {
      openModalCreate: false,
      data: null,
      items: [
        {
          id: 1,
          name: 'Wallace Antunes',
          phone: '(12) 9846-8521',
        },
        {
          id: 2,
          name: 'Andrei Santos',
          phone: '(11) 9645-8741',
        },
      ],
    };
  },
  methods: {
    add() {
      this.openModalCreate = true;
    },
    edit(item) {
      this.openModalCreate = true;
      this.data = item;
    },
    closeModal() {
      this.openModalCreate = false;
      this.data = null;
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../assets/scss/table.scss';
</style>
