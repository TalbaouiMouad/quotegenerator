var quote=document.querySelector('#quote');
var button=document.querySelector('#generateurDeQuotes');

 class Quote {
     constructor(text,author){
         this.text=text;
         this.author=author;
     }
     get createElement(){
         var paragraphe=document.querySelector('p')
         var span=document.querySelector('span')
        paragraphe.innerHTML='<i class="bi bi-chat-quote"></i>'+this.text;
        if (this.author==null) {
            span.innerHTML='<h6 class="d-inline-block">Author:</h6> inconnue'
        } else {
            span.innerHTML='<h6 class="d-inline-block">Author:</h6>'+' '+this.author; 
        }
        
     }
 }
 async function get(){
    const response=await fetch("https://type.fit/api/quotes")
    const data=await response.json()
    return data;
    
}
function generateurDeQuotes(data){
    let nombreRandom=Math.floor(Math.random()*1643);
    let quoteAleatoir=new Quote(data[nombreRandom].text,data[nombreRandom].author);
    quoteAleatoir.createElement;
}
get().then(generateurDeQuotes)
button.addEventListener('click',()=>{get().then(generateurDeQuotes)});