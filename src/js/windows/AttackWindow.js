class AttackWindow {
  createWindow() {
    this.attackWindow = WindowFactory.createWindow({
      width: 320,
      text: "Saldırı Detayları"
    });

    this.targetNameTxt = jQuery("<h4>");
    this.targetNameTxt.text("Hedef: -");

    this.hpTxt = jQuery("<h4>");
    this.hpTxt.text("DP: -");

    this.shdTxt = jQuery("<h4>");
    this.shdTxt.text("Kalkan: -");

    this.targetNameTxt.appendTo(this.attackWindow);
    this.hpTxt.appendTo(this.attackWindow);
    this.shdTxt.appendTo(this.attackWindow);
  }

  removeTarget() {
    this.targetName.text("Hedef: -");
    this.hpTxt.text("DP: -");
    this.shdTxt.text("Kalkan: -");
  }

  targetName(value) {
    this.targetNameTxt.text("Hedef: " + value);
  }

  hp(value) {
    this.hpTxt.text("DP: " + value);
  }

  shd(value) {
    this.shdTxt.text("Kalkan: " + value);
  }
}