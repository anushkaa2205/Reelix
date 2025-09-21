import React from 'react'
export function Cards(props) {
    const data = [
    { 
      id: 1, 
      title: "Card 1", 
      description: "This is the first card.", 
      image: "https://images.unsplash.com/photo-1757293266476-799d3e258ad6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    { 
      id: 2, 
      title: "Card 2", 
      description: "This is the second card.", 
      image: "https://images.unsplash.com/photo-1757293266476-799d3e258ad6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    { 
      id: 3, 
      title: "Card 3", 
      description: "This is the third card.", 
      image: "https://images.unsplash.com/photo-1757293266476-799d3e258ad6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    { 
      id: 4, 
      title: "Card 3", 
      description: "This is the third card.", 
      image: "https://images.unsplash.com/photo-1757293266476-799d3e258ad6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    { 
      id: 5, 
      title: "Card 3", 
      description: "This is the third card.", 
      image: "https://images.unsplash.com/photo-1757293266476-799d3e258ad6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    { 
      id: 6, 
      title: "Card 3", 
      description: "This is the third card.", 
      image: "https://images.unsplash.com/photo-1757293266476-799d3e258ad6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    { 
      id: 7, 
      title: "Card 3", 
      description: "This is the third card.", 
      image: "https://images.unsplash.com/photo-1757293266476-799d3e258ad6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
  ];

    return (
    <>
        <div className='flex flex-wrap'>
            {data.map((item)=>{

        return <div 
          key={item.id} 
          className="  shadow-md rounded-lg w-60 m-2"
        >
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-auto  " 
          />
          <p className='text-white'>{item.title}</p>
          
        </div>
       })}
            
        </div>       
    </>
    )
}
