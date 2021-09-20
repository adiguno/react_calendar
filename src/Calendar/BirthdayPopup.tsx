import React from "react";

export const Search = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);
  return (
    <div>
      <input type="submit" value="Search" onClick={onClick} />
      {showResults ? <Results /> : null}
    </div>
  );
};

const Results = () => (
  <div id="results" className="search-results">
    Some Results
  </div>
);

// ReactDOM.render(<Search />, document.querySelector(".BirthdayPopup"));

// export class BirthdayPopup2 extends React.Component<{}, {}> {
//   constructor() {
//     super({});
//     this.state = {
//       startDate: new Date(),
//     };
//     // this.handleChange = this.handleChange.bind(this);
//   }

//   // private handleChange(date: any) {
//   //   console.log("date is here!", date);
//   //   this.setState({
//   //     startDate: date,
//   //   });
//   // }

//   // [search:string, setSearch:(search: string)=> void] = React: any.useState("");

//   // handleChange = (e: { target: { value: string; }; }) => {
//   //   setSearch(e.target.value);
//   // };

//   render() {
//     let birthday = "04-25-1996";
//     let birthDate = new Date(birthday);
//     console.log(`birthdate = ${birthDate}`);
//     const [search, setSearch]: [string, (search: string) => void] =
//       React.useState("");

//     const handleChange = (e: { target: { value: string } }) => {
//       setSearch(e.target.value);
//     };
//     return (
//       <div>
//         <input type="text" placeholder="mm-dd-yyy" onChange={handleChange} />
//         <button type="submit">Submit</button>
//       </div>
//     );
//   }
// }
