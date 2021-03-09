<template>
  <div class="error">
    <img src="@/assets/img/404.svg" alt="404" />
    <div class="description">
      <h2>
        A página que você está procurando <br />
        não existe ou foi removida
      </h2>
      <button class="btn-back">
        <a href="/"> Voltar para Home </a>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error {
  width: 100%;
  height: 100%;
  background-color: #292929;
  color: #f7f7f7;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  grid-gap: 4rem;
  position: absolute;
}

.description {
  text-align: center;
}

p {
  color: #f7f7f7;
  font-size: 1.2rem;
  line-height: 1.5rem;
}

button {
  margin-top: 2rem;
  background-color: #f7f7f7;
  padding: 10px;
  transition: all 1s ease;
  &:hover {
      transform: scale(1.05);
    }
}

a {
  list-style: none;
  text-decoration: none;
  color: #292929;
  font-weight: bold;
}
</style>
