export const cartdata = (data = [], action) => {
    console.log("This is from reducer", action);
    if (action.type === "ADD_TO_CARt") return "vanshita is doing great";
    else return "abc";
}