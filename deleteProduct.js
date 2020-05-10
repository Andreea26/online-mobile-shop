// //functia de sterfere telefon
function deletePhone(id) {
  const phones = APP.getProducts();
  for (var i = 0; i < phones.length; i++) {
    if(phones[i].id == id) {
      phones.splice(i, 1);
      break;
    }
  }

  APP.addProducts(phones);
  APP.renderProductList(phones);
  deleteEvent();
}

function deleteEvent() {
  const deleteButtons = document.getElementsByClassName('delete');
  for(var b = 0; b < deleteButtons.length; b++) {
    let id = deleteButtons[b].getAttribute('id');
    deleteButtons[b].addEventListener('click', function() {
      deletePhone(id);
    })
  }
}

window.addEventListener('load', deleteEvent);
