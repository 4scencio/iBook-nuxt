<template>
    <div class="presentation">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet orci fringilla est porta pretium. Donec facilisis est in velit convallis, ac ultricies sapien auctor. Sed pretium tempor nunc in placerat. Quisque aliquet vehicula ante ac aliquet. Nam vitae neque id quam imperdiet pharetra at non nisl. Cras vitae finibus felis. Nullam dapibus nisi orci, ut consequat magna faucibus blandit. Nullam euismod varius nisl eu rutrum. Phasellus fringilla molestie auctor.
        </p>

        <img src="@/assets/img/presentation.svg" alt="Apresentação do iBook">
    </div>
</template>

<style lang="scss"scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>