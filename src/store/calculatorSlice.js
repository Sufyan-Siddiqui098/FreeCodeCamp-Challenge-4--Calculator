import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
    name: 'calculate',
    initialState: {
        number: "0",
        display: "0",
        decimal: false,
        calculation: '',
        operator: '',
        result: false
    },
    reducers:{
        //HANDLES NUMBERS ONLY
        handleNumber : (state, action)=>{
            if(state.operator && !state.decimal){
                state.calculation += state.operator;
                state.operator = '';  // Reset the operator
            }
            if(state.result){
                state.calculation = '';
                state.display = '0';
                state.result = false;
            }
            if((action.payload === 0 || action.payload ==='0') && (state.number==='0' || state.number===0)){
                console.log("zero is present")
                state.number = 0 ;
                state.display = 0;
            }
            else if((action.payload !== 0 || action.payload !=='0') && (state.number==='0' || state.number===0)){
                console.log("action", action.payload)
                state.number = action.payload;
                // state.display = state.number;
            }
            else{
                console.log("Inside Else");
                state.number += action.payload;
            }
            state.display = state.number;

            //If the display is already 0 and there is no decimal then it shouldn't let the zero be enter in the value;
            if(state.display!=='0' && action.payload!=='0'){
                state.calculation += action.payload;
                // state.calculation = state.number;
            } 
            //If the decimal is present then allow zero to be enter in calculation value;
            else if(state.decimal) {
                state.calculation +=action.payload
            }
            console.log("number ", state.number)
            
        },
        //DECIMAL/POINT
        handleDecimal : (state, action) => {
            //If there is result then it should reset the whole calculator to enter new value to be calculated.
            if(state.result){
                state.calculation = '';
                state.display = '0';
                state.result = false;
            }
            if(!state.decimal){
                console.log("Decimal running")
                if(state.number==='0'){
                    state.number = action.payload;
                }
                else{
                    state.number += action.payload;
                }
                if(state.operator){
                    state.calculation += state.operator;
                    state.operator =''; // To reset the operator
                }
                state.display = state.number;
                state.calculation += action.payload;
                state.decimal = true;
            }

        },

        //OPERATORS
        handleOperator: (state, action) => {
            state.display = action.payload;
            state.operator = action.payload;
            state.decimal = false;
            state.number = "0";
            console.log(state.operator)
        },

        //For RESULT VALUE
        handleResult : (state, action) => {
            //eslint-disable-next-line
            let r = eval(state.calculation)
            state.number = '0';
            state.result = true;
            state.decimal = false;
            state.display = r;
            state.calculation = r; 

        },
        
        //CLEAR THE SCREEN
        handleClear : (state, action) => {
            state.number = '0';
            state.display = '0';
            state.decimal = false;
            state.calculation = ''
        }
    }
})

export const {handleNumber, handleClear, handleDecimal, handleOperator, handleResult} = calculatorSlice.actions;
export default calculatorSlice.reducer;