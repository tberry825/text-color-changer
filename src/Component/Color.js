
function Color(props) {
    // This code is assigning the values of specific props from the props object to individual variables using simple variable assignment.
    const data = props.data;  
    const onClickProp = props.onClickProp;
    const clickedBox = props.clickedBox;
  
    // const { data, onClickProp, clickedBox } = props; - - reconstructed version

    return (
      <div>
        {/* This code is using the map function to iterate over the data array and generate a set of React elements based on each item in the array */}
        {data.map((item, index) => (
          <div
            key={index}
            style={index === clickedBox ? { color: item.color } : { color: "black" }}
            onClick={() => onClickProp(index)}
          >
            <p>{item.color}</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Color;

  //Props can be passed back to the parent only when you pass callback functions as props from the parent to the child.!!!!!



