<template>
  <form
    class="contact-form"
    :class="{ loading: loading, success: success, error: error }"
    name="contact"
    method="POST"
    @submit.prevent="handleSubmit"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <div class="hidden">
      <input name="bot-field">
    </div>
    <div class="sender-info">
      <div class="row">
        <label for="name" class="label">Your name</label>
        <input
          type="text"
          name="name"
          v-validate="'required|alpha'"
          v-model="form.name"
          :disabled="this.loading"
        >
      </div>
      <div class="row">
        <label for="email" class="label">Your email</label>
        <input
          type="email"
          name="email"
          v-validate="'required|email'"
          v-model="form.email"
          :disabled="this.loading"
        >
      </div>
    </div>

    <div class="message">
      <label for="message" class="label">Message</label>
      <textarea name="message" v-model="form.message" :disabled="this.loading"></textarea>
    </div>

    <button
      class="button"
      type="submit"
      ref="submitButton"
      :disabled="this.loading"
    >{{ buttonText }}</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      },
      loading: false,
      success: false,
      error: false
    };
  },
  computed: {
    buttonText() {
      if (this.loading) {
        return "Sending...";
      }

      if (this.success) {
        return "Success!";
      }

      if (this.error) {
        return "Error";
      }

      return "Send";
    }
  },
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          this.loading = true;

          const axiosConfig = {
            header: { "Content-Type": "application/x-www-form-urlencoded" }
          };
          this.$axios
            .post(
              "/",
              this.encode({
                "form-name": "contact",
                page: this.pageTitle,
                ...this.form
              }),
              axiosConfig
            )
            .then(res => {
              this.loading = false;
              this.success = true;

              console.log(res);

              setTimeout(() => {
                this.success = false;
              }, 2000);
            })
            .catch(err => {
              this.loading = false;
              this.error = true;

              console.log(err);

              setTimeout(() => {
                this.error = false;
              }, 2000);
            });
        } else {
          this.error = true;

          setTimeout(() => {
            this.error = false;
          }, 2000);
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
input,
textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;

  &.invalid {
    border-color: var(--color-error);
  }
}

textarea {
  resize: none;
  height: 140px;
}

input:focus,
textarea:focus {
  border-color: var(--color-contrast-1);
}

.contact-form {
  margin-bottom: 2rem;

  &.loading {
    opacity: 0.5;
  }

  &.error {
    .button {
      background-color: var(--color-error);
      transition-duration: 0.2s;
    }
  }

  &.success {
    .button {
      background-color: var(--color-success);
      transition-duration: 0.2s;
    }
  }
}

.hidden {
  display: none;
}

.sender-info {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin-bottom: 2rem;
}

.message {
  margin-bottom: 2rem;
}

.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: opacity 0.25s ease, background-color 2s ease;
}

.button:hover {
  opacity: 0.6;
}

.button:focus {
  border: 1px solid var(--color-base-1);
}

@media (min-width: 920px) {
  .sender-info {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
