import React, {useState} from 'react';
import axios from 'axios';
import './Contatos.css';

const Contato = () =>{
    //dados do form
    const [dadosForm, setDadosForm] = useState({
        e_mail: '',
        mensagem: '',
        usuario: ''
    });

    //modificações de estado de envio do form
    const [estadoAplic, setEstadoAplic] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault(); // Evita o recarregamento da página

        try{
            //conexão com o back-end
            await axios.post('http://localhost:3000/api/mensagem', dadosForm);
            setEstadoAplic('Seu texto de satisfação foi enviado com sucesso!');

            //Atualização dos dados após o envio do form
            setDadosForm({e_mail: '', mensagem: '', usuario: ''});
        }catch(error){
            console.error('Erro ao enviar a mensagem:', error);
            setEstadoAplic('Erro ao enviar texto de satisfação. Tente novamente.');
        }
    }

    //Atualiza as modificações feitas nos inputs antes de enviar a aplicação
    const handleChange = (a) =>{
        setDadosForm({
            ...dadosForm, //Pega o que ja estava feito para não ser perdido na atualização
            [a.target.name]:a.target.value //Adiciona o texto atualizado
        });
    }

    return(

        <section className='secao_contato'>
            <div className='box_all'>
                <div className='text_contato'>
                    <h1>Contato</h1>
                    <p>Esteja a votade para nos contar um pouco de sua história, ficaremos felizes em lê-la. Você pode entrar em contato conosco por meio do contato logo abaixo ou enviar o formulario a seguir.</p>
                </div>
                
                <div className='contato'>
                    <p><strong>Endereço:</strong> 738 Av. Beira Mar, Fortaleza, CE</p>
                    <p><strong>Telefone:</strong> (85) 8946-0857</p>
                    <p><strong>Email:</strong> contato@milaneseMaison.com</p>
                </div>

                <form className='form_contato' onSubmit={handleSubmit}>
                    <div className='container_form'>
                        <label htmlFor="name">Nome:</label>
                        <input 
                            type="text" 
                            id='name' 
                            name='usuario'
                            value= {dadosForm.usuario} 
                            onChange={handleChange}
                            placeholder='Digite seu nome' 
                            required
                        />
                    </div>

                    <div className='container_form'>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id='email' 
                            name='e_mail' 
                            value= {dadosForm.e_mail} 
                            onChange={handleChange}
                            placeholder='Digite seu e-mail' 
                            required
                        />
                    </div>

                    <div className='container_form'>
                        <label htmlFor="mensage">Mensagem:</label>
                        <textarea 
                            name="mensagem" 
                            id="mensage" 
                            rows={5} 
                            value= {dadosForm.mensagem} 
                            onChange={handleChange}
                            required 
                            placeholder='Nos dê seu feedback'
                        >
                        </textarea>
                    </div>
                    <button type='submit'>Enviar</button>
                </form>

            {estadoAplic && <p>{estadoAplic}</p>}
            </div>
        </section>
    );

}
export default Contato;