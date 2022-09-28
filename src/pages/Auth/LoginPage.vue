<template>
  <q-page class="bg-white">
    <div class="wrapper containerrr">
      <div class="center_it">
        <div class="hold">
          <!-- <div class="opening_text">
            <span class="text-green">
              <span class="bold">The</span> Kukah Award Committee
            </span>
          </div> -->

          <div class="opening_text">
            <span class="text-green"> Hey!</span> Welcome back
          </div>

          <div class="form_data">
            <form @submit.prevent="attemptLogin">
              <div class="input_wrap">
                <label class="text-green text-weight-bold" for="email"
                  >Email</label
                >
                <div class="input">
                  <i class="ri-mail-line q-mr-md text-green"></i>
                  <input
                    v-model="form.email"
                    name="email"
                    placeholder="Enter your email..."
                    type="text"
                    autocomplete="username"
                  />
                </div>
                <div class="error" v-if="errors.email">
                  {{ errors.email[0] }}
                </div>
              </div>
              <div class="input_wrap">
                <label class="text-green text-weight-bold" for="password"
                  >Password</label
                >
                <div class="input">
                  <i class="ri-lock-line q-mr-md text-green"></i>
                  <input
                    v-model="form.password"
                    name="password"
                    placeholder="Enter your password"
                    :type="isPwd ? 'password' : 'text'"
                    autocomplete="current-password"
                  />

                  <q-icon
                    style="font-size: 1.5rem; color: #00bfa5; cursor: pointer"
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </div>
                <div class="error" v-if="errors.password">
                  {{ errors.password[0] }}
                </div>

                <div class="forgot flex justify-end">
                  <q-btn class="forgot text-green">Forgot password</q-btn>
                </div>
              </div>

              <div class="login_btn">
                <q-btn type="submit" class="login flex justify-center bg-green"
                  >Login</q-btn
                >
                <!-- <p class="no_acc">
                  Don’t have an account?
                  <q-btn to="/register" class="text-green text-weight-bold"
                    >Sign up</q-btn
                  >
                </p> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        remember: false,
      },
      banner: true,
      isPwd: true,
      errors: {},
      loading: false,
    };
  },
  methods: {
    attemptLogin() {
      this.loading = true;
      this.$api
        .post("login", this.form)
        .then(({ data }) => {
          this.loading = false;
          this.errors = {};
          this.$router.replace({
            name: this.$store.bootstrap.getLostPage || "user.dashboard",
          });
        })
        .catch((e) => {
          this.loading = false;
          let error = this.$plugins.reader.error(e);
          this.errors = error.errors || {};
          this.$h.notify(error.message || error, error.status || "error");
        });
    },
  },
};
</script>
<style scoped>
label {
  color: #1abc9c;
}

p {
  margin-bottom: 0;
}
.wrapper {
  height: 100vh;
  position: relative;
  background: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.forgot ::before {
  box-shadow: none;
}
.center_it {
  width: 60%;
}

.back_btn {
  transition: all 5s ease-in-out;
}

.bold {
  font-weight: 800;
}

.back_btn:hover .btn_hold span {
  color: white;
}

.opening_text {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 127.5%;
  max-width: 350px;
  margin-bottom: 3rem;
}

.input_wrap label {
  margin-top: 0.75rem;
}

.input_wrap .input {
  background: #f2f2f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0.55rem 0;
  width: 100%;
}

.input_wrap input {
  background: transparent;
  border: none;
  width: 100%;
  padding: 0.5rem;
}
.input_wrap input:focus {
  outline: none;
}

.fa-eye-slash {
  display: flex;
  justify-content: flex-end;
  float: right;
  width: 100%;
}

.remember {
  margin-top: 1rem;
}
.remember p {
  font-size: 12px;
}

.login {
  width: 100%;
  color: white;
  text-align: center;
  margin-top: 3rem;
  background: #1abc9c;
  border-radius: 100px;
  padding: 0.75rem;
}

.no_acc {
  text-align: center;
  margin-top: 0.75rem;
}

.error {
  color: red;
}

@media (max-width: 700px) {
  ::placeholder {
    font-size: 13px;
  }

  .no_acc {
    font-size: 13px;
  }
  .forgot p {
    font-size: 13px;
  }
  .center_it {
    width: 90%;
  }
}
</style>
