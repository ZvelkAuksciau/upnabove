<template>
  <form
    class="contact-form"
    name="contact"
    method="POST"
    @submit.prevent="handleSubmit"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <p class="hidden">
      <label>Don’t fill this out if you're human:
        <input name="bot-field">
      </label>
    </p>
    <div class="sender-info">
      <div class="row">
        <label for="name" class="label">Your name</label>
        <input type="text" name="name" v-model="form.name">
      </div>
      <div class="row">
        <label for="email" class="label">Your email</label>
        <input type="email" name="email" v-model="form.email">
      </div>
    </div>

    <div class="message">
      <label for="message" class="label">Message</label>
      <textarea name="message" v-model="form.message"></textarea>
    </div>

    <button class="button" type="submit">Send</button>
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
      loading: false
    };
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
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      this.$axios
        .post(
          "/",
          this.encode({
            "form-name": "contact",
            ...this.form
          }),
          axiosConfig
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>


<style lang="scss" scoped>
input:focus,
textarea:focus {
  border-color: var(--color-contrast-1);
}

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
}

textarea {
  resize: none;
  height: 140px;
}

.contact-form {
  margin-bottom: 2rem;
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
  transition: opacity 0.25s ease;
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