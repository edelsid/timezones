import { useState } from "react"

export function Form({ setEntry }) {
   const [data, setData] = useState({
      name: '',
      zone: '',
   });

   const { name, zone } = data;

   const inputChange = (e) => {
      const {name, value} = e.target;
      setData ((prevForm) => ({
         ...prevForm,
         name: name === 'name' ? value : prevForm.name,
         zone: name === 'zone' ? value : prevForm.zone,
      }));
   };

   const submitChange = (e) => {
      e.preventDefault();
      setEntry(data);
   }

   return (
   <form className="panel inputForm" onSubmit={submitChange}>
      <div className="wrapper nameInput">
         <label htmlFor="name">Название</label>
         <input 
         className="field"
         id="name"
         name="name"
         value={name}
         onChange={inputChange}>
         </input>
      </div>
      <div className="wrapper zoneInput">
         <label htmlFor="zone">Временная зона</label>

         <select
         className="field"
         id="zone"
         value={zone}
         name="zone"
         onChange={inputChange}>
            <option defaultValue value="3">Moscow</option>
            <option value="-5">New York</option>
            <option value="0">London</option>
            <option value="9">Tokyo</option>
         </select>
      </div>
      <button className="btn" type="submit">Добавить</button>
   </form>
   )
}