<template>
  <form class="contact-form" name="contact">
    <div class="sender-info">
      <div class="row">
        <label for="name" class="label">Your name</label>
        <input type="text" name="name">
      </div>
      <div class="row">
        <label for="email" class="label">Your email</label>
        <input type="email" name="email">
      </div>
    </div>

    <div class="message">
      <label for="message" class="label">Message</label>
      <textarea name="message"></textarea>
    </div>

    <button class="button">Submit form</button>
  </form>
</template>

<style lang="scss" scoped>
.sender-info {
  display: flex;
  flex-wrap: wrap;

  .row {
    margin-bottom: 2rem;
  }
}

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
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
</style>
