const banktransfer = async (event) => {
    event.preventDefault();
  
    const account_option = document.getElementById("account-user")
    const account_to_id= account_option[account_option.selectedIndex].id
    const amount = document.querySelector('#transfer-amount').value.trim();
    const user_account = document.getElementById("current_user_account")
    const account_from_id = user_account[user_account.selectedIndex].id
    console.log(user_account)


    if (account_to_id && amount ) {
      const response = await fetch('/api/transaction', {
        method: 'POST',
        body: JSON.stringify({ account_to_id, amount, account_from_id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  
  document
    .querySelector('.transfer-form')
    .addEventListener('submit', banktransfer);
  