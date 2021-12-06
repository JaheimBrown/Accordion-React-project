import { useState } from "react";
import data from "./data";
const Accordion = () => {
  const [show, setShow] = useState(null);

  const toggleShow = (index) => {
    if (show === index) {
      return setShow(null);
    }
    setShow(index);
  };

  return (
    <section className='card-container'>
      {data.map((item, index) => (
        <div className='card' key={index}>
          <h2>{item.question}</h2>
          {show === index ? <p>{item.answer}</p> : null}
          <span onClick={() => toggleShow(index)}>
            {show === index ? "-" : "+"}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Accordion;
