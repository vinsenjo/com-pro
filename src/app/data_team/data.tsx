// export default async function FetchingServer() {
//   const res= await fetch('https://randomuser.me/api/?results=5', {
//         method: "GET"
//   })

//   const user  = await res.json();
//   console.log(user);
  
//   return (
//         <div>
//               <h1>Fetching Data</h1>
//               <ul className="flex">
//                     {user.results.map((item : any, index : any) => (
//                           <div>
//                                 <img src={item.picture.large} key={index}
//                                       width={200}
//                                       height={100}
//                                       alt='pp' />
//                                 {/* <p>{item.name.first} {item.name.last}</p> */}
//                           </div>
//                     ))}
//               </ul>
//         </div>
//   )
// } 