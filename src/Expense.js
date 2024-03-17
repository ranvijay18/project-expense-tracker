import { useEffect, useState } from "react";
import "./Expense.css";
import axios from "axios";

function Expense() {


    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [hasNextPage , setHasNextPage] = useState(false);
    const [hasPreviousPage, setHasPreviousPage] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [item, setItem] = useState(5);


    async function getExpenses(){
        const res = await axios.get(`http://localhost:8000/get-expenses/${page}/${item}`);
        setData(res.data.details);
        setHasPreviousPage(res.data.hasPreviousPage);
        setHasNextPage(res.data.hasNextPage);
        setCurrentPage(res.data.currentPage);
        console.log(currentPage);
       }
  
       useEffect(() => {
        getExpenses();
       }, [page, item]);

       const handleChange = (e) => {
        console.log(e.target.value)
        setItem(e.target.value);
        console.log(item);
      }
    





  return (
    <>
    <div>
        <table id="details">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Description</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((details) => (
              <tr className="details-data" id={details.id}>
                <td>{details.amount}</td>
                <td>{details.description}</td>
                <td>{details.category}</td>
                <td>
                  <button id="edit">Edit</button>
                  <button id="delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> 
     <div className="bottom">
     <div className="pagination">
        {
            hasPreviousPage ? (
                <button className="prev" onClick={() => setPage(+currentPage-1)}>{+currentPage-1}</button>
            ):(<p></p>)
        }
        <button className="curr">{currentPage}</button>
        {
            hasNextPage ? (
                <button className="next" onClick={() => setPage(+currentPage+1)}>{+currentPage+1}</button>
            ):(<p></p>)
        }
     </div>

     <div className="select-item">

        <form className="page-item">
            <label>Row per page:</label>
            <select name="items"className="select-page" onChange={handleChange}>
                <option>5</option>
                <option>10</option>
                <option>15</option>
            </select>
        </form>
      </div> 
     </div>
     
      </>
  );
}

export default Expense;