//select forms elements
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")
const list_expenses = document.querySelector("ul")


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

//capture form submit event 
form.onsubmit = (event) => {
  event.preventDefault()

  //new expense object
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  }

  addExpense(newExpense)
}

function addExpense(newExpense) {
  try {

    //li creation
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")



  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas")
    console.log(error)
  }
}