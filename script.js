//select forms elements
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

//select list elements
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

    //creating li img icon
    const expenseIcon = document.createElement("img")
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
    expenseIcon.setAttribute("alt", newExpense.category_name)

    //creating expense info
    const expenseInfo = document.createElement("div")
    expenseInfo.classList.add("expense-info")

    //creating expense name
    const expenseName = document.createElement("strong")
    expenseName.textContent = newExpense.expense
    //creating expense category
    const expenseCategory = document.createElement("span")
    expenseCategory.textContent = newExpense.category_name
    //adding infos into expense info
    expenseInfo.append(expenseName)
    expenseInfo.append(expenseCategory)

    //creating expense value
    const expenseAmount = document.createElement("span")
    expenseAmount.classList.add("expense-amount")
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$", "")}`

    //creating delete expense icon
    const expenseDeleteIcon = document.createElement("img")
    expenseDeleteIcon.classList.add("remove-icon")
    expenseDeleteIcon.setAttribute("src", "img/remove.svg")

    //adds infos into item
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, expenseDeleteIcon)


    list_expenses.append(expenseItem)






  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas")
    console.log(error)
  }
}