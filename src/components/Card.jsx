import { Container } from "react-bootstrap";

const Card = (props) => {
  console.log(props);
  const { type, name, img } = props[1];
  return (
   <>
    <Container className="">
      <div className=" text-center"> 
      <button className="btn btn-success">Select</button>
      <h2>{name}</h2>
      <img src={img} /></div>
    </Container>
    <Container className="">
      <div className=" text-center"> 
      <button className="btn btn-success">Select</button>
      <h2>{name}</h2>
      <img src={img} /></div>
    </Container>
    <Container className="">
      <div className=" text-center"> 
      <button className="btn btn-success">Select</button>
      <h2>{name}</h2>
      <img src={img} /></div>
    </Container>
   </>
  );
};
export default Card;
