const Card=(data)=>{
  const{type,name,img}=data;
console.log(data)
  return (<div>
    <h1>{type}</h1>
  </div>)
}
export default Card;
