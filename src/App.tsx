import React, {ChangeEvent} from 'react';
import './App.css';


function App() {

    const [data, setData] = React.useState<Array<string>>([])
    const [inputValue, setInputValue] = React.useState<string>('')
    const [filter, setFilter] = React.useState<boolean>(false)


    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.checked)
    }

    const onClickNumber = () => {
        if (typeof +inputValue === "number" && +inputValue > 0) {
            setData(['dataArray'].filter(i => i.length > +inputValue))
        }

    }
    const onClickString = () => {
        if (inputValue !== '') {
            setData(['dataArray'].filter(i => {
                return filter ? i.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) : i.includes(inputValue)
            }))
        }
    }

    return (
        <div className="App">

            <input value={inputValue} onChange={onChangeInputValue}/>
            <input type={'checkbox'} checked={filter} onChange={onChangeFilter}/>
            <button onClick={onClickNumber}>number</button>
            <button onClick={onClickString}>string</button>
            {data.map((i, id) => <div key={id}>{i}</div>)}
        </div>
    );
}

export default App;


