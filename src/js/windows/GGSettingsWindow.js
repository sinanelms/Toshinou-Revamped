class GGSettingsWindow {
  createWindow() {
    this.GGSettingsWindow = WindowFactory.createWindow({
      width: 320,
      text: "GG Yardımcısı"
    });

    let controls = [{
        name: 'alpha',
        labelText: 'Alphaya Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.alpha = this.checked;
        }
      },
      {
        name: 'beta',
        labelText: 'Betaya Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.beta = this.checked;
        }
      },
      {
        name: 'gamma',
        labelText: 'Gammaya Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.gamma = this.checked;
        }
      },
      {
        name: 'delta',
        labelText: 'Deltaya Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.delta = this.checked;
        }
      },
      {
        name: 'epsilon',
        labelText: 'Epsilona Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.epsilon = this.checked;
        }
      },
      {
        name: 'zeta',
        labelText: 'Zetaya Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.zeta = this.checked;
        }
      },
      {
        name: 'kappa',
        labelText: 'Kappaya Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.kappa = this.checked;
        }
      },
      {
        name: 'lambda',
        labelText: 'Lambdaya Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.lambda = this.checked;
        }
      },
      {
        name: 'kronos',
        labelText: 'Kronosa Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.kronos = this.checked;
        }
      },
      {
        name: 'hades',
        labelText: 'Hadese Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.hades = this.checked;
        }
      },
      {
        name: 'kuiper',
        labelText: 'Kuipere Atla',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.kuiper = this.checked;
        }
      }
    ]

    controls.forEach((control) => {
      this[control.name] = ControlFactory.createControl(control);
    });
  }
}