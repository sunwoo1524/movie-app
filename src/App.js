import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I like { name }</h3>
      <p>{ rating } / 5.0</p>
      <img src={ picture } width={200} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "피자",
    image: "https://w.namu.la/s/8c2aebf04d4c6e0ae24ebf3b3789cb064f353da40f0a2916630ee33cc34742414ac8427b8765569e84d615a24cac7bc389ada2e5c60579541ea8b41be9b22db66f14a3db5f981a2cc93bba229a7529328c1cad205168872282cdfcd7cc3eb89c73099f128e27bdd4b024d47fd7583b56",
    rating: 5,
  },
  {
    id: 2,
    name: "떡볶이",
    image: "https://desion.kr/web/product/tiny/202101/7b8394ed298eafcde0ad47a0bc64de83.jpg",
    rating: 1,
  },
  {
    id: 3,
    name: "치킨",
    image: "http://www.bhc.co.kr/upload/bhc/menu/410x271_view_%EC%B9%98%ED%90%81%EB%8B%B9%ED%95%9C%EB%A7%88%EB%A6%AC(0).png",
    rating: 1972,
  },
];

function App() {
  return (
    <div>
      <h1>음식들임</h1>
      {
        foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        ))
      }
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
