function requestingData(){
    var xhr = new XMLHttpRequest()
    xhr.open('GET','https://jsonplaceholder.typicode.com/comments',true)
    xhr.onload = function(){
        if(xhr.status==200){
            let items = JSON.parse(this.responseText)
            let output =''
            items.forEach((item,index) => {
                output += 
                `
                    <div class="swiper-slider">
                        <span id="name">${item.name}+ ${index}</span>
                        <p id="body">${item.body}</p>
                    </div>
                `
            })
            document.querySelector('.swiper-wrapper').innerHTML = output
        }else{
            console.log(xhr.status)
        }
    }
    xhr.send()
}

requestingData()