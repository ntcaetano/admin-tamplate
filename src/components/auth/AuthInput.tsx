interface AuthInputProsps {
    label: string
    valor: any
    obrigatorio?: boolean
    tipo: 'text' | 'email' | 'password'
    valorMudou: (novoValor: any) => void
}


export default function AuthInput(props: AuthInputProsps) {
    return(
        <div className="flex flex-col">
            <label>{props.label}</label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                required={props.obrigatorio}
             />
        </div>
    )
}