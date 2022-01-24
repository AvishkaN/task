const body=document.querySelector('.container');


const roundTripHtml=`
<div id="form-container" class="form-container mt-4">

<div id="row" class="row ">

    <div class="col-lg-2">
        <div class=" input-group mb-3">
            <span class="input-group-text" id="basic-addon1">  <i class="fas fa-plane-departure"></i></span>
          
            <input type="text" class="form-control" placeholder="From Where" aria-label="Username" aria-describedby="basic-addon1">
        </div>
    </div>
    
    <div class="col-lg-2">
        <div class=" input-group mb-3">
            <span class="input-group-text" id="basic-addon1"> 
                <i class="fas fa-plane-arrival"></i>
            </span>
          
            <input type="text" class="form-control" placeholder="Destination" aria-label="Username" aria-describedby="basic-addon1">
        </div>
    </div>
    <div class="col-lg-2">
        <div class=" input-group mb-3">
            <span class="input-group-text" id="basic-addon1"> 
                <i class="far fa-calendar-alt"></i>
            </span>
          
            <input type="date" class="form-control" placeholder="Destination" aria-label="Departure" aria-describedby="basic-addon1">
        </div>
    </div>

    <div class="col-lg-2">
        <div class=" input-group mb-3">
            <span class="input-group-text" id="basic-addon1"> 
                <i class="far fa-calendar-alt"></i>
            </span>
          
            <input type="date" class="form-control" placeholder="Destination" aria-label="Departure" aria-describedby="basic-addon1">
        </div>
    </div>

    <div class="col-lg-2 p-1 font-size-normal text-center">
        <i class="fas fa-hiking fa-util"></i>
        <span>Travellers</span>
    </div>

    <div class="col-lg-2">
        <button type="button" class="btn btn-danger w-100">Search</button>
    </div>

</div>

</div>
`;


const OneWayHtml=`
<div class="form-container mt-4">

<div id="row" class="row ">

    <div class="col-lg-2">
        <div class=" input-group mb-3">
            <span class="input-group-text" id="basic-addon1">  <i class="fas fa-plane-departure"></i></span>
          
            <input type="text" class="form-control" placeholder="From Where" aria-label="Username" aria-describedby="basic-addon1">
        </div>
    </div>
    
    <div class="col-lg-2">
        <div class=" input-group mb-3">
            <span class="input-group-text" id="basic-addon1"> 
                <i class="fas fa-plane-arrival"></i>
            </span>
          
            <input type="text" class="form-control" placeholder="Destination" aria-label="Username" aria-describedby="basic-addon1">
        </div>
    </div>
    <div class="col-lg-2">
        <div class=" input-group mb-3">
            <span class="input-group-text" id="basic-addon1"> 
                <i class="far fa-calendar-alt"></i>
            </span>
          
            <input type="date" class="form-control" placeholder="Destination" aria-label="Departure" aria-describedby="basic-addon1">
        </div>
    </div>

  

    <div class="col-sm-4 p-1 font-size-normal text-center">
        <i class="fas fa-hiking fa-util"></i>
        <span>Travellers/Cabin</span>
    </div>

    <div class="col-lg-2">
        <button type="button" class="btn btn-danger w-100">Search</button>
    </div>

</div>

</div>

`;

const MultiCityHtml=`

<div id="form-container " class="form-container mt-4 me-4 ms-4">

<div id="multiCityHtml">



<div id="row" class="row ">


    <div class="col-lg-3">
        <div class=" input-group mb-3">
            <span class="input-group-text" id="basic-addon1">  <i class="fas fa-plane-departure"></i></span>
          
            <input type="text" class="form-control" placeholder="From Where" aria-label="Username" aria-describedby="basic-addon1">
        </div>
    </div>
    
    <div class="col-lg-3">
        <div class=" input-group mb-3">
            <span class="input-group-text" id="basic-addon1"> 
                <i class="fas fa-plane-arrival"></i>
            </span>
          
            <input type="text" class="form-control" placeholder="Destination" aria-label="Username" aria-describedby="basic-addon1">
        </div>
    </div>
    <div class="col-lg-3">
        <div class=" input-group mb-3">
            <span class="input-group-text" id="basic-addon1"> 
                <i class="far fa-calendar-alt"></i>
            </span>
          
            <input type="date" class="form-control" placeholder="Destination" aria-label="Departure" aria-describedby="basic-addon1">
        </div>
    </div>

    <div class="col-lg-3  font-size-normal text-center">
        <div>Cabin Class & Info</div>
        <i class="fas fa-hiking fa-util"></i>
        <span>Travellers</span>
    </div>

   
</div>

<div id="row " class="row mt-2 ">



    <div class="col-lg-3">
        <label class="font-size-normal">Origin </label>
        <div class=" input-group mb-3">
            <span class="input-group-text" id="basic-addon1">  <i class="fas fa-plane-departure"></i></span>
          
            <input type="text" class="form-control" placeholder="From Where" aria-label="Username" aria-describedby="basic-addon1">
        </div>
    </div>
    
    <div class="col-lg-3">
        <label class="font-size-normal">Destination </label>
        <div class=" input-group mb-3">
            <span class="input-group-text" id="basic-addon1"> 
                <i class="fas fa-plane-arrival"></i>
            </span>
          
            <input type="text" class="form-control" placeholder="Destination" aria-label="Username" aria-describedby="basic-addon1">
        </div>
    </div>
    <div class="col-lg-3">
        <label class="font-size-normal">Departure </label>
        <div class=" input-group mb-3">
            <span class="input-group-text" id="basic-addon1"> 
                <i class="far fa-calendar-alt"></i>
            </span>
          
            <input type="date" class="form-control" placeholder="Destination" aria-label="Departure" aria-describedby="basic-addon1">
        </div>
    </div>


   
</div>


<!--New Line  -->


<!-- BTN ROWS -->
<div class="btn-row mt-3" id="add-city-new-line-section">
    <button type="button" class="btn btn-warning text-light fw-bold background-warning btn-remove-focus" id="add-city-btn">Add City (Up to 5)</button>
</div>
   
<div class="btn-row row mt-3 justify-content-end">
    <div class="col-sm-2">
        <button type="button" class="btn btn-danger fw-bold w-100">SEARCH</button>

    </div>
</div>
</div>






</div>
</div>
`;

