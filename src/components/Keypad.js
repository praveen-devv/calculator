import React, { useState } from 'react'
import Display from './Display'
import './Keypad.css'

const Keypad = () => {

    const [result, setResult] = useState('')

    document.addEventListener('keydown',(e)=>{
        console.log(e);
        let key=e.key;
        if(isFinite(key)){
            setResult(result+key);
        }
        if(key==='+' || key==='-' || key==='*' || key==='/' || key==='%' || key==='.'){
            setResult(result+key);
        }
        if(e.keyCode===8){
            backspace();
        }
        if(key==='=' || key==='Enter'){
            calculate();
        }
    })

    const setValue = (value) =>{
        // console.log(value);
        if(value === '='){
            calculate();
        }
        else if(value === 'ac'){
            reset();
        }
        else if(value === 'bs'){
            backspace();
        }
        else if(value=== 'pm'){
            if(result!==''){
                setResult((-1 * parseFloat(result)).toString());
            }
        }
        else if(value === '.'){
            if(result.includes('.')){
                return;
            }
            else{
                setResult(result+value);
            }
        }
        else{
            setResult(result+value);
        }
    }

    const calculate = () =>{
        let checkresult='';
        checkresult = result;
        if(checkresult === '.'){
            return;
        }
        setResult((eval(checkresult) || "") + "")

    }

    const backspace = () =>{
        if(result === ''){
            return
        }
        setResult(result.slice(0,-1));
    }

    const reset = () =>{
        setResult('');
    }

    return (
        <div className="keypad" >
            <Display result={result}/>
            <button value="ac" onClick={e => setValue(e.target.value)} className="opp">AC</button>
            <button value="pm" onClick={e => setValue(e.target.value)} className="opp">+/-</button>
            <button value="bs" onClick={e => setValue(e.target.value)} className="opp"><i onClick={() => console.log('bs')} className="fas fa-backspace"></i></button>
            <button value="/" onClick={e => setValue(e.target.value)} className="opp">÷</button>
            <button value="7" onClick={e => setValue(e.target.value)}>7</button>
            <button value="8" onClick={e => setValue(e.target.value)}>8</button>
            <button value="9" onClick={e => setValue(e.target.value)}>9</button>
            <button value="*" onClick={e => setValue(e.target.value)} className="opp">×</button>
            <button value="4" onClick={e => setValue(e.target.value)}>4</button>
            <button value="5" onClick={e => setValue(e.target.value)}>5</button>
            <button value="6" onClick={e => setValue(e.target.value)}>6</button>
            <button value="+" onClick={e => setValue(e.target.value)} className="opp">+</button>
            <button value="1" onClick={e => setValue(e.target.value)}>1</button>
            <button value="2" onClick={e => setValue(e.target.value)}>2</button>
            <button value="3" onClick={e => setValue(e.target.value)}>3</button>
            <button value="-" onClick={e => setValue(e.target.value)} className="opp">–</button>
            <button value="%" onClick={e => setValue(e.target.value)}>%</button>
            <button value="0" onClick={e => setValue(e.target.value)}>0</button>
            <button value="." onClick={e => setValue(e.target.value)}>.</button>
            <button value="=" onClick={e => setValue(e.target.value)} className="result">=</button>
        </div>
    )
}

export default Keypad
