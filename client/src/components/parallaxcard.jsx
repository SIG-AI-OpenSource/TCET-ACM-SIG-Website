import './parallaxcard.css';

const parallaxcard = () =>{
  return(
  <div class="cardss">
    <h3>Movies</h3>
    <h1>Popular</h1>
    <div class="card card__one">
      <div class="card__bg"></div>
      <img class="card__img" src="01.png" />
      <div class="card__text">
        <p class="card__title">Princess Mononoke</p>
      </div>
  </div>
  <div class="card card__two">
    <div class="card__bg"></div>
    <img class="card__img" src="02.png" />
    <div class="card__text">
      <p class="card__title">Spirited Away</p>
    </div>
  </div>
  <div class="card card__three">
    <div class="card__bg"></div>
    <img class="card__img" src="03.png" />
    <div class="card__text">
      <p class="card__title">Howl's Moving Castle</p>
    </div>
  </div>
  <script src="./javascript.js"></script>
</div>);
}
export default parallaxcard;
