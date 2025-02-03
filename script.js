//select forms elements
const amount = document.getElementById("amount")

//input value to accept digits only
amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "")

  //transform value in cents
  value = Number(value) / 100

  amount.value = formatCurrencyBRL(value)
}

//formating to BRL currency
function formatCurrencyBRL(value) {
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return value
}