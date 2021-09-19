// import React from "react";
// import CSS from "csstype";

// // type WeekProps = {
// //   index: number;
// //   past: boolean;
// // };

// export class BirthdayPopup extends React.Component<{}, {}> {
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

//     // const { startDate } = this.state;
//     // return (
//     //   <DatePicker
//     //     dateFormat="dd/MM/yyyy"
//     //     selected={startDate}
//     //     onChange={this.handleChange}
//     //   />
//     // );
//   }

//   style: CSS.Properties = {
//     cursor: "pointer",
//     marginTop: "2.5px",
//     marginBottom: "2.5px",
//     marginLeft: "auto",
//     marginRight: "auto",
//     height: "20px",
//     width: "20px",
//     padding: "1px",
//     backgroundColor: "rgba(77, 138, 235, 0.85)",
//     borderRadius: "5px",
//   };
//   pastStyle: CSS.Properties = {
//     cursor: "pointer",
//     marginTop: "2.5px",
//     marginBottom: "2.5px",
//     marginLeft: "auto",
//     marginRight: "auto",
//     height: "20px",
//     width: "20px",
//     padding: "1px",
//     backgroundColor: "rgba(90, 3, 252, 0.85)",
//     borderRadius: "5px",
//   };
// }
