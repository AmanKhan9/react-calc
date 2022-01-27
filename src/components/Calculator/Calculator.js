import React, { useState } from 'react'
import Display from '../Display/Display'
import Buttons from '../Buttons/Buttons'
import operations  from './operations';
import './style.css'

function Calculator(){
        const [calculation, setCalculation] = useState({
            'firstNumber': '',
            'secondNumber': '',
            'resultNumber': '',
            'operator': '',
        })
        const [display1, setDisplay1] = useState('')
        const [display2, setDisplay2] = useState('')
        const [result, setResult] = useState('')
        const [operatorClicked, setOperatorClicked] = useState('')
        const [isOperator1, setIsOperator1] = useState(false)
        const [isOperator2, setIsOperator2] = useState(true)
        const [isFirstClick, setIsFirstClick] = useState(false)
        const [isFirstCalculation, setIsFirstCalculation] = useState(false)
        
        const reinit = (num, isFirstCalculation) => {
            if(isFirstCalculation){ 
                setCalculation({
                    'firstNumber': num,
                    'secondNumber': '',
                    'operator': calculation.operator,
                })
                setDisplay1('')
                setDisplay2('')
                setResult('')
                setIsFirstClick(false)
                setOperatorClicked('')
            }else{
                setDisplay1('')
                setDisplay2('')
                setResult('')
                setIsFirstClick(false)
                setOperatorClicked('')
                setCalculation({
                    'firstNumber': '',
                    'secondNumber': '', 
                    'operator': calculation.operator,  
                })
            }
        }

        const inputOperator = (num) => {
            setIsOperator1(true)
            setIsOperator2(false)
            setOperatorClicked(num)
            calculation.operator = num
            if(isFirstClick){
                setCalculation({
                    'firstNumber': calculation.resultNumber,
                    'secondNumber': '',
                    'operator': calculation.operator,
                })
                setDisplay1(calculation.resultNumber)
                setDisplay2('')   
            }
            setIsFirstClick(true)
        }

    const inputValues = (num) => {
        if(isOperator1 === false){
        if(isFirstCalculation){
            reinit(num, true)
            setIsFirstCalculation(false)
        }
        if(num === '.'){
            calculation.firstNumber += num
            calculation.resultNumber = ''
            setDisplay1(display1 + num)
            }else if (num === 'x'){
                setCalculation({ 
                'firstNumber': calculation.firstNumber.slice(0, -1),
                'secondNumber': '',
                'operator': '',
            })
            setDisplay1(display1)   
        }else{ 
            calculation.firstNumber += num
            calculation.resultNumber = ''
            setDisplay1(display1 + num)
        }
        }else{
            if (num === '.'){
                calculation.secondNumber += num
                setDisplay2(display2 + num)
            }else if(num === 'x'){
                setCalculation({
                    'firstNumber': calculation.firstNumber,
                    'secondNumber': calculation.secondNumber.slice(0, -1),
                    'operator': calculation.operator,
                })
            }else{
                calculation.secondNumber += num
                setDisplay2(display2 + num)
            }
        }
    }

    const calculate = (num) => {
        if(num==='AC') reinit()
        else if (!isNaN(num) || num === '.' || num === 'x') inputValues(num)
        else if ((num === '/' || num === '-' ||  num === '*' || num === '+' || num === '%') & isOperator2){
            inputOperator(num)
        }
        else if(num === '='){
            if(calculation.secondNumber !== '') executeOperation()
            else setResult('Invalid operation!')
        }
    }
    
    const executeOperation = () => {
        let result = operations[calculation.operator](calculation.firstNumber, calculation.secondNumber)
        calculation.resultNumber = result
        setIsOperator1(false)
        setIsOperator2(true)
        setResult(result)
        setIsFirstCalculation(true)
    }
    
    return(
        <div className="calculator">
            <Display
                {...
                {numbers : {num1:calculation.firstNumber,num2:calculation.secondNumber},
                operator :operatorClicked,
                result :result}
                }
            />
            <Buttons calculate = {calculate} />
      </div>
    )
}

export default Calculator