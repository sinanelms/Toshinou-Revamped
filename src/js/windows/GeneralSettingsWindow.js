class GeneralSettingsWindow {
  createWindow() {
    this.botSettingsWindow = WindowFactory.createWindow({
      width: 320,
      text: "Genel"
    });

    let controls = [{
        name: 'palladium',
        labelText: 'Palladium Topla',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.palladium = this.checked;
        }
      },
      /*{
        name: 'save',
        labelText: 'Refresh',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.refresh = this.checked;
        }
      },*/
      {
        name: 'moveRandomly',
        labelText: 'Rastgele dolaş',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.moveRandomly = this.checked;
        }
      },
      {
        name: 'npcKiller',
        labelText: 'NPC kes',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.killNpcs = this.checked;
        }
      },
      {
        name: 'fleeFromEnemy',
        labelText: 'Düşmandan kaç',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.fleeFromEnemy = this.checked;
        }
      },
      {
        name: 'avoidAttackedNpcs',
        labelText: 'Saldurılan NPClerden kaçın<br>(PET ile kullanmayın)',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.avoidAttackedNpcs = this.checked;
        }
      },
      {
        name: 'npcCircle',
        labelText: 'Daire çiz',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.circleNpc = this.checked;
        }
      },
      {
        name: 'npcCircleRadius',
        labelText: 'Dairenin yarıçapı <span> (500px)</span>',
        type: 'range',
        appendTo: this.botSettingsWindow,
        labelBefore: true,
        attrs: {
          min: 1,
          max: 800,
          step: 1,
          value: 500,
        },
        event: function (ev) {
          window.settings.npcCircleRadius = this.value;
          $('span:last-child', this.label).text(' (' + this.value + 'px)');
        }
      },
      {
        name: 'dontCircleWhenHpBelow25Percent',
        labelText: " HP < 25% ise daire çizme ",
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.dontCircleWhenHpBelow25Percent = this.checked;
        }
      },
      {
        name: 'repairWhenHpIsLowerThanPercent',
        labelText: ' HP olduğundan tamir ol < <span> (10%)</span>',
        type: 'range',
        appendTo: this.botSettingsWindow,
        labelBefore: true,
        attrs: {
          min: 0,
          max: 100,
          step: 1,
          value: 10,
        },
        event: function (ev) {
          window.settings.repairWhenHpIsLowerThanPercent = this.value;
          $('span:last-child', this.label).text(' (' + this.value + '%)');
        }
      },
      {
        name: 'reviveAtGate',
        labelText: 'En yakın portalda canlan',
        appendTo: this.botSettingsWindow,
        event: function () {
          window.settings.reviveAtGate = this.checked;
        }
      },
      {
        name: 'reviveLimit',
        labelText: 'Canlanma limiti <span> (5)</span>',
        type: 'range',
        appendTo: this.botSettingsWindow,
        labelBefore: true,
        attrs: {
          min: 0,
          max: 100,
          step: 1,
          value: 10
        },
        event: function () {
          window.settings.reviveLimit = this.value;
          $('span:last-child', this.label).text(' (' + this.value + ')');
        }
      }
    ];

    /*this.saveSettingsBtn = ControlFactory.btn({
      labelText: 'Save settings',
      appendTo: ControlFactory.emptyDiv(this.botSettingsWindow)
    });*/

    controls.forEach((control) => {
      this[control.name] = ControlFactory.createControl(control);
    });

    /*$(this.saveSettingsBtn).on('click', (e) => {
      chrome.storage.sync.set(window.settings);
      console.log("saved")
    })*/
  }
}