function requestingData(){
    var xhr = new XMLHttpRequest()
    xhr.open('GET','https://jsonplaceholder.typicode.com/comments',true)
    xhr.onload = function(){
        if(xhr.status==200){
            let items = JSON.parse(this.responseText)
            let output =''
            items.forEach((item,index) => {
                if(index < 4){
                    output += 
                    `
                        <div class="swiper-slide">
                            <span id="name">${item.name}+ ${index}</span>
                            <p id="body">${item.body}</p>
                        </div>
                    `
                }

            })
            console.log(output)
            document.querySelector('.swiper-wrapper').innerHTML += output
        }else{
            console.log(xhr.status)
        }
    }
    xhr.send()
}

async function requestingData2(){
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(fetchedResponse => fetchedResponse.json())
        .then(items => {
            let output = ''
            items.forEach((item,index) => {
                if(index < 5){
                    console.log(item)
                    output += 
                    `
                        <div class="swiper-slide">
                            ${item.name}
                        </div>
                    `
                }

                document.querySelector('.swiper-wrapper').innerHTML = output
            })
        })
}

requestingData2()

// requestingData()