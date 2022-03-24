import React from 'react'; 
const Ninjas = ({ninjas}) => {
    const ninjaList = ninjas.map(ninja => {    // Here we are mapping through original data "Ninjas" 
        if(ninja.age > 20) 
        {
        return (
            <div className="ninja" key={ninja.id}> 
            <div>Name: { ninja.name }</div>
            <div>Age: { ninja.age } </div> 
            <div>belt: { ninja.belt } </div>
            </div>
        )
        } 
        else 
        {
            return null 
        } 
    })
    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas


// Conditionally outputting something based on condition what we have. 
// There are multiple ways to output conditionally. We can use "if" statement and ternary operator. 
// Made the conditional changes in the lin number 4 and 14 , if now we hit the browser it shows us the entries of the ninja list whose age is > 20.  