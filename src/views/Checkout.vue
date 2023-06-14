<script>
import { mapState, mapGetters, mapActions } from "vuex"
import IconTrash from "../components/icons/IconTrash.vue";
import BoxCart from "../components/BoxCart.vue";
export default {
  name: "Checkout",
  components: {
    IconTrash, BoxCart
  },
  data() {
    return {
      loading: false,
      name: '',
      email: null,
      password: null,
      repeatpassword: '',
      errors: [],
      showMessage: false,
      isLogin: false,
    };
  },
  computed: {
    ...mapState('user', {
      user: state => state.userData,
      message: state => state.message,
    }),
    ...mapState({
      fetchImageURL: state => state.fetchImageURL
    }),
    ...mapGetters('cart', {
      courses: "cartCourses",
      total: "cartTotal",
      count: "cartCount"
    }),
  },
  async created() {
    this.loading = true;
    await this.fetchCourses()
      .then(() => this.loading = false);
  },
  methods: {

    ...mapActions('user', {
      fetchUser: "fetchUser",
      doLogin: "doLogin",
      logout: "logout",
      doRegister: "doRegister",
      resetMessage: "resetMessage"
    }),
    ...mapActions('courses', {
      fetchCourses: "fetchCourses",
    }),
    fetchImg(image) {
      return this.fetchImageURL + image
    },
    async doLoginAndMessage() {
      this.loading = true
      await this.doLogin({ inputEmail: this.email, inputPassword: this.password })
      this.loading = false
      if (this.user) {
        this.modalActive = true
      }
      else {
        this.showMessage = true
        setTimeout(() => this.showMessage = false, 5000);
      }
    },
    async doRegisterAndMessage() {
      this.loading = true
      await this.doRegister({ inputName: this.name, inputEmail: this.email, inputPassword: this.password })
      this.loading = false
      if (this.message == "Usuario creado") {
        this.modalActiveRegister = true
        this.isLogin = true
      }
      else {
        this.showMessage = true
        setTimeout(() => this.showMessage = false, 5000);
      }
    },
    resetData() {
      this.email = this.password = '';
    },

    checkForm(e) {
      var ExpRegName = "^[A-ZÑÁÉÍÓÚ]+[A-ZÑa-zñáéíóúÁÉÍÓÚ ]*$";
      var ExpRegEmail = "^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$"

      this.errors = []

      if (this.name.match(ExpRegName) == null) {
        this.errors.push('El nombre no es válido. Solo se permiten letras y espacios.');
      }

      if (this.email.match(ExpRegEmail) == null) {
        this.errors.push('El email no es válido.');
      }

      if (!this.name) {
        this.errors.push('El nombre es obligatorio.');
      }
      if (!this.email) {
        this.errors.push('El email es obligatorio.');
      }
      if (!this.password) {
        this.errors.push('La contraseña es obligatoria.');
      }
      if (!this.repeatpassword) {
        this.errors.push('La confirmación de la contraseña es obligatoria.');
      }

      if (this.password != this.repetpassword) {
        this.errors.push('La confirmación de la contraseña no coincide con la contraseña propuesta.');
      }

      if (this.errors.length) {
        return false
      }

      else {
        return true
      }

      e.preventDefault();
    }
  },
};
</script>

<template>
  <div v-if="count != 0" class="layout-3-cols">
    <div class="layout-3-cols__double layout-3-cols__form">
      <div class="layout-3-cols__row">
        <div class="layout-3-cols__heading">
          <span>02.</span>
          <h2>Checkout</h2>
        </div>
      </div>
      <div class="form">
        <form>
          <div class="layout-3-cols__row">
            <div class="layout-3-cols__left">
              <label for="" class="layout-3-cols__label">
                <h4>Pago</h4>
                <p>Elige un método de pago</p>
              </label>
            </div>
            <div class="layout-3-cols__right">
              
            </div>
          </div>
        </form>
      </div>
    </div>
  
  <!--CART-->
  <div class="layout-3-cols__aside">
    <div class="is-sticky">
      <BoxCart />
    </div>
  </div>
  </div>
</template>

