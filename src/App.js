import React, {useState} from 'react'
import './App.css'

const App = () => {
    // FIELD
    const [field1, setField1] = useState('')
    const [field2, setField2] = useState('')
    const [field3, setField3] = useState('')

    // CHECKBOX
    const [checkbox1, setCheckbox1] = useState(false)
    const [checkbox2, setCheckbox2] = useState(false)
    const [checkbox3, setCheckbox3] = useState(false)

    // RESULT
    const [result, setResult] = useState('0')

    // FUNCTION
    const handleResult = (evt) => {
        let temp = ''
        if(checkbox1) temp += field1 + ' '
        if(checkbox2) temp += field2 + ' '
        if(checkbox3) temp += field3 + ' '

        temp = temp.trim().replaceAll(' ', evt)

        setResult(eval(temp) ? eval(temp) : 0)
    }

    return (
        <>
            <div className="container">
                <h1>Muchlas Syahlanisyiam</h1>
                <form>
                    <div className="fieldCheckbox">
                        <input onChange={(e) => setField1(e.target.value)} type="text" value={field1} />
                        <input onClick={(e) => setCheckbox1(!checkbox1)} type="checkbox" value={checkbox1} />
                    </div>
                    <div className="fieldCheckbox">
                        <input onChange={(e) => setField2(e.target.value)} type="text" value={field2} />
                        <input onClick={(e) => setCheckbox2(!checkbox2)} type="checkbox" value={checkbox2} />
                    </div>
                    <div className="fieldCheckbox">
                        <input onChange={(e) => setField3(e.target.value)} type="text" value={field3} />
                        <input onClick={(e) => setCheckbox3(!checkbox3)} type="checkbox" value={checkbox3} />
                    </div>
                </form>

                <div className="operator">
                    <button name="+" onClick={(e) => handleResult(e.target.name)}>+</button>
                    <button name="-" onClick={(e) => handleResult(e.target.name)}>-</button>
                    <button name="*" onClick={(e) => handleResult(e.target.name)}>*</button>
                    <button name="/" onClick={(e) => handleResult(e.target.name)}>/</button>
                </div>

                <div className="result">
                    <div>Hasil :</div>
                    <div>{result}</div>
                </div>
            </div>
        </>
    )
}

export default App