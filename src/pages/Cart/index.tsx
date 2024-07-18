import { Fragment } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from '@phosphor-icons/react';

import { coffees } from '../../service/data.json';
import { useCart } from '../../hooks/useCart';

import {
  Container,
  InfoContainer,
  AddressConatiuner,
  AddressHeading,
  AddressForm,
  PaymentContainer,
  PaymentHeading,
  PaymentOptionsContainer,
  PaymentErrorMessage,
  CartTotalCard,
  Coffee,
  CoffeInfo,
  CheckoutButton,
  CartTotalInfo,
} from './styles';
import { TextInput } from '../../components/Form/InputText';
import { Radio } from '../../components/Form/Radio';
import { QuantityInput } from '../../components/Form/QuantityInput';

type FormInputsCart = {
  cep: number
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  paymentOption: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe seu CEP' }),
  street: z.string().min(1, 'Informe sua Rua'),
  number: z.string().min(1, 'Informe seu número'),
  complement: z.string(),
  neighborhood: z.string().min(1, 'Informe seu Bairro'),
  city: z.string().min(1, 'Informe sua Cidade'),
  state: z.string().min(1, 'Informe seu Estado'),
  paymentOption: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe uma opção de pagamento',
  })
})

export type OrderInfo = z.infer<typeof newOrder>;

const shippingPrice = 3.5;

export function Cart() {
  const {
    incrementItem,
    decrementItem,
    removeItem,
    checkoutCart,
    cart
  } = useCart();

  const coffeesInCart = cart.map((item) => {
    const coffeeCartInfo = coffees.find((coffee) => {
      return coffee.id === item.id
    })

    if (!coffeeCartInfo) {
      throw new Error('Café Inválido')
    }

    return {
      ...coffeeCartInfo,
      quantity: item.quantity,
    }
  })

  const totalPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputsCart>({
    resolver: zodResolver(newOrder),
  })

  const selectedPaymentOption = watch('paymentOption');

  function handleIncrementItem(itemId: string) {
    incrementItem(itemId)
  }

  function handleDecrementItem(itemId: string) {
    decrementItem(itemId);
  }

  function handleRemoveItem(itemId: string) {
    removeItem(itemId)
  }

  const handleSubmitOrderCheckout: SubmitHandler<FormInputsCart> = (data) => {
    console.log('teste', data)

    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um ítem no carrinho')
    }

    checkoutCart(data)
  }
  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form id='order' onSubmit={handleSubmit(handleSubmitOrderCheckout)}>
          <AddressConatiuner>
            <AddressHeading>
              <MapPin size={22} />

              <div>
                <span>Endereço de Entrega</span>

                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </AddressHeading>

            <AddressForm>
              <TextInput
                placeholder='CEP'
                type='number'
                containerProps={{ style: { gridArea: 'cep' } }}
                error={errors.cep}
                {...register('cep', { valueAsNumber: true })}
              />

              <TextInput
                placeholder='Rua'
                containerProps={{ style: { gridArea: 'street' } }}
                error={errors.street}
                {...register('street')}
              />

              <TextInput
                placeholder='Número'
                containerProps={{ style: { gridArea: 'number' } }}
                error={errors.number}
                {...register('number')}
              />

              <TextInput
                placeholder='Complemento'
                optional
                containerProps={{ style: { gridArea: 'complement' } }}
                error={errors.complement}
                {...register('complement')}
              />

              <TextInput
                placeholder='Bairro'
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                error={errors.neighborhood}
                {...register('neighborhood')}
              />
              <TextInput
                placeholder='Cidade'
                containerProps={{ style: { gridArea: 'city' } }}
                error={errors.city}
                {...register('city')}
              />
              <TextInput
                placeholder='UF'
                containerProps={{ style: { gridArea: 'state' } }}
                error={errors.state}
                {...register('state')}
              />
            </AddressForm>

          </AddressConatiuner>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />

              <div>
                <span>Pagamento</span>

                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </PaymentHeading>

            <PaymentOptionsContainer>
              <div>
                <Radio
                  isSelected={selectedPaymentOption === 'credit'}
                  value={'credit'}
                  {...register('paymentOption')}
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentOption === 'debit'}
                  value={'debit'}
                  {...register('paymentOption')}
                >
                  <Bank size={16} />
                  <span>cartão de débito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentOption === 'cash'}
                  value={'cash'}
                  {...register('paymentOption')}
                >
                  <Money size={16} />
                  <span>dinheiro</span>
                </Radio>
              </div>

              {errors.paymentOption ? (
                <PaymentErrorMessage>
                  {errors.paymentOption.message}
                </PaymentErrorMessage>
              ) : null}
            </PaymentOptionsContainer>
          </PaymentContainer>
        </form>
      </InfoContainer>

      <InfoContainer>
        <h2>Cafés selecionados</h2>

        <CartTotalCard>
          {coffeesInCart.map((coffee) => (
            <Fragment key={coffee.id}>
              <Coffee>
                <div>
                  <img src={coffee.img} alt={coffee.title} />

                  <div>
                    <span>{coffee.title}</span>

                    <CoffeInfo>
                      <QuantityInput
                        quantity={coffee.quantity}
                        incrementQuantityItem={() => handleIncrementItem(coffee.id)}
                        decrementQuantityItem={() => handleDecrementItem(coffee.id)}
                      />

                      <button onClick={() => handleRemoveItem(coffee.id)}>
                        <Trash />
                        <span>Remover</span>
                      </button>
                    </CoffeInfo>
                  </div>
                </div>

              </Coffee>
              <span />
            </Fragment>
          ))}

          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency'
                }).format(totalPrice)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </div>

            <div>
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalPrice + shippingPrice)}
              </span>
            </div>
          </CartTotalInfo>


          <CheckoutButton type='submit' form='order'>
            Confirmar Pedido
          </CheckoutButton>

        </CartTotalCard>
      </InfoContainer>
    </Container>
  )
}