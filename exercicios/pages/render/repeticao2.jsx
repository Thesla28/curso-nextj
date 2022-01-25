import listaProdutos from '../../data/listaProdutos'

export default function repeticao2() {

    function renderizarLinhas(){
        return <tr>temp</tr>
        console.log(listaProdutos)
        // return listaProdutos.map(produto => {
        //     <tr key={produto.id}>
        //         <td>{produto.id}</td>
        //         <td>{produto.nome}</td>
        //         <td>{produto.preco}</td>
        //     </tr>
        // })
    }

    // return (
    //     <div>
    //         <table>
    //             <thead>
    //                 <tr>
    //                     <th>Código</th>
    //                     <th>Nome</th>
    //                     <th>Preço</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {renderizarLinhas()}
    //             </tbody>
    //         </table>
    //     </div>
    // )
}