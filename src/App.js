// import React,{useState} from 'react'
// import Book from './BookList/Book'
// import Data from './BookList/Data'
// const App = () => {
//     const [data, setData] = useState(Data);
//     // console.log(data)
//   return (
//     <div className='bookList'>
//        {
//         data.map((Book,index)=>{
//             const {image, author, bookname} = Book;
//             return(
//                 <>
//                    <Book Book={Book}/>
                
//                 </>
//             )
//         })
//        }
   
//     </div>
//   )
// }


import React,{useState} from 'react'
import Book from './BookList/Book'
import Data from './BookList/Data'
const App = () => {
    const [data,setData] = useState(Data)
  return (
    <>
    <header>Book List</header>
    <div className='bookList'>
         
        {
            data.map((book,index)=>{
                const {image, author, bookname} = book;
                return(
                    <article key={index}>
                    <Book book={book}/>
                    </article>
                )
            })
        }
        
    </div>
    </>
  )
}

export default App