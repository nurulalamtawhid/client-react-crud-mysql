import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";


const Books = () => {
    const[books,setbooks] = useState();
    useEffect(()=>{
        const allbooks = async ()=>{
            try{
                const response = await axios.get("http://localhost:8000/books");
                setbooks(response.data);
                console.log(books);
            }
            catch(error){
                console.log(error)
            }

        }
        allbooks();
    },[])


    return (
        <>
            <p className="text-2xl text-blue-500 text-center"> Here Show all the books</p>
            <div className="grid  grid-cols-3 gap-[2px]  py-4">
            {books?.map(book=>
                <BookCard book={book} key={book.id}/>
            )}
            </div>
        </>
    );
};

export default Books;