<template>
  <aside ref="modalCreate" class="modal">
    <form @submit.prevent="submitForm">
      <header class="modal-header">
        <div class="row">
          <div class="col s12">
            <h5>{{ title }} Contato</h5>
          </div>
        </div>
      </header>
      <div class="modal-content">
        <div class="row">
          <div class="input-field col s6">
            <input
              id="contact_name"
              v-model="name"
              minlength="3"
              type="text"
              required
              class="validate"
            />
            <label for="contact_name">Nome</label>
          </div>
          <div class="input-field col s6">
            <input
              id="contact_phone"
              v-model="phone"
              type="text"
              v-mask="'(##)#####-####'"
              required
              class="validate"
            />
            <label for="contact_phone">Telefone</label>
          </div>
        </div>
      </div>
      <footer class="modal-footer">
        <button
          class="modal-close waves-effect waves-green btn-flat"
          type="button"
          @click="closeModal"
        >
          Cancelar
        </button>
        <button
          class="waves-effect waves-light btn green darken-1"
          type="submit"
        >
          {{ title }}
        </button>
      </footer>
    </form>
  </aside>
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
      id: null,
      name: null,
      phone: null,
    };
  },
  watch: {
    openModal(value) {
      if (value) {
        const elems = this.$refs.modalCreate;
        const instances = M.Modal.init(elems, {
          dismissible: false,
        });
        instances.open();
      }
    },
    edit(value) {
      if (value) {
        this.isEditing = true;
        this.id = value.id;
        this.name = value.name;
        this.phone = value.phone;
        this.title = 'Editar';
      }
    },
  },
  methods: {
    saveContact() {
      const data = {
        name: this.name,
        phone: this.phone,
      };
      this.$store.dispatch('addContact', data);
      this.closeModal();
    },
    editContact() {
      const data = {
        id: this.id,
        name: this.name,
        phone: this.phone,
      };
      this.$store.dispatch('updateContact', data);
      this.closeModal();
    },
    submitForm() {
      if (!this.isEditing) {
        this.saveContact();
      } else {
        this.editContact();
      }
    },
    closeModal() {
      this.id = null;
      this.name = null;
      this.phone = null;
      const elems = this.$refs.modalCreate;
      const instances = M.Modal.init(elems, {
        dismissible: false,
      });
      instances.close();
      this.$emit('closeModal');
    },
  },
};
</script>
