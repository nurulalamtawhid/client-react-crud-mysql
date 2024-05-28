import { useForm } from "react-hook-form";
import "./AddBooks.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";



const AddBooks = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const navigate  = useNavigate();

  const onSubmit = async (data) => {
    try{
        await axios.post("http://localhost:8000/books",data);
    }
    catch(err){
        console.log(err);

    }
    navigate("/");
    
    console.log(data);
}


  return (
    <div>
      <p className="text-xl text-amber-700 text-center">
        Please Add your books
      </p>
      <div className="my-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Books-Tittle</label>
          <input
            {...register("tittle", {
              required: true,
              maxLength: 20,
             
            })}
          />
          {errors?.tittle?.type === "required" && (
            <p>This field is required</p>
          )}
          {errors?.tittle?.type === "maxLength" && (
            <p>First name cannot exceed 20 characters</p>
          )}
          
          <label>Description</label>
          <input {...register("desc")} />
          
          <label>Upload a cover photo of your books</label>
          <input {...register("cover", )}  />
          <label>Price</label>
          <input {...register("price")} />
          {errors.age && (
            <p>Please Add your price</p>
          )}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
