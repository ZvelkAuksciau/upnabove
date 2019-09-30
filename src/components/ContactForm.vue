<template>
  <ValidationObserver
    tag="form"
    ref="validationObserver"
    class="contact-form"
    :class="{ loading: loading, success: success, error: error }"
    name="contact"
    method="POST"
    @submit.prevent="handleSubmit"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <div class="hidden">
      <input name="bot-field" />
    </div>
    <div class="sender-info">
      <div class="row">
        <label for="name" class="label">Your name</label>
        <ValidationProvider rules="required|alpha_spaces" v-slot="{ classes }">
          <input
            type="text"
            name="name"
            v-model="form.name"
            :class="classes"
            :disabled="loading"
          />
        </ValidationProvider>
      </div>
      <div class="row">
        <label for="email" class="label">Your email</label>
        <ValidationProvider rules="required|email" v-slot="{ classes }">
          <input
            type="email"
            name="email"
            v-model="form.email"
            :class="classes"
            :disabled="loading"
          />
        </ValidationProvider>
      </div>
    </div>

    <div class="message">
      <label for="message" class="label">Message</label>
      <textarea
        name="message"
        v-model="form.message"
        :disabled="loading"
      ></textarea>
    </div>

    <button class="button" type="submit" ref="submitButton" :disabled="loading">
      {{ buttonText }}
    </button>
  </ValidationObserver>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, alpha_spaces } from "vee-validate/dist/rules";

extend("required", required);
extend("email", email);
extend("alpha_spaces", alpha_spaces);

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
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
    async handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };

      const formValid = await this.$refs.validationObserver.validate();

      if (!formValid) {
        this.error = true;

        setTimeout(() => {
          this.error = false;
        }, 2000);

        return;
      }

      try {
        this.loading = true;

        const res = await this.$axios.post(
          "/",
          this.encode({
            "form-name": "contact",
            page: this.pageTitle,
            ...this.form
          }),
          axiosConfig
        );

        this.loading = false;
        this.success = true;

        console.log(res);

        setTimeout(() => {
          this.success = false;
        }, 2000);
      } catch (err) {
        this.loading = false;
        this.error = true;

        console.error(err);

        setTimeout(() => {
          this.error = false;
        }, 2000);
      }
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

@media (min-width: 920px) {
  .sender-info {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
