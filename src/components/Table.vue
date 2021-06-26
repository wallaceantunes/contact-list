<template>
  <section>
    <article class="row">
      <div class="col s6">
        <h5>Contatos</h5>
      </div>
      <div class="col s6 text-right">
        <button
          class="waves-effect waves-light btn green darken-1 btn-add"
          @click="add"
        >
          Novo Registro
        </button>
      </div>
    </article>
    <table class="striped responsive-table highlight">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th class="text-right">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in contacts"
          :key="item.id"
          :class="item.phone.startsWith('(11)') ? 'table-blue' : '' "
        >
          <td>{{item.name}}</td>
          <td>
              {{item.phone}}
            </td>
          <td class="text-right">
            <button class="waves-effect waves-light btn yellow darken-2">
              <i class="material-icons" @click="edit(item)">edit</i>
            </button>
            <button class="waves-effect waves-light btn red darken-1">
              <i class="material-icons" @click="remove(index)">delete</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <ModalCreate :openModal="openModalCreate" @closeModal="closeModal" :edit="data"/>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import ModalCreate from './Modal.vue';

export default {
  components: {
    ModalCreate,
  },
  data() {
    return {
      openModalCreate: false,
      data: null,
    };
  },
  computed: {
    ...mapState(['contacts']),
  },
  methods: {
    add() {
      this.openModalCreate = true;
    },
    edit(item) {
      this.openModalCreate = true;
      this.data = item;
    },
    remove(index) {
      this.$store.dispatch('removeContact', index);
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
