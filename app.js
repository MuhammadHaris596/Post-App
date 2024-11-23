// var checkChildren = document.childNodes[1].childNodes

// var div = document.createElement('div')
// var heading = document.createElement('h1')
// var paragraph = document.createElement('p')

// var headingText = document.createTextNode('Saylani MASS IT Training')
// var paraText = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi reiciendis necessitatibus libero voluptates voluptate ratione fuga iure cum, molestiae odio iusto a officia eveniet error adipisci? Ad cum ut illum!')

// heading.appendChild(headingText)
// paragraph.appendChild(paraText)

// div.appendChild(heading)
// div.appendChild(paragraph)

// document.body.appendChild(div)


    /* <div class="card my-4">
  <div class="card-header d-flex justify-content-between">
     <span>
      ~@Featured
     </span>
     <span>
      17-11-2024
     </span>
  </div>
  <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
  </div> */
  
  
  function recation(){
    var reactionimg = document.getElementById('react')
   
    if( reactionimg.style.color ==="blue"){
      reactionimg.style.color = "black"
    }
    else{
      reactionimg.style.color="blue"
    }
  }
 
  var selectImgPath ;
  
  
  function selectedImage(src) {
     var imagesBg = document.getElementsByClassName('bg-image')
      for(var i = 0; i < imagesBg.length; i++) {
          imagesBg[i].classList.remove('selectedImage')
      }
      event.target.classList.add('selectedImage')
      selectImgPath = src
  }
  
  
  function submitPost() {
    var userName = document.getElementById("username");
    var title = document.getElementById("title");
    var description = document.getElementById("desc");
    var currentDateTime = new Date().toUTCString();
  
    var listingContainer = document.querySelector("#listingContainer");
  
    if (userName.value.trim() !== "") {
      if (title.value.trim() !== "") {
        if (description.value.trim() !== "") {
          listingContainer.innerHTML += `<div class="card my-4">
                        <div class="card-header d-flex justify-content-between ">
                            <div class="d-flex g-0">
                         <span class="spn"><img src="./assests/beautiful-woman-dreaming-cyber-monday-sales_23-2148313194.avif" class="img-3" alt=""></span>
                           <span>
                            ~@${userName.value}
                           </span>
                        </div>
                           <span>
                            ${currentDateTime}
                           </span>
                        </div>
                        <div  style="background-image: url('${selectImgPath}')" class="card-body postCardBody">
                            <h5 class="card-title">${title.value}</h5>
                            <p class="card-text">${description.value}</p>

                            <hr class="hr">

                            <div class="d-flex justify-content-between   alig-items-center g-5">
                            <p> <a href="javascript:void(0)" onclick="recation()"><i class="fa-regular fa-thumbs-up thumb" id="react"></i></a> <span>Like</span> </p>

                            <a href="javascript:void(0)" style="text-decoration: none;" onclick="comment()">Comment</a>

                            
                        </div>


                      
                        </div>
                        <div class="d-flex justify-content-between alig-items-center d-none " id="none">
                            <input type="text" style="width: 100%; padding: 12px 20px; outline: none;" class="rounded-2" id="inp"> 
                            <button type="submit" class="btn btn-success with" onclick="sumbitted()">send</button>
                        </div>
                        </div> `;
  
  
  userName.value = ''
  title.value = ''
  description.value = ''
        } else {
          Swal.fire({
            title: "Invalid Title",
            text: "PLease fill the titlename",
            icon: "error"
          });
        }
      } else {
        Swal.fire({
          title: "Invalid Description",
          text: "PLease fill the Description",
          icon: "error"
        });
      }

    } else {
      Swal.fire({
        title: "Username  invalid",
        text: "PLease fill the username",
        icon: "error"
      });
    }
  }



  function comment(){
    var commentsec = document.getElementById('none').classList.remove('d-none')
  }


  function  sumbitted(){
    var inputt = document.getElementById('inp')
    inputt.value
  }