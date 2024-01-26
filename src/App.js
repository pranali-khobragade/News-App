
import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

  let [articles,setArticles] =useState([]);

  let [category,setCategory] =useState("india");

  useEffect(()=>{

   
    fetch ("https://newsapi.org/v2/everything?q=${category}&from=2024-01-02&apiKey=12c5576d2e504b0b91988685d2e50510")
    .then((response=>response.json()))
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[category])
  return (
    <div className="App">
     
     <header className='header'>
    <h1>Aaj Taak</h1>

    <input type='text'  onChange={(event)=>{
      if(event.target.value!=="")
      {
        setCategory(event.target.value);
      }
      else
      {
        setCategory("india")

      }
      
    }}placeholder='Search News'/>
     </header>

     
      <section className='news-articles'>

        {
         
          
          articles.map((article)=>{
            return(
              <News article = {article}/>
          
            )
            
          })
         
      
        }
      
      
      
      </section>
    </div>
  );
}

export default App;
