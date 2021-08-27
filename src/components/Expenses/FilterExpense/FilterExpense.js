import classes from "./FilterExpense.module.css";

const FilterExpense = (props) => {
   const onChangeHandler = (e) => {
      props.filterByYear(e.target.value);
   };

   return (
      <div className={classes["expenses-filter"]}>
         <div className={classes["expenses-filter__control"]}>
            <label>Date</label>
            <select value={props.currentYear} onChange={onChangeHandler}>
               <option value="2022">2022</option>
               <option value="2021">2021</option>
               <option value="2020">2020</option>
               <option value="2019">2019</option>
            </select>
         </div>
      </div>
   );
};

export default FilterExpense;
