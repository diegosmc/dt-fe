import { Head } from '../../components/Head'
import { PayOrder } from '../../components/OrderClosed/PayOrder'
import { OrderHeader } from '../../components/OrderHeader'

import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup' 

import { Container, Inner, Form } from './styles'

const schema = yup
  .object({
    fullName: yup.string().required('Este campo é obrigatório.!'),
    email: yup.string().email().required('O preenchimento de e-mail é obrigatório'),
    mobile: yup.string().required('Você deve informar um telefone'),
  })
  .required()

type FieldFormValues = yup.InferType<typeof schema>

export default function Payment() {
  const{
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldFormValues>({
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<FieldFormValues> = (data) => console.log(data)

  return (
    <Container>
      <Head title='Pagamento' />
      <OrderHeader />
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Informações Pessoais</h4>

          <div className='field'>
            <label htmlFor='fullName'>Nome e sobrenome</label>
            <input type='text' id='fullName' autoComplete='name' {...register('fullName')} />
            {errors.fullName && <p className='error'>{errors.fullName.message}</p>}
          </div>
          
          <div className='grouped'>

            <div className='field'>
              <label htmlFor='email'>E-mail</label>
              <input type='email' id='email' autoComplete='email' {...register('email')} />
              {errors.email && <p className='error'>{errors.email.message}</p>}            
            </div>

            <div className='field'>
              <label htmlFor='mobile'>Celular</label>
              <input type='tel' id='mobile' autoComplete='phone' {...register('mobile')} />
              {errors.mobile && <p className='error'>{errors.mobile.message}</p>}            
            </div>

            <div className='field'>
              <label htmlFor='document'>CPF</label>
              <input type='text' id='document' name='document' />            
            </div>                    
          </div>

          <h4>Endereço de entrega</h4>
          
          <div className='field'>
            <label htmlFor='street'>Endereço</label>
            <input type='text' id='street' name='street' />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='number'>Número</label>
              <input type='text' id='number' name='number' />
            </div>

            <div className='field'>
              <label htmlFor='complement'>Complemento</label>
              <input type='text' id='complement' name='complement' />
            </div>
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='neighborhood'>Bairro</label>
              <input type='text' id='neighborhood' name='neighborhood' />
            </div>

            <div className='field'>
              <label htmlFor='city'>Cidade</label>
              <input type='text' id='city' value='Pelotas' />
            </div>

            <div className='field'>
              <label htmlFor='state'>Estado</label>
              <select value='RS'>
                <option value=''>Selecione</option>
                <option value='AC'>Acre</option>
                <option value='AL'>Alagoas</option>
                <option value='AP'>Amapá</option>
                <option value='AM'>Amazonas</option>
                <option value='BA'>Bahia</option>
                <option value='CE'>Ceará</option>
                <option value='ES'>Espírito Santo</option>
                <option value='GO'>Goiás</option>
                <option value='MA'>Maranhão</option>
                <option value='MT'>Mato Grosso</option>
                <option value='MS'>Mato Grosso do Sul</option>
                <option value='MG'>Minas Gerais</option>
                <option value='PA'>Pará</option>
                <option value='PB'>Paraíba</option>
                <option value='PR'>Paraná</option>
                <option value='PE'>Pernambuco</option>
                <option value='PI'>Piauí</option>
                <option value='RJ'>Rio de Janeiro</option>
                <option value='RN'>Rio Grande do Norte</option>
                <option value='RS'>Rio Grande do Sul</option>
                <option value='RO'>Rondônia</option>
                <option value='RR'>Roraima</option>
                <option value='SC'>Santa Catarina</option>
                <option value='SP'>São Paulo</option>
                <option value='SE'>Sergipe</option>
                <option value='TO'>Tocantins</option>
                <option value='DF'>Distrito Federal</option>
              </select>

          <h4>Pagamento</h4>

          <div className='field'>
            <label htmlFor='credit-card-number'>Número do cartão</label>
            <input
              type='text'
              id='credit-card-number'
              name='credit-card-number'
              autoComplete='cc-number'
            />
          </div>

          <div className='field'>
            <label htmlFor='credit-card-holder-name'>Nome impresso</label>
            <input
              type='text'
              id='credit-card-holder-name'
              name='credit-card-holder-name'
              autoComplete='cc-name'
            />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='credit-card-expiration'>Validade (MM/AA)</label>
              <input
                type='text'
                id='credit-card-expiration'
                name='credit-card-expiration'
                autoComplete='cc-exp'
              />
            </div>

            <div className='field'>
              <label htmlFor='credit-card-code'>CVV</label>
              <input
                type='text'
                id='credit-card-code'
                name='credit-card-code'
                autoComplete='cc-csc'
              />
            </div>
          </div>
         </div>
        </div>
          <PayOrder />
        </Form>      
    </Inner>
    </Container>
  )
}