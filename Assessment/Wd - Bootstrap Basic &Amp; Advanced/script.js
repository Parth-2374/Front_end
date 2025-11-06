
let form = document.getElementById('guestform');
let msgbox = document.getElementById('message');

function showerror(id, text) {
  let se = document.getElementById('err-' + id);
  se.textContent = text || '';
}

function showmessage(text, type = 'success') {
  msgbox.textContent = text;
  msgbox.className = 'message ' + (type === 'error' ? 'error' : 'success');
  // hide after 3s
  setTimeout(function () { msgbox.className = 'message'; msgbox.textContent = ''; }, 3000);
}

function validate(formdata) {
  ['fullName', 'phone', 'email', 'aadhar', 'checkin', 'checkout', 'purpose'].forEach(function (s) { showerror(s, '') });

  let ok = true;
  let fullName = formdata.get('fullName').trim();
  let phone = formdata.get('phone').trim();
  let email = formdata.get('email').trim();
  let aadhar = formdata.get('aadhar').trim();
  let checkin = formdata.get('checkin').trim();
  let checkout = formdata.get('checkout').trim();
  let purpose = formdata.get('purpose').trim();

  // Full Name
  if (!fullName) { showerror('fullName', 'Full Name Is Required'); ok = false }

  // Phone Number
  if (!/^[6-9][0-9]{9}$/.test(phone)) { showerror('phone', 'Phone Number Must Be Exactly 10 Digit'); ok = false }

  //Email ID
  let Email = /^[a-z0-9._+-]+@+[a-z.]+\.[a-z]{2,3}$/
  if (!Email.test(email)) { showerror('email', 'Enter A Valid Email ID'); ok = false }

  //Aadhar Card 
  if (!/^[0-9]{12}$/.test(aadhar)) { showerror('aadhar', 'Aadhar Card Number Must Be Exactly 12 Digit'); ok = false }

  //Chek-IN And Chek-Out
  if (!checkin) { showerror('checkin', 'Check-In Date Required'); ok = false }
  if (!checkout) { showerror('checkout', 'Check-Out Date Required'); ok = false }

  if (checkin && checkout) {
    if (checkout < checkin) { showerror('checkout', 'Check-Out Must Be Same Or After Check-In'); ok = false }
  }
  //Purpose
  if (!purpose) { showerror('purpose', 'Purpose Is Required'); ok = false }

  return ok;
}


form.addEventListener('submit', function (e) {
  e.preventDefault();
  const fd = new FormData(form);

  if (!validate(fd)) {
    showmessage('Please fix errors and try again', 'error');
    return;
  }

  // build object
  const submission = {
    fullName: fd.get('fullName').trim(),
    phone: fd.get('phone').trim(),
    email: fd.get('email').trim(),
    aadhar: fd.get('aadhar').trim(),
    checkin: fd.get('checkin'),
    checkout: fd.get('checkout'),
    purpose: fd.get('purpose').trim(),
    timestamp: new Date().toISOString()
  };

  // reset form
  form.reset();
  showmessage('Guest details saved successfully.');
});

// Clear inline errors when user types
['fullName', 'phone', 'email', 'aadhar', 'checkin', 'checkout', 'purpose'].forEach(function (id) {
  const el = document.getElementById(id);
  if (el) { el.addEventListener('input', function () { showerror(id, '') }); }
});

