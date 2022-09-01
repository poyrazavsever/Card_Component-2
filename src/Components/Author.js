import React from 'react'
import AuthorItem from './AuthorItem'
import "../index.css"

function Author() {
    const data = [
        {
          imgLink : "Images/pp.jpg",
          name:"Poyraz As",
          job:"Front-end Developer",
          githubLink:"https://www.github.com/poyrazavsever",
          instagramLink:"https://www.instagram.com/p.avsever/",
          twitterLink:"https://twitter.com/PoyrazAvsever",
          views:"2.4M",
          like:"14K",
          desc:"       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur corporis tempora, numquam temporibus veniam sequi quia excepturi explicabo perferendis omnis totam? Dolorum, odit. Asperiores tenetur distinctio quod rem at beatae suscipit dolores! Excepturi cupiditate, ipsa iste modi cum consequatur quasi? Eum fugiat qui repudiandae possimus reiciendis consectetur atque ducimus magnam tempora unde optio vel corrupti facilis nostrum soluta minus, distinctio fuga quam accusantium est nesciunt dicta laborum. Asperiores, impedit. Perferendis molestias in unde, aspernatur ipsa, consectetur tenetur nam, architecto eos sint adipisci quae placeat optio! Pariatur quis doloremque et tempora, aspernatur officiis aliquam ullam eligendi suscipit! Quia quaerat at voluptas!",
    
        },
    
        {
            imgLink : "Images/pp.jpg",
            name:"Poyraz As",
            job:"Front-end Developer",
            githubLink:"https://www.github.com/poyrazavsever",
            instagramLink:"https://www.instagram.com/p.avsever/",
            twitterLink:"https://twitter.com/PoyrazAvsever",
            views:"2.4M",
            like:"14K",
            desc:"       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur corporis tempora, numquam temporibus veniam sequi quia excepturi explicabo perferendis omnis totam? Dolorum, odit. Asperiores tenetur distinctio quod rem at beatae suscipit dolores! Excepturi cupiditate, ipsa iste modi cum consequatur quasi? Eum fugiat qui repudiandae possimus reiciendis consectetur atque ducimus magnam tempora unde optio vel corrupti facilis nostrum soluta minus, distinctio fuga quam accusantium est nesciunt dicta laborum. Asperiores, impedit. Perferendis molestias in unde, aspernatur ipsa, consectetur tenetur nam, architecto eos sint adipisci quae placeat optio! Pariatur quis doloremque et tempora, aspernatur officiis aliquam ullam eligendi suscipit! Quia quaerat at voluptas!",
      
          },
    
      ]
    
    
      const data_filter = data.map((e,index) => {
        
        return <AuthorItem 
        imgLink = {e.imgLink}
        name = {e.name}
        job = {e.job}
        githubLink = {e.githubLink}
        instagramLink = {e.instagramLink}
        twitterLink = {e.twitterLink}
        views = {e.views}
        like = {e.like}
        desc = {e.desc}
        key = {index}
        />
      })
    
      return (
    
        <div className='flex justify-center items-center h-screen pb-24'>
          <div className='w-screen-xl my-0 mx-auto flex flex-wrap justify-center items-center gap-8 sm:w-full'>
              {data_filter}
          </div>
        </div>
    
  )
}

export default Author