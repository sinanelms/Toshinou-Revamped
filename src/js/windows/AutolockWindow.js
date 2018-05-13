class AutolockWindow {
  createWindow() {
    this.autolockWindow = WindowFactory.createWindow({
      width: 320,
      text: "Oto Saldırı"
    });

    let options = [{
        name: 'lockNpcs',
        labelText: 'NPClere Kilitlen (tuş: x)',
        appendTo: this.autolockWindow,
        event: function () {
          window.settings.lockNpcs = this.checked;
        }
      },
      {
        name: 'lockPlayers',
        labelText: 'Kullanıcılara Kilitlen (tuş: z)',
        appendTo: this.autolockWindow,
        event: function () {
          window.settings.lockPlayers = this.checked;
        }
      },
      {
        name: 'autoAttack',
        labelText: 'Kilitli Hedefe Saldır',
        appendTo: this.autolockWindow,
        event: function () {
          window.settings.autoAttack = this.checked;
        }
      },
    ];

    options.forEach((option) => {
      this[option.name] = ControlFactory.checkbox(option);
    });

  }
}