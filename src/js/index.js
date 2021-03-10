const Navigation = {
  lastSection: null,
  sections: ['sms-send', 'url-short', 'history'],
  navigate(option) {
    this.sections.map(section => document.getElementById(section).classList.add('hidden'));

    document.getElementById(option).classList.remove('hidden');
    this.lastSection = option;
  },
  showAll() {
    this.sections.map(section => document.getElementById(section).classList.remove('hidden'));
  }
}


const Utils = {
  formatPhone(phone) {
    let phoneDigits = phone.replace(/\D/g, '');
    const phoneRegex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');
    return phoneRegex.test(phoneDigits);
  }
}

const FormSMS = {
  phone: document.querySelector('input#phone'),
  message: document.querySelector('textarea#message'),
  getValues() {
    return {
      phone: this.phone.value,
      message: this.message.value
    }
  },
  clearFields() {
    this.message.value = "";
    this.phone.value = "";
  },
  validateFields() {
    const { phone, message } = FormSMS.getValues();

    console.log(Utils.formatPhone(phone));
  },
  submit(event) {
    event.preventDefault();
    try {
      FormSMS.validateFields();
      FormSMS.clearFields();
    } catch (error) {
      alert(error.message);
    }
  }
}