const newLineHtml=`
<div id="row_added-line" class="row mt-2 border-top pt-3 display-flex-a-c row_added-line">
                
<div class="col-sm-3">
    <label class="font-size-normal">Origin </label>
    <div class=" input-group mb-3">
        <span class="input-group-text" id="basic-addon1">  <i class="fas fa-plane-departure"></i></span>
      
        <input type="text" class="form-control" placeholder="From Where" aria-label="Username" aria-describedby="basic-addon1">
    </div>
</div>

<div class="col-sm-3">
    <label class="font-size-normal">Destination </label>
    <div class=" input-group mb-3">
        <span class="input-group-text" id="basic-addon1"> 
            <i class="fas fa-plane-arrival"></i>
        </span>
      
        <input type="text" class="form-control" placeholder="Destination" aria-label="Username" aria-describedby="basic-addon1">
    </div>
</div>
<div class="col-sm-3">
    <label class="font-size-normal">Departure </label>
    <div class=" input-group mb-3">
        <span class="input-group-text" id="basic-addon1"> 
            <i class="far fa-calendar-alt"></i>
        </span>
      
        <input type="date" class="form-control" placeholder="Destination" aria-label="Departure" aria-describedby="basic-addon1">
    </div>
</div>

<div class="col-sm-2 mt-2 cursor-p">
    <div class="close-btn">
        <i id="close-btn" class="fas fa-times background-warning pt-2 pb-2 pe-3 ps-3 "></i>
    </div>
</div>


</div>
`;


const removeElement=()=>{
    console.log(document.getElementById("row"));
    document.getElementById("row").remove();
    document.getElementById("multiCityHtml")?.remove()
};
const AddElement=(elementHtml)=>{
    document.getElementById('form-container').insertAdjacentHTML('beforebegin',elementHtml)
};

const AddRow=(elementHtml)=>{
    document.getElementById('add-city-new-line-section').insertAdjacentHTML('beforebegin',elementHtml)

}



document.querySelector('body').addEventListener('click',function(e){
    const IsRoundTripSelect=e.target.closest('#round-trip');
    const IsOneWaySelect=e.target.closest('#one-way');
    const IsMultiWaySelect=e.target.closest('#multi-city');

    // Add new Line section selection
    const IsAddCityBtnSelect=e.target.closest('#add-city-btn');
    const IsCloseBtnSelect=e.target.closest('#close-btn');

    // console.log(IsCloseBtnSelect);
    // console.log(e.target.closest('#add-city-btn'));


    if(IsRoundTripSelect){
        removeElement();
        AddElement(roundTripHtml);
    }

    if(IsOneWaySelect){
        removeElement();
        AddElement(OneWayHtml);
    }
    if(IsMultiWaySelect){
        removeElement();
        AddElement(MultiCityHtml);
    }

    // ADD New Line
    if(IsAddCityBtnSelect){
        // removeElement();
        const AddedLinesInCurrentPage=document.querySelectorAll('.row_added-line').length;

        if(AddedLinesInCurrentPage==3){
            return alert('you can add only up to 5 lines');
        }

        AddRow(newLineHtml);
    }


    if(IsCloseBtnSelect){ 
        console.log(e.target); 
        e.target.closest('#row_added-line').remove()
    }






})




