import React from 'react'

function Book(props) {
    const {image, author, bookname} = props.book
    // console.log(author)
    const handelClick = ()=>{
        console.log(author)
    }
  return (
    <>
    
<section className='book'>
   
        <img className="img" src={image} alt="" />
        <h2 className="bookname">{author}</h2>
        <p className="author">{bookname}</p>
        <button className="btn" onClick={handelClick}>click me</button>
        
</section>
    </>
  )
}

export default Book