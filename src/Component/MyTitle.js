function MyTitle(props) {
  return (
    
      <h1 style={{ textAlign: "center", color: props.myColor,paddingTop: "20px" }}>
        {props.head}
      </h1>
   
  );
}
export default MyTitle;
