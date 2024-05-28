const BookCard = ({book}) => {
    const {tittle, desc,cover}=book;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={cover}
          alt="books"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
         {tittle}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
