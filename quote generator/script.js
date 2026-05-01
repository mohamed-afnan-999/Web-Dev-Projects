const quoteArea = document.getElementById('quote');
const quoteBtn = document.getElementById('generate-quote-btn');

let x = async () => {
    quoteArea.innerText = '';   // add a quote here

    try{
        const response = await fetch('https://dummyjson.com/quotes/random');
        
        if (!response.ok)
            throw new Error("Unable to fetch quotes");
        
        const data = await response.json();
        const quote = data.quote;
        quoteArea.innerText = quote;
    }
    catch(error)
    {
        console.error(error);
    }
}

quoteBtn.addEventListener('click', x);