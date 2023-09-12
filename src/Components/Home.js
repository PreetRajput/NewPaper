import React, { useEffect, useState } from 'react'
import NewsItem from "./NewsItem";

export default function Home() {
    const [articles, setArticles]= useState([]);
    const [page, setPage]= useState(1);
    const [section, setSection]= useState("Keyword");
    let navButtons= document.querySelectorAll(".nav-button")
    useEffect(()=>{
        async function fetchData(){
        let url= `https://newsapi.org/v2/everything?q=${section}&apiKey=bd46c49c016244108a70e6e816be0be6&pageSize=12&page=${page}`;
        let data= await fetch(url);
        let parsedData= await data.json();
         setArticles(parsedData.articles);
         console.log("ASDsad");
         
        }
        fetchData();
    },[page, section])

    function setOpacity(section){
        navButtons.forEach((button) => {
            button.classList.remove("opacity-50")
            button.classList.add("opacity-50")
        });
        let a = document.querySelector(section);
        a.classList.remove("opacity-50")
        a.classList.add("opacity-100")   
    }

    useEffect(()=>
        {
            
    },[]) 
        
    
  return (
    <>
         <nav className="bg-gradient-to-tr from-blue-300 to-blue-200 w-full p-2  shadow-md shadow-black">
            <button className='mx-2 nav-button Home opacity-100 ' onClick={ ()=>{
                     setOpacity(".Home")
                    setSection("Keyword") 
                    
                }}>Home</button>
                <button className='mx-2 nav-button Sports opacity-50' onClick={ ()=>{
                     setOpacity(".Sports")
                    setSection("Sports") 
                    
                }}>Sports</button>
                <button className='mx-2 nav-button Entertainment opacity-50' onClick={()=>{
                    setSection("Entertainment")
                    setOpacity(".Entertainment")
                }
                    }>Entertainment</button>
                <button className='mx-2 nav-button politics opacity-50' onClick={()=>{
                    setSection("politics")
                    setOpacity(".politics")
                }
                    
                    } >Politics</button>
                     <button className='mx-2 nav-button Movies opacity-50' onClick={()=>{
                    setSection("Movies")
                    setOpacity(".Movies")
                }
                    } >Movies</button>
        </nav>
        <div className='' >
        <h2 className='text-center text-3xl font-serif NewsPaper cursor-pointer bg-white' onMouseEnter={()=>{
            let a = document.querySelector(".NewsPaper");
            a.classList.remove("underline");
        }}
        onMouseLeave={()=>{
            let a = document.querySelector(".NewsPaper");
            a.classList.add("underline");
        }}>NewsPaper</h2>
        </div>
        <div className="grid grid-cols-4 gap-3 bg-gradient-to-b from-white to-rose-300 p-4 tableOfItems" >
            
            {articles.map((element)=>{
                    return  <NewsItem key={element.url} image={element.urlToImage? element.urlToImage: "https://media.smallbiztrends.com/2016/01/valentines-gift-BING-1-660x370.png"} title={element.title} story={(element.description).slice(0,135)} url={element.url}/>
                    })}
        </div>
        <div className='flex justify-between p-2 bg-rose-300 '>
                <button disabled={page<=1} className='p-1 rounded font-mono shadow-sm shadow-black bg-blue-300 ' onClick={
                    ()=>
                    {setPage(page-1)}
                    }>Previous</button>

                <button className='p-1 rounded font-mono shadow-sm shadow-black bg-blue-300 ' 
                onClick={()=>
                {setPage(page+1)}
                }>Next</button>

        </div>
    </>
  )
}
