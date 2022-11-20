import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // it will only render when thi ng written in this box will go through a change //
   const {error,isLoading,data:blogs}  = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
         {error && <div>{error}</div>}
         { isLoading && <div>Loading....</div> }
          { blogs && <BlogList blogs = {blogs}  /> }
          {/* logical and evaluates left first and if thats false it doesngt even bother to checvk other operand */}

           {/* // we will import the data of blogs into bloglist by doing this */}
        </div>
     );

     // HOW TO USE MAPPING 
    //  <div className="home">
    //     {blogs.map((blog) =>(
    //         <div className="blog-preview" key={blog.id}>
    //            <h2>{blog.title}</h2>
    //            <p2>Written by {blog.author}</p2>
    //             </div>
    //     ))}
    //  </div>
}
 
export default Home;