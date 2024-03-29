import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import "../App.css";



const ProductDetails=(props)=>{
  const [comments,setComments]=useState("");
  const collectdata=async(id)=>{
    console.log(id);
  let result=await fetch('http://localhost:5500/postcomment',{
    method:'Post',
    body: JSON.stringify({comments, id}),
    headers:{
      'content-Type':'application/json'
    }
  })
   result=await result.json();
  console.log(result);
  localStorage.setItem("comments",JSON.stringify(result));


}
const location = useLocation()
console.log(location.state)
console.log(location.state.comment)
// function comm(){
//   location.state.comment.forEach((s)=>(console.log(s.toString())))
// }
// location.state.comment.forEach((s)=>(console.log(s)))
// console.log(location.state.comment)
    return(
    <>
    <div className='detailsbg'>
    <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-10">
            <div style={{borderRadius:"0%"}} class="card">
                <div  class="row">
                    <div class="col-md-6">
                        <div class="images p-3">
                            <div class="text-center p-4"> <img alt='' id="main-image" src={location.state.imagelink} width="250" /> </div>
                            <div class="thumbnail text-center"> <img onclick="change_image(this)" alt='' src={location.state.imagelink} width="70"/> <img alt='' onclick="change_image(this)" src={location.state.imagelink} width="70"/> </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product p-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span class="ml-1">New</span> </div> <i class="fa fa-shopping-cart text-muted"></i>
                            </div>
                            <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">{location.state.company}</span>
                                <h5 class="text-uppercase">{location.state.name}</h5>
                                <div class="price d-flex flex-row align-items-center"> <span style={{margin:"4px"}} class="act-price">${location.state.price}</span>
                                    <div class="ml-2"> <small class="dis-price">{location.state.price*1.20}</small> <span>20% OFF</span> </div>
                                </div>
                            </div>
                            <p class="about">{location.state.discription}</p>
                            <div class="sizes mt-5">
                               
                            </div>
                            <div class="cart mt-4 align-items-center"> <button class="btn btn-danger text-uppercase mr-2 px-4">Buy Now</button> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
      
<section style={{backgroundColor: "#eee;"}}>
 
        <div style={{borderRadius:"0%"}} class="card">
          <div class="card-body">
            <div style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"extra-large"}}>Comments</div>
            <div class="d-flex flex-start align-items-center">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://upload.wikimedia.org/wikipedia/en/d/d6/CobraKaiTitleScreen.png" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 class="fw-bold text-primary mb-1">Lily Coleman</h6>
                <p class="text-muted small mb-0">
                  Shared publicly - Jan 2020
                </p>
              </div>
            </div>
                {/* <h5>{comm}</h5> */}

          

            <div class="small d-flex justify-content-start">
              <a href="#!" class="d-flex align-items-center me-3">
                <i class="far fa-thumbs-up me-2"></i>
                <p class="mb-0">Like</p>
              </a>
              <a href="#!" class="d-flex align-items-center me-3">
                <i class="far fa-comment-dots me-2"></i>
                <p class="mb-0">Comment</p>
              </a>
              <a href="#!" class="d-flex align-items-center me-3">
                <i class="fas fa-share me-2"></i>
                <p class="mb-0">Share</p>
              </a>
            </div>
          </div>
          <div class="card-footer py-3 border-0" style={{backgroundColor: "#f8f9fa;"}}>
            <div class="d-flex flex-start w-100">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://upload.wikimedia.org/wikipedia/en/d/d6/CobraKaiTitleScreen.png" alt="avatar" width="40"
                height="40" />
              <div class="form-outline w-100">
                <textarea class="form-control" id="textAreaExample" rows="4"
                  style={{background: "#fff;"}} value={comments} onChange={(e)=>setComments(e.target.value)}></textarea>
                <label class="form-label" for="textAreaExample">Comment</label>
              </div>
            </div>
            <div class="float-end mt-2 pt-1">
              <button type="button" class="btn btn-primary btn-sm" onClick={collectdata(location.state.id)} >Post comment</button>
              <button style={{margin:'20px'}} type="button" class="btn btn-outline-primary btn-sm"  >Cancel</button>
            </div>
          </div>
        </div>
</section>
</div>
</div>
</div>
</div>
    </>
    )
}
export default ProductDetails;
