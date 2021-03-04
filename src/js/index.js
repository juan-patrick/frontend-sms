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