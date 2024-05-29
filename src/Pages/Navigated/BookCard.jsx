import axios from "axios";

import { toast } from 'react-toastify';

const BookCard = ({book}) => {
    const {tittle, desc,cover,id}=book;
    console.log(cover);

    const handleDelete =async (id)=>{

      try{
          await axios.delete("http://localhost:8000/books/"+id);
          window.location.reload();
          toast.success("Deleted successfully !", {
            position: toast.POSITION.TOP_RIGHT,
          });
      }
      catch(err){
        console.log(err);
      }

    }

  return (
    <div className="card w-96 bg-base-100 shadow-xl my-3 mx-3">
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
        <button onClick={()=>{handleDelete(id)}} className="btn btn-outline btn-warning">Deelete</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
