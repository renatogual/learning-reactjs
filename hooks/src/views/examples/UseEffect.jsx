import React, {useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
    if(n < 0) return -1
    if(n == 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [numParOuImpar, setNumParOuImpar] = useState(1)

    useEffect(() => {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(() => {
        if(fatorial > 1000000) {
            document.title = 'Eita !!!'
        }
    }, [fatorial])

    useEffect(() => {
        setNumParOuImpar(number % 2 == 0 ? 'Par' : 'Ímpar')
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial de {number}! = </span>
                    <span className="text red">{fatorial < 0 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                 <div>
                    <span className="text">O número {number} é:  </span>
                    <span className="text red">{numParOuImpar}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
