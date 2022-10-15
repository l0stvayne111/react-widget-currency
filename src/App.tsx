import React from 'react';
import './css/index.scss';
import Card from "./components/Card";
import {api} from "./api";
import {getValue} from "./helpers";

const App: React.FC<{ symbol: string }> = ({symbol}) => {

    const [value, setValue] = React.useState(0);
    const [isFetch, setIsFetch] = React.useState(false)

    React.useEffect(() => {
        async function load() {
            try{
                const res = await api.getRates().then(res => res.rates);
                setValue(getValue(res, symbol.toUpperCase(), 'RUB'));
                setIsFetch(true)
            } catch (e) {
                console.log(e)
                setIsFetch(false)
            }
        }
        load();
    }, [symbol]);

    return (
        <>
            {isFetch && <Card label={symbol} value={value}/>}
        </>
    );
}

export default App;
