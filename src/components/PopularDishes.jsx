import './PopularDishes.css';

const DISHES = [
  {
    name: 'Chicken Biryani',
    price: '₹349',
    desc: 'Aromatic basmati rice layered with tender chicken and exotic spices',
    image: '/images/chicken-biryani.png',
    tag: 'Bestseller',
  },
  {
    name: 'Butter Chicken',
    price: '₹299',
    desc: 'Creamy tomato curry with succulent tandoori chicken pieces',
    image: '/images/butter-chicken.png',
    tag: 'Chef Special',
  },
  {
    name: 'Paneer Tikka',
    price: '₹249',
    desc: 'Chargrilled cottage cheese marinated in aromatic spices',
    image: '/images/paneer-tikka.png',
    tag: 'Veg',
  },
  {
    name: 'Fried Rice',
    price: '₹199',
    desc: 'Wok-tossed rice with fresh vegetables and Asian seasonings',
    image: '/images/fried-rice.png',
    tag: '',
  },
  {
    name: 'Wood-fired Pizza',
    price: '₹399',
    desc: 'Hand-stretched dough with premium toppings and mozzarella',
    image: '/images/pizza.png',
    tag: 'New',
  },
  {
    name: 'Gourmet Burger',
    price: '₹329',
    desc: 'Double-stacked patty with artisan bun and signature sauce',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop',
    tag: 'Popular',
  },
];

function DishCard({ dish, index }) {
  const delayClass = `delay-${index + 1}`;

  return (
    <article className={`dish-card reveal ${delayClass}`}>
      <div className="dish-card__img-wrap">
        <img src={dish.image} alt={dish.name} loading="lazy" />
        {dish.tag && <span className="dish-card__tag">{dish.tag}</span>}
      </div>

      <div className="dish-card__body">
        <h4 className="dish-card__name">{dish.name}</h4>
        <p className="dish-card__desc">{dish.desc}</p>

        <div className="dish-card__footer">
          <span className="dish-card__price">{dish.price}</span>
          <button
            id={`order-${dish.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="btn btn-outline dish-card__btn"
          >
            Order Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default function PopularDishes() {
  return (
    <section id="menu" className="section popular-dishes">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Menu</span>
          <h2 className="section-title">
            Popular <span className="gold">Dishes</span>
          </h2>
          <div className="divider" />
          <p className="section-desc">
            Handcrafted with passion — discover the dishes our guests can&#39;t
            stop ordering.
          </p>
        </div>

        <div className="dishes-grid">
          {DISHES.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} index={i} />
          ))}
        </div>

        <div className="dishes-cta">
          <button id="view-full-menu" className="btn btn-outline">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
