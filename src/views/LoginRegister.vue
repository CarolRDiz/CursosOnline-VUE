<script>
import { mapState, mapGetters, mapActions } from "vuex"
import IconTrash from "../components/icons/IconTrash.vue";
import BoxCart from "../components/BoxCart.vue";
export default {
  name: "LoginRegister",
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
    ...mapGetters('cart', {
      count: "cartCount"
    }),
  },

  methods: {
    ...mapActions('cart', {
      eliminateCourseInCart: "eliminateCourseInCart"
    }),
    ...mapActions('user', {
      fetchUser: "fetchUser",
      doLogin: "doLogin",
      logout: "logout",
      doRegister: "doRegister",
      resetMessage: "resetMessage"
    }),
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
          <span>01.</span>
          <h2>Regístrate</h2>
        </div>
      </div>
      <div class="form">
        <div class="layout-3-cols__row">
          <div class="layout-3-cols__left">
            <div class="layout-3-cols__label">
              <router-link to="Checkout">CHECKOUT</router-link>
              <h4>Regístrate o inicia sesión</h4>
              <span v-if="isLogin" @click="this.isLogin=false">¿No tienes una cuenta? Regístrate</span>
              <span v-else @click="this.isLogin=true">¿Ya tienes una cuenta? Inicia sesión</span>
            </div>
          </div>
          <!--FORM-->
          <div class="layout-3-cols__right">
            <div class="loginRegister__form">
              <h1 v-if="isLogin">Iniciar sesión</h1>
              <h1 v-if="!isLogin">Registrarse</h1>

              <form v-if="isLogin" @submit.prevent="doLoginAndMessage()">
                <fieldset class="form__fieldset">
                  <legend>Datos personales</legend>
                  <div class="form__field">
                    <label for="email">EMAIL</label>
                    <input class="form__input" placeholder="Correo Electrónico" name="email" v-model="email" type="email"
                      required />
                  </div>
                  <div class="form__field">
                    <label for="password">CONTRASEÑA</label>
                    <input class="form__input" placeholder="Contraseña" name="password" v-model="password" type="password"
                      required />
                  </div>

                  <label class="checkbox bounce form__label-checkbox">
                    <input type="checkbox">
                    <svg viewBox="0 0 21 21">
                      <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                    </svg>
                    Mantener la sesión abierta
                  </label>
                </fieldset>
                <button class="button button--large--primary" type="submit">Iniciar sesión</button>
                <strong class="forgot-password">He olvidado mi contraseña</strong>
              </form>
              <form v-else @submit.prevent="doRegisterAndMessage()">
                <fieldset class="form__fieldset">
                  <legend>Datos personales</legend>
                  <div class="form__field">
                    <label for="name">NOMBRE</label>
                    <input class="form__input" placeholder="Nombre" name="name" v-model="name" type="text" required />
                  </div>
                  <div class="form__field">
                    <label for="email">EMAIL</label>
                    <input class="form__input" placeholder="Correo Electrónico" name="email" v-model="email" type="email"
                      required />
                  </div>
                  <div class="form__field">
                    <label for="password">CONTRASEÑA</label>
                    <input class="form__input" placeholder="Contraseña" name="password" v-model="password" type="password"
                      required />
                  </div>
                  <div class="form__field">
                    <label for="repeatpassword">REPITE LA CONTRASEÑA</label>
                    <input class="form__input" placeholder="Repetir contraseña" name="repeatpassword"
                      v-model="repeatpassword" type="password" required />
                  </div>
                </fieldset>
                <label class="checkbox bounce form__label-checkbox">
                  <input type="checkbox">
                  <svg viewBox="0 0 21 21">
                    <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                  </svg>
                  He leído y acepto los Términos y Condiciones.
                </label>
                <button class="button button--large--white" type="submit">REGISTRARSE Y CONTINUAR</button>
              </form>
              <span v-if="showMessage" class="auth__message"> {{ message }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--CART-->
    <div class="layout-3-cols__aside">
      <div class="is-sticky">
        <BoxCart />
      </div>
    </div>
  </div>
  <div v-else>
    El carrito esta vacío
  </div>
</template>

