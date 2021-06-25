<template>
  <div id="modalCreate" class="modal">
    <div class="modal-header">
      <div class="row">
        <div class="col s12">
          <h5>{{ title }} Contato</h5>
        </div>
      </div>
    </div>
    <div class="modal-content">
      <form class="col s12" id="formContact">
        <div class="row">
         <div class="input-field col s6">
            <input
              id="contact_name"
              v-model="name"
              minlength="3"
              type="text"
              required
              class="validate"
            >
            <label for="contact_name">Nome</label>
          </div>
          <div class="input-field col s6">
            <input
              id="contact_phone"
              v-model="phone"
              type="text"
              required
              class="validate"
            >
            <label for="contact_phone">Telefone</label>
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <a class="modal-close waves-effect waves-green btn-flat" @click="closeModal">Cancelar</a>
      <a class="waves-effect waves-light btn green darken-1" @click="submitForm">{{title}}</a>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css';

export default {
  props: {
    openModal: Boolean,
    edit: Object,
  },
  data() {
    return {
      title: 'Cadastrar',
      isEditing: false,
      name: null,
      phone: null,
    };
  },
  watch: {
    openModal(value) {
      if (value) {
        const elems = document.getElementById('modalCreate');
        const instances = M.Modal.init(elems, {
          dismissible: false,
        });
        instances.open();
      }
    },
    edit(value) {
      if (value) {
        this.isEditing = true;
        this.name = value.name;
        this.phone = value.phone;
        this.title = 'Editar';
      }
    },
  },
  methods: {
    saveContact() {
      console.log('save');
    },
    editContact() {
      console.log('edit');
    },
    submitForm() {
      if (!this.isEditing) {
        document.getElementById('formContact').submit(this.saveContact());
      } else {
        document.getElementById('formContact').submit(this.editContact());
      }
    },
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>
