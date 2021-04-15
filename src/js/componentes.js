
import '../css/componentes.css';

export const saludar = ( nombre )=>{
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}, cómo va todo?` ;
    document.body.append(h1);
}