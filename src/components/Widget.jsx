import { useState } from "react"
import { Form } from "./Form"
import { Clocks } from "./Clocks"
import { Clock } from "./Clock"

export function Widget() {
   let clocks = [{
      id: 1,
      name: 'Moscow',
      zone: 3,
   }];

   const [widgets, setWidgets] = useState(clocks);

   const setEntry = (value) => {
      value.id = Math.floor(1 + Math.random() * (100 - 1));
      clocks.push(value);
      const newData = [...clocks];
      setWidgets(newData);
   }

   const deleteEntry = (e) => {
      clocks = clocks.filter((el) => JSON.stringify(el.id) !== e.target.id);
      const newData = [...clocks];
      setWidgets(newData);
   }

   return (
   <div className="container">
      <Form setEntry={setEntry}></Form>
      <Clocks>
         {widgets.map((item) => <Clock key={item.id} item={item} deleteEntry={deleteEntry}></Clock>)}
      </Clocks>
   </div>
   )
}