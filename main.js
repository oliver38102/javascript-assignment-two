/*
  The Goal:
  Build a To Do list application that allows you
  to add a new entry, edit an existing entry, and
  remove an existing entry.
 */

// Step 1 - Select and store the tbody HTML Element.
// INSIGHT: We'll be storing the item entires in the
// tbody. Storing this HTMLElement will give us better
// access to add new items.
var tbody = document.querySelector('tbody')


// Step 2 - Select and store the item template HTML Element.
// INSIGHT: HTML templates are handy for keeping your
// HTML out of your JavaScript. This makes portability easier.
var template = document.querySelector('#itemTemplate')


// Step 3 - Select and store the following HTML Elements:
// INSIGHT: This form will give the user the ability to
// provide information about a new to do item.
// Step 3a - The Item Name field
 var itemName = document.querySelector('[name="itemName"]')

// Step 3b - The Due Date field
var dueDate = document.querySelector('[name="dueDate"]')

// Step 3c - The 'Create New Item' button for adding a new item
// INSIGHT: We'll listen to the click event on this
// button. That should tell us the user is ready to
// add the information to a new item.

var createItemButton = document.getElementById('addNewItem')

// Step 4 - Add a click event listener to the HTML Element
// you stored in Step 3c (should've been the 'Create New Item')
// button.
createItemButton.addEventListener("click", function(){
  // Step 4a - Check if item name is blank
  if(document.forms["itemName"].value.length == 0){
    // Step 4b - Alert the user they need to enter a name
    alert("Enter a name!")

    // Step 4c - Return false to exit the event listener
    return false;
  }
  // Step 4d - Uncomment the next line to store the template content:
 let content = itemTemplate.content;

  // Step 4e - Uncomment the next line to import the template content
  // into a new node:
  let newItemRow = document.importNode(content, true);

  // Step 4f - Using DOM walking, access the item entry cell
  // and store the current item name value

  var itemValue = document.forms["itemName"].value

  // Step 4f - Using DOM walking, access the item due date cell
  // and store the current due date value

  var dueDateValue = document.forms["dueDate"].value

  // Step 4g - Using DOM walking, access the item delete button
  // and make the onclick property equal to a function definition
  // named removeItem
  var itemDelete = document.querySelector(".itemDelete")
  itemDelete.setAttribute('onclick','removeItem()')

  // Step 4h- Using DOM walking, access the item edit button
  // and make the onclick property equal to a function definition
  // named editItem
  var editItem = document.querySelector("item-delete")
  editItem.setAttribute('onclick','editItem()')

  // Step 4i - Reset the item name field value to nothing
  var form = document.querySelector('.newItemForm')
  form.reset()
  // Step 4j - Reset the due date field value to nothing
  //both fields reset

  // Step 4k - Prepend the new item row to the to do items list
  // INSIGHT: We're prepending as we want new items to go to the
  // top. If you want them to be in reverse, then you will need
  // to append them instead.

  var row = tbody.insertRow();

  var td1 = document.createElement('td')
  var td2 = document.createElement('td')
  var td3 = document.createElement('td')

  row.appendChild(td1)
  row.appendChild(td2)
  row.appendChild(td3)

  td1.textContent = `${itemValue}`
  td2.textContent = `${dueDateValue}`
  td3.textContent = ``
})


// Step 5 - Create a new function called 'removeItem'. You will need
// to capture the event in the parameter.
function removeItem(event){
  // Step 5a - Access the closest parent tr HTML element
  // and remove it
  // INSIGHT: .closest() is a handy method that will move up the DOM
  // tree and attempt to find the closest ancestor that matches the
  // passed selector.

  var tbody = document.querySelector('tbody')

  var firstTr = tbody.closest('tr')

  firstTr.remove()
}
// Step 6 - Create a new function called 'editItem'. You will need
// to capture the event in the parameter.
function editItem(event){
  // Step 6a - Using DOM walking:
  // First find the closest tr tag.
  // Next, find an item entry that is a child of the tr tag.
  // INSIGHT: DOM walking is the act of moving up and down through
  // ancestors and children of the DOM. We can use methods like
  // .closest() and .querySelector() to do this efficiently.
  // Store the result in a variable
  var tbody = document.querySelector('tr :first-of-type')

  var firstTd = tbody.closest('td')

  // Step 6b - Using the .setAttribute() method, set the attribute
  // 'contenteditable' to true
  // INSIGHT: Content Editable is an attribute introduced in HTML 5
  // that allows regular non-field based HTML elements to have their
  // text edited inline. This is a convenient feature that is utilized
  // by many online WYSIWYG editors like TinyMCE and CKEditor.

  firstTd.setAttribute("contenteditable", true)

  // Step 6c - Trigger focus on the element
  firstTd.focus()

  // Step 6d - Create an eventlistener on the blur event
  firstTd.addEventListener("blur", function(){
    // Step 6e - Remove the attribute 'contenteditable'
    // INSIGHT: .addAttribute() and .removeAttribute() add
    // and remove attributes applied to an HTML Element.
    firstTd.setAttribute("contenteditable", false)

  })
}




/*
  Step 7 - TAKE IT FURTHER
 */
// Step 7a - Using CSS you learned in your first semester
// style the To Do list to make it nicer than the default
// Bootstrap stylings.

// Step 7b- Hide the 'Create New Item' form.

// Step 7c - Add a button that toggle the 'Create New Item's'
// form visibility.

// Step 7d - Validate the date and alert the user if it is empty.

// Step 7e - Create a way for the user to edit the date:
// INSIGHT: This will take some thought but will demonstrate
// your understanding of JavaScript.

// BONUS: Use prototyping, objects, storage solutions, frameworks,
// and/or date plugins to demonstrate your knowledge and outside
// learning.
